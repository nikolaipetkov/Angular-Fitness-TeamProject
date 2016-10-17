(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('usersState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                title: 'Users',
                template: '<users-state></users-state>'
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/users/users.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf', '$compile', 'api', '$state', '$http', 'notify', 'users'];
    function controller($scope, conf, $compile, api, $state, $http, notify, users) {
        $scope.vm = {

            dtInstance: {},
        };


    //var users = null;


      

        /*$scope.vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
            return api.get('users');
        }).withPaginationType('full_numbers');*/

    
    $scope.allUsers = users.getAllUsers();
       
 


      $scope.vm.dtColumns = [
          {data: 'username', title: 'Username'},
          {data: 'id', title: 'id'},
      ];

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }


    }

}(angular));