(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('calculator', calculator)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('calculator', {
                url: '/calculator',
                template: '<calculator></calculator>',
            });
    }

    function calculator() {
        var directive = {
            templateUrl: './states/calculator/calculator.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };
        return directive;
    }

    controller.$inject = ['$scope', 'calculatorService', 'conf'];

    function controller($scope, calculatorService, conf) {

        $scope.user = {};
        //Function that get id from conf
        function getId() {
            return conf.user.id;
        };
        //Assign id from function getId to id property of user
        $scope.user.id = getId();
        $scope.training = [];
        $scope.checkTraining = function (user) {
            $scope.training = calculatorService.checkTraining(user);
            $scope.addNew = calculatorService.addUser(user);
        };
        calculatorService.get();
        //Post request to json server to get user data
        calculatorService.getUser().then(function (res) {
            if (res.data[0] != "undefined"){
                _.assign($scope.user, res.data[0]);
            }
        });
    };
})(angular);

