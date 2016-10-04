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

//Using all the services in the project
    controller.$inject = ['$scope', 'music', 'calculator', 'calendarService', 'dictionary', 'map'];
    function controller($scope, music, calculator, calendarService, dictionary, map) {
        $scope.music = music;
        $scope.calculator = calculator;
        $scope.calendarService = calendarService;
        $scope.dictionary = dictionary;
        $scope.map = map;

        $scope.showTitle = showTitle;
        $scope.showSubTitle = showSubTitle;

//Function that shows the Title in the page
        function showTitle() {
            return 'Angular Demo Home Page';
        }

//Function that shows the SubTitle in the page
        function showSubTitle() {
            return 'Functionalities Map';
        }


    }

}(angular));