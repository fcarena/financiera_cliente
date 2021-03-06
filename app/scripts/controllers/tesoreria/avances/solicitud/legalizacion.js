'use strict';

/**
 * @ngdoc function
 * @name financieraClienteApp.controller:TesoreriaAvancesLegalizacionCtrl
 * @description
 * # TesoreriaAvancesLegalizacionCtrl
 * Controller of the financieraClienteApp
 */
angular.module('financieraClienteApp')
    .controller('LegalizacionCtrl', function($scope, financieraRequest, administrativaRequest, $translate, $localStorage, wso2Request) {
        var ctrl = this;
        ctrl.operacion = "";
        ctrl.row_entity = {};
        ctrl.row_entity = {};
        $scope.encontrado = false;
        $scope.solicitud = $localStorage.avance;
        $scope.botones = [
            { clase_color: "editar", clase_css: "fa fa-pencil fa-lg  faa-shake animated-hover", titulo: $translate.instant('BTN.EDITAR'), operacion: 'edit', estado: true },
            { clase_color: "borrar", clase_css: "fa fa-trash fa-lg  faa-shake animated-hover", titulo: $translate.instant('BTN.BORRAR'), operacion: 'delete', estado: true }
        ];
        $scope.clase_load = {
            clase: "fa fa-spinner",
            animacion: "faa-spin animated"
        };
        ctrl.legalizacionCompras = { Valor: 0 };
        ctrl.subtotal = 0;
        ctrl.gridOptionsCompras = {
            paginationPageSizes: [5, 15, 20],
            paginationPageSize: 5,
            enableFiltering: true,
            enableSorting: true,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            columnDefs: [{
                    field: 'Id',
                    visible: false
                },
                {
                    field: 'Tercero',
                    displayName: $translate.instant('DOCUMENTO') + " " + $translate.instant('TERCERO'),
                    width: '12%',
                },
                {
                    field: 'NumeroFactura',
                    displayName: $translate.instant('NO_FACTURA'),
                    width: '12%',
                },
                {
                    field: 'InformacionProveedor[0].NomProveedor',
                    displayName: $translate.instant('NOMBRE'),
                    width: '39%',
                },
                {
                    field: 'Valor',
                    displayName: $translate.instant('VALOR'),
                    cellFilter: 'currency',
                    width: '14%',
                },
                {
                    field: 'FechaCompra',
                    displayName: $translate.instant('FECHA_COMPRA'),
                    cellTemplate: '<div align="center"><span>{{row.entity.FechaCompra | date:"yyyy-MM-dd":"UTC"}}</span></div>',
                    width: '10%',
                },
                {
                    //<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Delete</button>
                    name: $translate.instant('OPCIONES'),
                    enableFiltering: false,
                    width: '8%',
                    cellTemplate: '<btn-registro funcion="grid.appScope.loadrowcompras(fila,operacion)" grupobotones="grid.appScope.botones" fila="row"></btn-registro>'
                }
            ]
        };

        ctrl.gridOptionsPracticas = {
            paginationPageSizes: [5, 15, 20],
            paginationPageSize: 5,
            enableFiltering: true,
            enableSorting: true,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            columnDefs: [{
                    field: 'Id',
                    visible: false
                },
                {
                    field: 'Tercero',
                    displayName: $translate.instant('CODIGO'),
                    width: '12%',
                },
                {
                    field: 'Estudiante.numero_documento',
                    displayName: $translate.instant('DOCUMENTO'),
                    width: '12%',
                },
                {
                    field: 'Estudiante.nombre',
                    displayName: $translate.instant('NOMBRE'),
                    width: '39%',
                },
                {
                    field: 'Valor',
                    displayName: $translate.instant('VALOR'),
                    cellFilter: 'currency',
                    width: '14%',
                },
                {
                    field: 'Dias',
                    displayName: $translate.instant('Dias'),
                    width: '14%',
                },
                {
                    //<button class="btn primary" ng-click="grid.appScope.deleteRow(row)">Delete</button>
                    name: $translate.instant('OPCIONES'),
                    enableFiltering: false,
                    width: '10%',
                    cellTemplate: '<btn-registro funcion="grid.appScope.loadrowpracticas(fila,operacion)" grupobotones="grid.appScope.botones" fila="row"></btn-registro>'
                }
            ]
        };

        ctrl.calcular_valor_impuesto = function() {
            var sum_impuestos = 0;
            for (var i in ctrl.Impuesto) {
                if (i === "rete_iva") {
                    if (!angular.isUndefined(ctrl.Impuesto.IVA)) {
                        ctrl.Impuesto[i].Valor = ctrl.Impuesto[i].Porcentaje * ctrl.Impuesto.IVA.Porcentaje * ctrl.LegalizacionCompras.Valor;
                    } else {
                        ctrl.Impuesto[i].Valor = 0;
                    }
                } else {
                    ctrl.Impuesto[i].Valor = ctrl.Impuesto[i].Porcentaje * ctrl.LegalizacionCompras.Valor;
                }
                if (!angular.isUndefined(ctrl.Impuesto[i].Valor) && i !== "IVA") {
                    sum_impuestos += ctrl.Impuesto[i].Valor;
                }
            }
            if (angular.isUndefined(ctrl.Impuesto.IVA)) {
                ctrl.subtotal = ctrl.LegalizacionCompras.Valor;
            } else {
                ctrl.subtotal = ctrl.LegalizacionCompras.Valor + (ctrl.Impuesto.IVA.Porcentaje * ctrl.LegalizacionCompras.Valor);
            }
            ctrl.Total = ctrl.subtotal - sum_impuestos;
        };

        $scope.loadrowpracticas = function(row, operacion) {
            ctrl.row_entity = row.entity;
            ctrl.operacion = operacion;
            switch (operacion) {
                case "add":
                    ctrl.limpiar_practica();
                    $('#modal_practicas_academicas').modal('show');
                    break;
                case "edit":
                    console.log(ctrl.row_entity);
                    ctrl.LegalizacionPracticaAcademica = ctrl.row_entity;
                    $('#modal_practicas_academicas').modal('show');
                    break;
                case "delete":
                    ctrl.delete_requisito();
                    break;
            }
        };

        $scope.loadrowcompras = function(row, operacion) {
            ctrl.row_entity = row.entity;
            ctrl.operacion = operacion;
            switch (operacion) {
                case "add":
                    ctrl.limpiar_compras();
                    $('#modal_legalizacion_compras').modal('show');
                    break;
                case "edit":
                    console.log(ctrl.row_entity);
                    ctrl.LegalizacionPracticaAcademica = ctrl.row_entity;
                    $('#modal_legalizacion_compras').modal('show');
                    break;
                case "delete":
                    ctrl.delete_requisito();
                    break;
            }
        };


        ctrl.limpiar_practica = function() {
            $scope.encontrado = false;
            ctrl.LegalizacionPracticaAcademica = null;
        };
        ctrl.limpiar_compras = function() {
            $scope.encontrado = false;
            ctrl.LegalizacionCompras = null;
        };


        ctrl.cargar_estudiante = function() {
            $scope.encontrado = false;
            ctrl.LegalizacionPracticaAcademica.Estudiante = null;
            if (ctrl.LegalizacionPracticaAcademica.Tercero.length === 11) {
                $scope.estudiante_cargado = true;
                var parametros = [{
                    name: "Información básica",
                    value: "info_basica"
                }, {
                    name: "codigo estudiante",
                    value: ctrl.LegalizacionPracticaAcademica.Tercero
                }];
                wso2Request.get("bienestarProxy", parametros).then(function(response) {
                    $scope.estudiante_cargado = false;
                    if (!angular.isUndefined(response.data.datosCollection.datos)) {
                        console.log(response.data.datosCollection.datos[0]);
                        ctrl.LegalizacionPracticaAcademica.Estudiante = response.data.datosCollection.datos[0];
                    } else {
                        $scope.encontrado = "true";
                    }
                });
            }
        };

        ctrl.cargar_proveedor = function() {
            $scope.encontrado = false;
            ctrl.LegalizacionCompras.InformacionProveedor = null;
            administrativaRequest.get("informacion_proveedor",
                    $.param({
                        query: "NumDocumento:" + ctrl.LegalizacionCompras.Tercero,
                        limit: -1
                    }))
                .then(function(response) {
                    console.log(response.data);
                    if (response.data == null) {
                        $scope.encontrado = "true";
                    } else {
                        ctrl.LegalizacionCompras.InformacionProveedor = response.data[0];

                    }
                });
        };

        ctrl.cargar_impuestos = function() {
            ctrl.Impuesto = {};
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "TipoCuentaEspecial.Id:3", //Impuesto IVA
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.iva = response.data;
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "TipoCuentaEspecial.Id:4", //Impuesto ICA
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.ica = response.data;
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "TipoCuentaEspecial.Id:5", //Impuesto RENTA
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.renta = response.data;
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "Id:19", //Impuesto ESTAMPILLA UD
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.Impuesto.estampilla_ud = response.data[0];
                    console.log(ctrl.Impuesto);
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "Id:21", //Impuesto ESTAMPILLA PROCULTURA
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.Impuesto.estampilla_procultura = response.data[0];
                    console.log(ctrl.Impuesto);
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "Id:22", //Impuesto ESTAMPILLA PRO-ADULTO MAYOR
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.Impuesto.estampilla_proadulto_mayor = response.data[0];
                    console.log(ctrl.Impuesto);
                });
            financieraRequest.get("cuenta_especial",
                    $.param({
                        query: "Id:56", //Impuesto RETE IVA
                        limit: -1
                    }))
                .then(function(response) {
                    ctrl.Impuesto.rete_iva = response.data[0];
                    console.log(ctrl.Impuesto);
                });
        };
        ctrl.cargar_impuestos();

        ctrl.delete_compra = function() {
            swal({
                title: 'Está seguro ?',
                text: $translate.instant('ELIMINARA') + ' ' + ctrl.row_entity.CodigoAbreviacion,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: $translate.instant('BTN.BORRAR')
            }).then(function() {
                financieraRequest.delete("requisito_avance", ctrl.row_entity.Id)
                    .then(function(response) {
                        if (response.status === 200) {
                            swal(
                                $translate.instant('ELIMINADO'),
                                ctrl.row_entity.CodigoAbreviacion + ' ' + $translate.instant('FUE_ELIMINADO'),
                                'success'
                            );
                            ctrl.get_all_avances();
                        }
                    });
            })
        };

        ctrl.delete_requisito = function() {
            swal({
                title: 'Está seguro ?',
                text: $translate.instant('ELIMINARA') + ' ' + ctrl.row_entity.Estudiante.nombre,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: $translate.instant('BTN.BORRAR')
            }).then(function() {
                financieraRequest.delete("avance_legalizacion", ctrl.row_entity.Id)
                    .then(function(response) {
                        if (response.status === 200) {
                            swal(
                                $translate.instant('ELIMINADO'),
                                ctrl.row_entity.Estudiante.nombre + ' ' + $translate.instant('FUE_ELIMINADO'),
                                'success'
                            );
                            ctrl.get_all_avance_legalizacion_practica();
                        }
                    });
            })
        };

        ctrl.get_all_avance_legalizacion_practica = function() {
            financieraRequest.get("avance_legalizacion", $.param({
                    query: "avance.Id:" + $scope.solicitud.Id + ",TipoAvanceLegalizacion.Id:1",
                    limit: -1,
                    sortby: "Id",
                    order: "asc"
                }))
                .then(function(response) {
                    ctrl.gridOptionsPracticas.data = response.data;
                    console.log(ctrl.gridOptionsPracticas.data);
                    angular.forEach(ctrl.gridOptionsPracticas.data, function(estudiante) {
                        var parametros = [{
                            name: "Información básica",
                            value: "info_basica"
                        }, {
                            name: "codigo",
                            value: estudiante.Tercero
                        }];
                        wso2Request.get("bienestarProxy", parametros).then(function(response) {
                            $scope.estudiante_cargado = false;
                            if (!angular.isUndefined(response.data.datosCollection.datos)) {
                                estudiante.Estudiante = response.data.datosCollection.datos[0];
                            }
                        });
                    });
                });
        };

        ctrl.get_all_avance_legalizacion_practica();

        ctrl.get_all_avance_legalizacion_compra = function() {
            financieraRequest.get("avance_legalizacion", $.param({
                    query: "avance.Id:" + $scope.solicitud.Id + ",TipoAvanceLegalizacion.Id:2",
                    limit: -1,
                    sortby: "Id",
                    order: "asc"
                }))
                .then(function(response) {
                    ctrl.gridOptionsCompras.data = response.data;
                    ctrl.LegalizacionCompras = response.data;
                    angular.forEach(ctrl.LegalizacionCompras, function(legalizacion) {
                        legalizacion.InformacionProveedor = null;
                        administrativaRequest.get("informacion_proveedor",
                                $.param({
                                    query: "NumDocumento:" + legalizacion.Tercero,
                                    limit: -1
                                }))
                            .then(function(response) {
                                legalizacion.InformacionProveedor = response.data;
                            });
                    });
                    console.log("__________________________");
                    console.log(ctrl.gridOptionsCompras.data);
                });
        };

        ctrl.get_all_avance_legalizacion_compra();

        ctrl.add_edit_compras = function() {
            var lista_impuestos = [];
            for (var i in ctrl.Impuesto) {
                if (ctrl.Impuesto[i].Valor !== 0) {
                    lista_impuestos.push({ CuentaEspecial: ctrl.Impuesto[i] });
                }
            }
            ctrl.LegalizacionCompras.TipoAvanceLegalizacion = { Id: 2 };
            ctrl.LegalizacionCompras.Avance = { Id: $scope.solicitud.Id };
            ctrl.LegalizacionCompras.Valor = parseFloat(ctrl.LegalizacionCompras.Valor);
            if (!angular.isUndefined(ctrl.LegalizacionCompras.TrmFechaCompra)) {
                ctrl.LegalizacionCompras.TrmFechaCompra = parseFloat(ctrl.LegalizacionCompras.TrmFechaCompra);
            }
            ctrl.LegalizacionCompras.AvanceLegalizacionCuentaEspecial = lista_impuestos;
            switch (ctrl.operacion) {
                case 'edit':
                    //$('#modal_legalizacion_compras').modal('hide');
                    break;
                case 'add':
                    console.log(ctrl.LegalizacionCompras);
                    financieraRequest.post("avance_legalizacion/AddAvanceLegalizacionCompra", ctrl.LegalizacionCompras)
                        .then(function(info) {
                            console.log(info);
                            ctrl.get_all_avance_legalizacion_compra();
                        });
                    //$('#modal_legalizacion_compras').modal('hide');
                    break;
                default:
            }
            ctrl.row_entity = {};
            $("#myModal").modal('hide');
        };


        ctrl.add_edit_practicas = function() {
            ctrl.LegalizacionPracticaAcademica.TipoAvanceLegalizacion = { Id: 1 };
            ctrl.LegalizacionPracticaAcademica.Avance = { Id: $scope.solicitud.Id };
            ctrl.LegalizacionPracticaAcademica.Valor = parseFloat(ctrl.LegalizacionPracticaAcademica.Valor);
            ctrl.LegalizacionPracticaAcademica.Dias = parseInt(ctrl.LegalizacionPracticaAcademica.Dias);
            switch (ctrl.operacion) {
                case 'edit':
                    financieraRequest.put("avance_legalizacion", ctrl.LegalizacionPracticaAcademica.Id, ctrl.LegalizacionPracticaAcademica)
                        .then(function(info) {
                            ctrl.get_all_avance_legalizacion_practica();
                        });
                    $('#modal_practicas_academicas').modal('hide');
                    break;
                case 'add':
                    financieraRequest.post("avance_legalizacion", ctrl.LegalizacionPracticaAcademica)
                        .then(function(info) {
                            ctrl.get_all_avance_legalizacion_practica();
                        });
                    $('#modal_practicas_academicas').modal('hide');
                    break;
                default:
            }
            ctrl.row_entity = {};
        };

    });