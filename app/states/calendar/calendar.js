(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('calendar', calendar)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('calendar', {
                url: '/calendar',
                template: '<calendar></calendar>'
            });
    }

    function calendar() {
        var directive = {
            templateUrl: './states/calendar/calendar.html',
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
        // Table 
        var id = 1;
        var resultOfTraining = [];
        $scope.addWorkoutInCalendar = addWorkoutInCalendar;
        $scope.showDayProgram = showDayProgram;
        $scope.allDisciplineOfDay = resultOfTraining;




        function addWorkoutInCalendar(inputs, form) {
            var selectedDay = inputs.selectedDay;
            var selectedTraining = inputs.selectedTrainig;
            console.log(selectedDay);
            console.log(selectedTraining);
            console.log(days.two);
            days[selectedDay].push(selectedTraining);
            console.log('=========');
            console.log(days[selectedDay]);
        }

        function showDayProgram(day) {
            var trainigOfDay = days[day];
            console.log(trainigOfDay);

            resultOfTraining = trainigOfDay;
            console.log('=========');
            console.log(resultOfTraining);
        }

        // =================================

        $scope.survey = survey;

        $scope.sayHi = sayHi;
        $scope.sayHi1 = sayHi1;
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

        function sayHi() {
            alert('Hi to you ' + $scope.name + '! Give me ' + survey.getTotalNumber() + '!');
        }

        function sayHi1() {
            return 'Hi Maria!';
        }

        var map;
          function initMap() {
            console.log('qqq!');
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: -34.397, lng: 150.644},
              zoom: 8
            });
          }

    }

}(angular));