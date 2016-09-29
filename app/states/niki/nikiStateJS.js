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

    controller.$inject = ['$scope', 'survey', 'music'];
    function controller($scope, survey, music) {
        $scope.survey = survey;
        $scope.music = music;
        

        $scope.test1 = test1;
        $scope.imageClick = imageClick;




        function test1() {
            return 'Test Success';
        }

        function imageClick() {
        
        }

    }

}(angular));