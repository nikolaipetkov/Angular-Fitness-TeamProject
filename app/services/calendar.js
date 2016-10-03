(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calendar', service);

    service.$inject = ['$http'];

    function service($http) {
    var data = [];
        return {
            // example user data
             data: [
                   "Calendar Table",
                   "110",
                   "add",
                   "delete"
                  ],

            };
    }
}(angular));