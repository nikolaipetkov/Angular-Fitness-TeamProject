(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('niki', niki)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('niki', {
                url: '/niki',
                template: '<niki name="\'Niki\'"></niki>',
                params: {site: ''}
            });
    }

    function niki() {
        var directive = {
            templateUrl: './states/niki/nikiTemplate.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey'];
    function controller($scope, survey) {
        $scope.survey = survey;

        $scope.setBackground = setBackground;
        $scope.test1 = test1;

//Ask Todor about this !!!
        function setBackground() {
            $scope.background = "url(/states/niki/bg1.jpg";
        }

        function test1() {
            return 'Test Success';
        }


    }

}(angular));