'use strict';

/**
 * @ngdoc controller
 * @name financieraClienteApp.controller:GestionDescuentosCtrl
 * @alias gestionDescuentos
 * @requires $scope
 * @requires $translate
 * @requires financieraService.service:financieraRequest
 * @param {service} financieraRequest Servicio para el API de financiera {@link financieraService.service:financieraRequest financieraRequest}
 * @param {injector} $scope scope del controlador
 * @param {injector} $translate translate de internacionalizacion
 * @description
 * # GestionDescuentosCtrl
 * Controlador para la gestion de impuestos y descuentos del modulo de contabilidad.
 *
 * **Nota:** los impuestos o descuentos a tratarse se relacionan con las cuentas ya existentes en el plan de cuentas maestro.
 */

angular.module('financieraClienteApp')
  .controller('GestionDescuentosCtrl', function($scope, financieraRequest, administrativaRequest, $translate) {
    var self = this;

    //grid para mostrar los impuestos y descuentos existentes
    self.gridOptions = {
      paginationPageSizes: [5, 10, 15, 20, 50],
      paginationPageSize: 5,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      enableFiltering: true,
      enableHorizontalScrollbar: 0,
      enableVerticalScrollbar: 0,
      useExternalPagination: false,
      enableSelectAll: false,
      columnDefs: [
        {
            field: 'Id',
            displayName: $translate.instant('ID'),
            headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
            width: '5%'
        },
        {
          field: 'Descripcion',
          displayName: $translate.instant('DESCRIPCION'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '35%'
        },
        {
          field: 'TarifaUvt',
          displayName: $translate.instant('UVT'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '7%'
        },
        {
          field: 'Porcentaje',
          displayName: $translate.instant('PORCENTAJE'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '7%'
        },
        {
          field: 'Deducible',
          displayName: $translate.instant('DEDUCIBLE'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          cellTemplate: '<center><input type="checkbox" ng-checked="row.entity.Deducible" disabled></center>',
          width: '8%'
        },
        {
          field: 'CuentaContable.Codigo',
          displayName: $translate.instant('CODIGO_CUENTA'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '9%'
        },
        {
          field: 'proveedor.NomProveedor',
          displayName: $translate.instant('PROVEEDOR'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '16%'
        },
        {
          field: 'TipoCuentaEspecial.Nombre',
          displayName: $translate.instant('TIPO'),
          headerCellClass: $scope.highlightFilteredHeader + 'text-center text-info',
          width: '8%'
        },
        {
          name: $translate.instant('OPCIONES'),
          enableFiltering: false,
          width: '5%',
          cellTemplate: '<center>' +
            '<a href="#/plan_cuentas/editar_descuento/{{row.entity.Id}}" class="editar">' +
            '<i data-toggle="tooltip" title="{{\'BTN.EDITAR\' | translate }}" class="fa fa-cog fa-lg" aria-hidden="true"></i></a> ' +
            '</center>'
        }
      ]
    };

    //opciones extras para el control del grid
    self.gridOptions.multiSelect = false;
    self.gridOptions.modifierKeysToMultiSelect = false;
    self.gridOptions.enablePaginationControls = true;
    self.gridOptions.onRegisterApi = function(gridApi) {
      self.gridApi = gridApi;
      gridApi.selection.on.rowSelectionChanged($scope, function() {
        $scope.cuenta_des = self.gridApi.selection.getSelectedRows()[0];
      });
    };

    /**
     * @ngdoc function
     * @name financieraClienteApp.controller:GestionDescuentosCtrl#cargar
     * @methodOf financieraClienteApp.controller:GestionDescuentosCtrl
     * @description
     * Se realiza la carga de los descuentos e impuestos a traves del servicio {@link financieraService.service:financieraRequest financieraRequest}
     * que retorna la informacion de la cuenta contable y la del descuento o impuesto.
     */
    self.cargar = function() {
      financieraRequest.get("cuenta_especial", $.param({
        limit: -1
      })).then(function(response) {
        self.gridOptions.data = response.data;
        angular.forEach(self.gridOptions.data, function(value){
          console.log(value);
          administrativaRequest.get("informacion_proveedor", $.param({
            query:"Id:"+value.InformacionPersonaJuridica,
            fields:"Id,Tipopersona,NumDocumento,NomProveedor"
          })).then(function(response) {
            value.proveedor = response.data[0];
          });
        });
      });
    };

    self.cargar();

  });
