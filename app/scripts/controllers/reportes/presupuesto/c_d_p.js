'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:ReportesPresupuestoCDPCtrl
 * @description
 * # ReportesPresupuestoCDPCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
  .controller('ReportesPresupuestoCDPCtrl', function (financieraRequest, financieraMidRequest, oikosRequest, coreRequest, administrativaRequest, $http, $q, $filter) {
    var ctrl = this;
    var escudoUd64;
    var entidad;
    var producto =
    {
        Codigo: "123424543545",
        Nombre: "PRODUCTO PRUEBA"
    }
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f = new Date();

    // Estilos del reporte
    var estilos = {
      header: {
        fontSize: 14,
        bold: true,
        alignment: 'center',
        margin: [0,0,0,20]
      },
      subheader: {
        fontSize: 12,
        bold: true,
        alignment: 'center',
        margin: [10,0,0,0]
      },
      subheader_part: {
        fontSize: 13,
        bold: true,
        alignment: 'center',
        margin: [0,0,0,10]
      },
      paragraph: {
        fontSize: 11,
        alignment: 'center',
        margin: [0,0,0, 20]
      },
      rubro_table: {
        alignment: "center",
        border: undefined
      },
      table_header: {
        fontSize: 11,
        alignment: 'center',
        bold: true,
        margin: [2,2,2,2]
      },
      table_content: {
        fontSize: 10,
        margin: [0,5,0,0],
        alignment: 'center',
        border: undefined
      },
      objeto: {
        fontSize: 10,
        margin: [0,20,0,20],
        alignment: 'center'
      },
      lineaFirma: {
        margin: [0,8,0,10],
        alignment: 'center'
      },
      valores: {
        margin: [0,10,0,10],
        alignment: 'right',
        bold: true,
        fontSize: 11
      },
      firmas: {
        alignment: "center",
        fontSize: 10
      },
      footer: {
        alignment: "right",
        fontSize: 8,
        margin: [0,0,10,-2]
      }
    };
    var reporte = { content: [], styles: estilos };

    // Imagen UD
    $http.get("scripts/models/imagen_ud.json").then(function(response) {
      escudoUd64 = response.data;
    }, function(err) {
      return
    });

    // Vigencias de apropiaciones
    financieraRequest.get('apropiacion/VigenciaApropiaciones', $.param({
      limit: 0
    })).then(function(response) {
      ctrl.vigencias = response.data.sort();
    });

    // Unidades ejecutoras
    financieraRequest.get('unidad_ejecutora', $.param({
      limit: 0
    })).then(function(response) {
      ctrl.unidadesEjecutoras = response.data;
    });

    // Fuentes de finaciamiento
    financieraRequest.get('fuente_financiamiento', $.param({
      fields: 'Id,Nombre,Codigo,TipoFuenteFinanciamiento'
    })).then(function (response) {
      ctrl.fuentesFinanciamiento = response.data;
    });

    // Jefe de Presupuesto
    oikosRequest.get('dependencia', $.param({
      limit: 1,
      query: 'Nombre__icontains:PRESUPUESTO'
    })).then(function(response) {
      ctrl.dependenciaPresupuesto = response.data;

      coreRequest.get('jefe_dependencia', $.param({
        limit: 1,
        query: 'DependenciaId:'+ctrl.dependenciaPresupuesto[0].Id
      })).then(function(response) {

        administrativaRequest.get('informacion_proveedor/'+response.data[0].TerceroId)
          .then(function(response) {
            ctrl.jefePresupuesto = response.data;
          });
      });
    });

    function getFechaActual() {
      var defered = $q.defer();
      var promise = defered.promise;

      financieraRequest.get("orden_pago/FechaActual/01-02-2006 15:04:05 PM").then(function(response) {
        defered.resolve(response.data);
       }, function(err) {
         defered.reject(err)
       });
       return promise;
    }

    function asynMovFuenteFinanApropiacion() {
      var defered = $q.defer();
      var promise = defered.promise;

      financieraRequest.get("movimiento_fuente_financiamiento_apropiacion", $.param({
        limit: -1,
        query: 'FuenteFinanciamientoApropiacion.FuenteFinanciamiento.Id:'+ctrl.fuenteFinanciamiento.Id+',Fecha__startswith:'+ctrl.vigencia
      })).then(function(response) {
        var valorTotal = 0;
        var fuente_financiamiento_apropiacion = response.data;
        if (fuente_financiamiento_apropiacion) {
          for (var i = 0; i < fuente_financiamiento_apropiacion.length; i++) {
            valorTotal += fuente_financiamiento_apropiacion[i].Valor;
          }
        }
        defered.resolve(valorTotal);
      }, function(err) {
        defered.reject(err);
      });
      return promise;
    }

    function asynEntidad() {
      var defered = $q.defer();
      var promise = defered.promise;

      financieraRequest.get('entidad/'+ctrl.unidadEjecutora.Entidad.Id)
        .then(function(response) {
          defered.resolve(response.data);
        }, function(err) {
          defered.reject(err);
        });

      return promise;
    }

    ctrl.generarReporte = function () {
        asynEntidad()
          .then(function(data) {
            entidad = data;

            asynMovFuenteFinanApropiacion()
              .then(function(data) {


                getFechaActual()
                  .then(function(data) {
                    reporte.footer = {text:'Documento generado con usuario [USUARIO_SESIÓN] y fecha ' +data, style: "footer"};

                    financieraMidRequest.get('disponibilidad/ListaDisponibilidades/'+ctrl.vigencia+ "?", 'limit=-1&UnidadEjecutora='+ctrl.unidadEjecutora.Id+'&query=DisponibilidadApropiacion.FuenteFinanciamiento.Id:'+ctrl.fuenteFinanciamiento.Id).then(function(response) {
                      var fuente_cdp = response.data;
                      var totalCdp = 0;
                      var fuente_cdp_tabla = [];
                      var valorDisponible;

                      for (var i = 0; i < fuente_cdp.length; i++) {
                        if (fuente_cdp[i].Solicitud.SolicitudDisponibilidad.Necesidad.Numero === ctrl.necesidad) {
                          fuente_cdp_tabla = fuente_cdp[i];
                        } else {
                          for (var j = 0; j < fuente_cdp[i].DisponibilidadApropiacion.length; j++) {
                            fuente_cdp[i].DisponibilidadApropiacion[0] = fuente_cdp[i].DisponibilidadApropiacion[j];
                            totalCdp += fuente_cdp[i].DisponibilidadApropiacion[j].Valor;
                          }
                        }
                      }

                      if (fuente_cdp_tabla.DisponibilidadApropiacion[0].Disponibilidad.NumeroDisponibilidad === 1) {
                        valorDisponible = fuente_cdp_tabla.DisponibilidadApropiacion[0].Apropiacion.Valor - fuente_cdp_tabla.DisponibilidadApropiacion[0].Valor;
                      } else {
                        valorDisponible = fuente_cdp_tabla.DisponibilidadApropiacion[0].Apropiacion.Valor - (totalCdp + fuente_cdp_tabla.DisponibilidadApropiacion[0].Valor);
                      }

                      construirReporte(fuente_cdp_tabla, totalCdp, valorDisponible, fuente_cdp_tabla.DisponibilidadApropiacion[0].Apropiacion.Valor);
                    });
                  }).catch(function(err) {
                    return
                  });
              }).catch(function(err) {
                return
              });
          }).catch(function(err) {
            return
          });
    }

    function construirReporte(datosCdp, valorCdp, valorDisponible, valorTotal) {
      var jefeDependenciaSolicitante = datosCdp.Solicitud.DependenciaSolicitante.InfoJefeDependencia.PrimerNombre + ' ' + datosCdp.Solicitud.DependenciaSolicitante.InfoJefeDependencia.SegundoNombre + ' ' + datosCdp.Solicitud.DependenciaSolicitante.InfoJefeDependencia.PrimerApellido + ' ' + datosCdp.Solicitud.DependenciaSolicitante.InfoJefeDependencia.SegundoApellido;
      reporte.content = [];
      reporte.styles = estilos;
      reporte.content.push(
        { image: escudoUd64.imagen, alignment: 'center', width: 100 },
        { text: entidad.Nombre+'', style: 'header' },
        { text: entidad.CodigoEntidad+' - '+entidad.Nombre, style: 'subheader' },
        { text: 'Unidad Ejecutora: '+ctrl.unidadEjecutora.Id+' - '+ctrl.unidadEjecutora.Nombre, style: 'subheader_part' },
        { text: 'CERTIFICADO DE DISPONIBILIDAD PRESUPUESTAL', style: 'subheader' },
        { text: "No. "+datosCdp.DisponibilidadApropiacion[0].Disponibilidad.NumeroDisponibilidad, style: 'subheader_part' },
        { text: 'EL SUSCRITO RESPONSABLE DEL PRESUPUESTO', style: 'subheader' },
        { text: 'CERTIFICA', style: 'subheader_part' },
        { text: 'Que en el Presupuesto de Gastos e Inversiones de la vigencia '+ctrl.vigencia+' existe apropiación disponible para atender a la presente solicitud así: ', style: 'paragraph' }
      );

      reporte.content.push(
        function () {
          var tabla = {
            style: 'rubro_table',
            table: {
              widths: ["25%", "40%", "35%"],
              headerRows: 1,
              body: [
                [
                  { text: 'CODIGO PRESUPUESTAL ', style: 'table_header'},
                  { text: 'RUBRO', style: 'table_header'},
                  { text: 'VALOR', style: 'table_header'}
                ]
              ]
            }
          }
          tabla.table.body.push(
            [{ text: datosCdp.DisponibilidadApropiacion[0].Apropiacion.Rubro.Codigo, style: 'table_content' },
            { text: datosCdp.DisponibilidadApropiacion[0].Apropiacion.Rubro.Nombre, style: 'table_content' },
            { text: $filter('currency')(datosCdp.DisponibilidadApropiacion[0].Valor), style: 'table_content' }]
          );
        return tabla
        }()
      );

      reporte.content.push(
        { text: 'Valor Apropiacion: '+$filter('currency')(valorTotal), style: 'valores' },
        { text: 'Valor Disponible: '+$filter('currency')(valorDisponible), style: 'valores' }
      );

      if (ctrl.fuenteFinanciamiento.TipoFuenteFinanciamiento.Nombre === "Inversión") {
        reporte.content.push(
          { text: [
              { text: "Fuente de inversión: ", bold: true, fontSize: 10},
              { text: ctrl.fuenteFinanciamiento.Nombre, fontSize: 10}
            ]
          },
          { text: [
              { text: "Producto: ", bold: true, fontSize: 10},
              { text: producto.Nombre, fontSize: 10 }
            ]
          }
        );
      }

      reporte.content.push(
        { text: 'OBJETO:', bold: true, margin: [0,20,0,5], fontSize: 10 },
        { text: datosCdp.Solicitud.SolicitudDisponibilidad.Necesidad.Objeto, style: 'objeto' },
        { text: 'Se expide con NECESIDAD APROBADA N° '+ctrl.necesidad+' a solicitud de '+ jefeDependenciaSolicitante + ', '+ datosCdp.Solicitud.DependenciaSolicitante.Nombre ,alignment: 'center', fontSize: 10},
        { text: 'Bogotá D.C, '+f.getDate()+' de '+meses[f.getMonth()]+' del '+f.getFullYear(), alignment: 'left', margin: [0,15,0,0], fontSize: 10},
        { text: '', margin: [0,30,0,30]},
        { text: '_______________________', style: 'lineaFirma'},
        { text: ctrl.jefePresupuesto.NomProveedor, bold: true, style: "firmas" },
        { text: 'RESPONSABLE DE '+ctrl.dependenciaPresupuesto[0].Nombre, style: "firmas" },
        { text: '_______________________', margin: [0,20,0,0], style: 'lineaFirma' },
        { text: 'ELABORO', style: "firmas" },
        { text: '[USUARIO_SESIÓN]', bold: true, style: "firmas" }
      );

      pdfMake.createPdf(reporte).download('cdp.pdf');
    }

  });
