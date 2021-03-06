'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:HomologacionConceptoHomologacionConceptoActualizarCtrl
 * @description
 * # HomologacionConceptoHomologacionConceptoActualizarCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
  .controller('HomologacionConceptoActualizarCtrl', function($scope, $routeParams, financieraRequest, financieraMidRequest, titanRequest, agoraRequest, coreRequest, oikosRequest, $translate, $window) {
    var self = this;
    self.HomologacionId = $routeParams.Id;
    self.cargando_con_kronos = true;
    self.hayData_con_kronos = true;
    self.cargando_con_titan = true;
    self.hayData_con_titan = true;

    financieraRequest.get("homologacion_concepto",
      $.param({
        query: "Id:" + self.HomologacionId,
        limit: 1,
      })
    ).then(function(response) {
      self.homologacionConceptoData = response.data[0];
      self.homologacionConceptoData.Vigencia = self.homologacionConceptoData.Vigencia.toString(); //para validar campos vigencia
      // data concepti titan
      titanRequest.get('concepto_nomina',
        $.param({
          query: "Id:" + self.homologacionConceptoData.ConceptoTitan,
          limit: 1
        })
      ).then(function(response) {
        self.ConceptoTitanData = response.data[0];
      })
      // data nomina titan
      titanRequest.get('nomina',
        $.param({
          query: "Id:" + self.homologacionConceptoData.NominaTitan,
          limit: 1
        })
      ).then(function(response) {
        self.NominaTitanData = response.data[0];
        if (self.NominaTitanData.TipoNomina.Nombre == 'HCS') {
          self.camposFacultades = true;
        } else {
          self.camposFacultades = false;
        }
        //ss
        if (self.NominaTitanData.TipoNomina.Nombre == 'HCS' || self.NominaTitanData.TipoNomina.Nombre == 'HCH' || self.NominaTitanData.TipoNomina.Nombre == 'FP' || self.NominaTitanData.TipoNomina.Nombre == 'DP') {
          self.campoSeguridadSocial = true;
        } else {
          self.campoSeguridadSocial = false;
        }
      })
      // Proyecto y facultad
      financieraRequest.get('concepto_tesoral_facultad_proyecto',
        $.param({
          query: "HomologacionConcepto.Id:" + self.homologacionConceptoData.Id,
          limit: 1
        })
      ).then(function(response) {
        if (response.data != null) {
          self.ConceptoFaculatadProyecto = response.data[0];
          // data proyecto y Facultad
          oikosRequest.get('dependencia',
            $.param({
              query: "Id:" + self.ConceptoFaculatadProyecto.Facultad,
              limit: 1
            })
          ).then(function(response) {
            self.FacultadData = response.data[0];
            self.homologacionConceptoData.Facultad = self.FacultadData.Id;
            // select de proyectos curriculares
            oikosRequest.get('dependencia/proyectosPorFacultad/' + self.FacultadData.Id).then(function(response) {
              self.selectProyectoCurriculares = response.data;
            });
          });
          oikosRequest.get('dependencia',
            $.param({
              query: "Id:" + self.ConceptoFaculatadProyecto.ProyectoCurricular,
              limit: 1
            })
          ).then(function(response) {
            self.ProyectoCurricularData = response.data[0];
            self.homologacionConceptoData.ProyectoCurricular = self.ProyectoCurricularData.Id;
          })
        }
      })
    })
    // ===============
    // Opciones Select
    // ===============
    titanRequest.get('nomina',
      $.param({
        query: "Activo:true",
        limit: -1
      })
    ).then(function(response) {
      self.selectNominaTitan = response.data
    })
    oikosRequest.get('dependencia_padre/FacultadesConProyectos',
      $.param({
        limit: -1
      })
    ).then(function(response) {
      self.selectFacultades = response.data;
    })
    //
    self.getIdNomina = function(nominaSelect) {
      if (nominaSelect != undefined) {
        self.homologacionConceptoData.NominaTitan = nominaSelect.Id;
        if (nominaSelect.TipoNomina.Nombre == 'HCS') {
          self.camposFacultades = true;
        } else {
          self.camposFacultades = false;
          delete self.homologacionConceptoData['Facultad']
          delete self.homologacionConceptoData['ProyectoCurricular']
        }
        //ss
        if (nominaSelect.TipoNomina.Nombre == 'HCS' || nominaSelect.TipoNomina.Nombre == 'HCH' || nominaSelect.TipoNomina.Nombre == 'FP' || nominaSelect.TipoNomina.Nombre == 'DP') {
          self.campoSeguridadSocial = true;
        } else {
          self.campoSeguridadSocial = false;
          self.homologacionConceptoData.SeguridadSocial = false;
        }

      } else {
        delete self.HomologacionConcepto['NominaTitan']
      }
    }
    self.getIdFacultad = function(facultadSelect) {
      if (facultadSelect != undefined) {
        self.homologacionConceptoData.Facultad = facultadSelect.Id;
        self.selectProyectoCurriculares = facultadSelect.Opciones
      } else {
        delete self.homologacionConceptoData['Facultad'];
      }
    }
    //
    self.getIdProyectoCurricular = function(proyectoCurricularSelect) {
      if (proyectoCurricularSelect != undefined) {
        self.homologacionConceptoData.ProyectoCurricular = proyectoCurricularSelect.Id;
      } else {
        delete self.homologacionConceptoData['ProyectoCurricular']
      }
    }
    // ===============
    // grid para cambiar conceptos
    // ===============
    self.gridConcepto = {
      enableRowSelection: true,
      enableRowHeaderSelection: true,
      paginationPageSizes: [8, 50, 100],
      enableFiltering: true,
      minRowsToShow: 8,
      useExternalPagination: false,
      columnDefs: [{
          field: 'Id',
          visible: false
        },
        {
          field: 'Codigo',
          displayName: $translate.instant('CODIGO') + " " + $translate.instant('CONCEPTO') + " Kronos",
          width: '20%',
          cellClass: 'input_center',
          headerCellClass: 'encabezado'
        },
        {
          field: 'Nombre',
          displayName: $translate.instant('NOMBRE') + " " + $translate.instant('CONCEPTO') + " Kronos",
          cellClass: 'input_center',
          headerCellClass: 'encabezado'
        }
      ],
    };
    self.gridConcepto.multiSelect = false;
    self.gridConcepto.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function() {
        if ($scope.gridApi.selection.getSelectedRows()[0] != undefined) {
          self.ConceptoSelect = $scope.gridApi.selection.getSelectedRows()[0];
          self.homologacionConceptoData.ConceptoKronos = self.ConceptoSelect;
        } else {
          delete self.homologacionConceptoData['ConceptoKronos'];
        }
      });
    };
    financieraRequest.get("concepto",
      $.param({
        query: "Clasificador:false",
        sortby: "Codigo",
        limit: -1,
        order: "asc",
      })
    ).then(function(response) {
      if(response.data === null){
        self.hayData_con_kronos = false;
        self.cargando_con_kronos = false;
        self.gridConcepto.data = [];
      }else{
        self.hayData_con_kronos = true;
        self.cargando_con_kronos = false;
      self.gridConcepto.data = response.data;
    }
    });
    //
    self.gridConceptoTitan = {
      enableRowSelection: true,
      enableRowHeaderSelection: true,
      paginationPageSizes: [8, 50, 100],
      enableFiltering: true,
      minRowsToShow: 8,
      useExternalPagination: false,
      columnDefs: [{
          field: 'Id',
          visible: false
        },
        {
          field: 'Id',
          displayName: $translate.instant('CODIGO') + " " + $translate.instant('CONCEPTO') + " Titan",
          width: '20%',
          cellClass: 'input_center',
          headerCellClass: 'encabezado'
        },
        {
          field: 'AliasConcepto',
          displayName: $translate.instant('NOMBRE') + " " + $translate.instant('CONCEPTO') + " Titan",
          width: '80%',
          cellClass: 'input_center',
          headerCellClass: 'encabezado'
        }
      ],
    };
    self.gridConceptoTitan.multiSelect = false;
    self.gridConceptoTitan.onRegisterApi = function(gridApi) {
      $scope.gridApi2 = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function() {
        if ($scope.gridApi2.selection.getSelectedRows()[0] != undefined) {
          self.ConceptoTitanSelect = $scope.gridApi2.selection.getSelectedRows()[0];
          self.homologacionConceptoData.ConceptoTitan = self.ConceptoTitanSelect.Id;
          // refrescar ConceptoTitanData
          titanRequest.get('concepto_nomina',
            $.param({
              query: "Id:" + self.homologacionConceptoData.ConceptoTitan,
              limit: 1
            })
          ).then(function(response) {
            self.ConceptoTitanData = response.data[0];
          })
        } else {
          delete self.homologacionConceptoData['ConceptoTitan'];
        }

      });
    };
    titanRequest.get("concepto_nomina",
      $.param({
        query: "NaturalezaConcepto.Nombre:devengo",
        sortby: "Id",
        limit: -1,
        order: "asc",
      })
    ).then(function(response) {
      if(response.data === null){
        self.hayData_con_titan = false;
        self.cargando_con_titan = false;
        self.gridConceptoTitan.data = [];
      }else{
        self.hayData_con_titan = true;
        self.cargando_con_titan = false;
         self.gridConceptoTitan.data = response.data;
      }
    });
    // ===============
    // Actualizar
    // ===============
    // Funcion encargada de validar la obligatoriedad de los campos
    self.camposObligatorios = function() {
      var respuesta;
      self.MensajesAlerta = '';
      if (!self.checkVigencia(self.homologacionConceptoData.Vigencia)) {
        self.MensajesAlerta = self.MensajesAlerta + "<li>" + $translate.instant('MSN_DEBE_FORMA_VIGENCIA') + "</li>";
      }
      // Operar
      if (self.MensajesAlerta == undefined || self.MensajesAlerta.length == 0) {
        respuesta =  true;
      } else {
        respuesta =  false;
      }
      return respuesta;
    }
    self.checkVigencia = function(p_vigencia) {
      var respuesta;
      if (p_vigencia.length != 4) {
        respuesta =  false;
      } else {
        respuesta =  true;
      }
      return respuesta;
    }

    self.actualizarHomologacion = function() {
      if (self.camposObligatorios()) {
        self.homologacionConceptoData.Vigencia = parseInt(self.homologacionConceptoData.Vigencia)
        console.log("Actualizar");
        console.log(self.homologacionConceptoData);
        financieraRequest.post('homologacion_concepto/ActualizarHomologacionConcepto', self.homologacionConceptoData)
          .then(function(response) {
            self.resultado = response.data;
            console.log("Resultado");
            console.log(self.resultado);
            console.log("Resultado");
            swal({
              title: $translate.instant('HOMOLOGACION') + " " + $translate.instant('CONCEPTOS'),
              text: $translate.instant(self.resultado.Code) + self.resultado.Body,
              type: self.resultado.Type,
            }).then(function() {
              $window.location.href = '#/homologacion_concepto/homologacion_concepto_ver_todas';
            })
          })
      } else {
        swal({
          title: 'Error!',
          html: '<ol align="left">' + self.MensajesAlerta + '</ol>',
          type: 'error'
        })
      }
    }



    //
  });
