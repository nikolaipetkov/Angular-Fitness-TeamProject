(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('home', home)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home name="\'home\'"></home>',
                params: {site: ''}
            });
    }

    function home() {
        var directive = {
            templateUrl: './states/home/home.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey', 'music', 'calculator', 'calendar', 'dictionary', 'map'];
    function controller($scope, survey, music, calculator, calendar, dictionary, map) {
        $scope.survey = survey;
        $scope.music = music;
        $scope.calculator = calculator;
        $scope.calendar = calendar;
        $scope.dictionary = dictionary;
        $scope.map = map;

        $scope.showTitle = showTitle;
        $scope.showSubTitle = showSubTitle;


        function showTitle() {
            return 'Angular Demo Home Page';
        }

        function showSubTitle() {
            return 'Functionalities Map';
        }


    }

}(angular));