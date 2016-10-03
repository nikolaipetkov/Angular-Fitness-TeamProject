(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('dictionary', service);

    service.$inject = ['$http'];

    function service($http) {
    var data = [];
        return {
            // example user data
             data: [
                   "Training Info",
                   "Add Form",
                   "add",
                   "edit",
                   "delete"
                  ]
            };
    }
}(angular));