(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('map', service);

    service.$inject = ['$http'];

    function service($http) {
    var data = [];
        return {
            // example user data
             data: [
                   "55",
                   "110",
                   "add",
                   "edit",
                   "delete"
                  ]
            };
    }
}(angular));