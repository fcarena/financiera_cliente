'use strict';

/**
 * @ngdoc service
 * @name financieraClienteApp.coreNewService
 * @description
 * # coreNewService
 * Service in the financieraClienteApp.
 */
angular.module('coreNewService', [])
    .service('coreNewRequest', function($http, CONF) {
        var path = CONF.GENERAL.CORE_NEW_SERVICE;
        // Public API here
        return {
            get: function(tabla, params) {
                return $http.get(path + tabla + "/?" + params);
            },
            post: function(tabla, elemento) {
                return $http.post(path + tabla, elemento);
            },
            put: function(tabla, id, elemento) {
                return $http.put(path + tabla + "/" + id, elemento);
            },
            delete: function(tabla, id) {
                return $http.delete(path + tabla + "/" + id);
            }
        };


    });