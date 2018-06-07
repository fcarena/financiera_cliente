'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:IngresosSinSituacionFondosRegistroCtrl
 * @description
 * # IngresosSinSituacionFondosRegistroCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
  .controller('IngresosSinSituacionFondosRegistroCtrl', function ($scope,financieraRequest,$translate,financieraMidRequest) {
    var ctrl  = this;

    ctrl.cargarListas = function(){

      financieraRequest.get('unidad_ejecutora', $.param({
          limit: -1
      })).then(function(response) {
          ctrl.unidadesejecutoras = response.data;
      });

      financieraRequest.get("orden_pago/FechaActual/2006").then(function(response) {
        var year = parseInt(response.data);
        ctrl.anos = [];
        for (var i = 0; i < 5; i++) {
          ctrl.anos.push(year - i);
        }
      });
    }


    ctrl.cargarListas();

    ctrl.validateFields = function(){
      if(angular.isUndefined(ctrl.rubroSeleccionado)){
        swal("", $translate.instant("E_RB003"),"error");
        return;
      }

      if (ctrl.rubroSeleccionado.Hijos != null) {
        swal("",$translate.instant("E_ISF001"),"error");
        return;
      }

      if($scope.datosOblig.$invalid){
        angular.forEach($scope.datosOblig.$error,function(controles,error){
          angular.forEach(controles,function(control){
            control.$setDirty();
          });
        });

        swal("", $translate.instant("CAMPOS_OBLIGATORIOS"),"error");
        return;

      }
    }

    ctrl.registrar = function(){
      var request = {};
        ctrl.validateFields();

        request = {
          IngresoSinSituacionFondos:{
            Rubro:{},
            Vigencia:ctrl.vigencia,
            UsuarioRegistro:1111,
            UnidadEjecutora:ctrl.unidadejecutora.Id,
            ValorIngreso:ctrl.valor
          }
        }
        request.IngresoSinSituacionFondos.Rubro.Id = parseInt(ctrl.rubroSeleccionado.Id);
        console.log("request ",request);
        financieraMidRequest.post('ingreso_sin_situacion_fondos',request).then(function(response){
          if(response.data.Type==="error"){
            swal("",$translate.instant(response.data.Code),response.data.Type);
          }else{
            var templateAlert = "<table class='table table-bordered'><th>" + $translate.instant('CONSECUTIVO') + "</th>";
            templateAlert = templateAlert + "<tr class='success'><td>" + response.data.Body.Id + "</td>" ;
            swal('',templateAlert,response.data.Type);
          }
        });
    }

  });