(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('registration', registration)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('registration', {
                url: '/registration',
                template: '<registration name="\'registration\'"></registration>',
                params: {site: ''}
            });
    }

    function registration() {
        var directive = {
            templateUrl: './states/registration/registration.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }


//injecting registration service in the scope
    controller.$inject = ['$scope', 'conf', 'notify', '$http'];
    function controller($scope, conf, notify, $http) {
        $scope.conf = conf;
        $scope.register = register;
        $scope.notify = notify;

   
        //register function : 
        //parameters: username,password
        function register(username, password) {
            $http({
                method: 'POST',
                url: 'http://localhost:3001/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {username: $scope.username, password: $scope.password}
            }).then(function success() {
                    notify.info('Registered Successfully!');               
             }, function errorCallback() {
                notify.error('Server Error! Sorry!');   
            })
        }
    
    }



}(angular));


//need bower install angular-ui-validate and ui.validate in app.js