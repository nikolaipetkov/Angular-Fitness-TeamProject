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
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'calendarData', '$timeout'];
    function controller($scope, calendarData, $timeout) {
    
        //var id = 1;
        $scope.days = calendarData.days;
        $scope.addDisciplineInProgram = addDisciplineInProgram;
        $scope.checkInputIsValid = checkInputIsValid;
        $scope.addWorkoutInCalendar = addWorkoutInCalendar;
        //console.log($scope.days);
        
        function addDisciplineInProgram(inputs) {
            var selectedDay = inputs.selectedDay;
            var selectedTraining = inputs.selectedTrainig;
            console.log(selectedDay);
            console.log(selectedTraining);
            checkInputIsValid(selectedDay, selectedTraining);
        }

        function checkInputIsValid(selectedDay, selectedTraining) {
            //console.log(selectedDay);
            //console.log(selectedTraining);
            if (selectedDay == undefined) {
                $scope.isValidDay = true;
            } else if(selectedTraining == undefined) {
                $scope.isValidDisc = true;
            } else {
                addWorkoutInCalendar(selectedDay, selectedTraining);
            }
        }

        function addWorkoutInCalendar(selectedDay, selectedTraining) {
            $scope.isValidDay = false;
            $scope.isValidDisc = false;
            var isAdded = false;
            for (var i = 0, j = $scope.days[selectedDay].length - 1; i <= j; i += 1) {
                var cutrrentdiscipline =  $scope.days[selectedDay];
                if (cutrrentdiscipline[i] == selectedTraining) {
                    isAdded = true;
                }
            }
            if (isAdded) {
                alert('This discipline has been added!')
            } else {
                $scope.days[selectedDay].push(selectedTraining);
            }
        }




    }

}(angular));