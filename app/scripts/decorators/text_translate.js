"use strict";

/**
 * @ngdoc function
 * @name financieraClienteApp.decorator:TextTranslate
 * @description
 * # TextTranslate
 * Decorator of the financieraClienteApp
 */

angular.module('financieraClienteApp')
.config(function ($translateProvider) {
    $translateProvider
    .translations("es", {
      TITULO: "GENERATOR-OAS",
      MENSAJE_INICIAL: "Ahora puede comenzar con el desarrollo ...",
      //NOTIFICACIONES
      NOTIFICACION_PENDIENTE:"Notificaciones Pendientes",
      NOTIFICACION_VISTA:"Notificaciones Vistas",
      FILTRO_NOTIFICACION:"Filtrar notificación",
      //PLAN DE CUENTAS
      PLANES_CUENTAS:"Planes de Cuentas",
      NUEVO_PLAN_CUENTAS:"Crear Nuevo Plan de cuentas",
      NOMBRE:"Nombre",
      INGRESE_NOMBRE_PLAN_CUENTAS:"Ingresa el nombre del plan de cuentas",
      UNIDAD_EJECUTORA:"Unidad Ejecutora",
      SELECCION_UNIDAD_EJECUTORA: "Selecciona la Unidad Ejecutora",
      DESCRIPCION:"Descripción",
      DESCRIPCION_PLAN:" Descripción del nuevo plan...",
      CONFIRMAR: "Confirmar",
      //DIRECTIVE/CUENTAS_CONTABLES/PLANES_CUENTAS
      LISTADO_PLAN_CUENTAS: "Listado de Planes de Cuentas",
      NO_FILAS:"Número de Filas"

    })
    .translations("en", {
      TITULO: "GENERATOR-OAS",
      MENSAJE_INICIAL: "Now get to start to develop"
    });
    $translateProvider.preferredLanguage("es");
    $translateProvider.useSanitizeValueStrategy("sanitizeParameters");
});
