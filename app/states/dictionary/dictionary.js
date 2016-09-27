(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('dictionary', dictionary)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('dictionary', {
                url: '/dictionary',
                template: '<dictionary ></dictionary>',
                params: {site: ''}
            });
    }

    function dictionary() {
        var directive = {
            templateUrl: './states/dictionary/dictionary.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey', '$timeout'];
    function controller($scope, survey, $timeout) {
        $scope.survey = survey;

        $scope.sayHi = sayHi;
        $scope.sayHi1 = sayHi1;
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        function sayHi() {
            alert('Hi to you ' + $scope.name + '! Give me ' + survey.getTotalNumber() + '!');
        }

        function sayHi1() {
            return 'Hi Tsvetelina!';
        }

        var map;
          function initMap() {
            console.log('qqq!');
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
            });
          }

        $timeout(initMap, 2000);

    }

}(angular));