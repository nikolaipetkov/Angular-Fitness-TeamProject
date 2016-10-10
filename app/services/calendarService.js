(function (angular) {
    'use strict';
    //Get 'app' mpdule and create directive with name 'calendar'.
    angular
        .module('app')
        .factory('calendarService', service);

    service.$inject = ['$http'];
    //Service 'factory'function
    function service($http) {
        //Object with all days of week.
        var data = {};
        get();

        //Return from all factory with name 'calendarData' one object with days and two function.
        return {
            //Return data object with disciplines of each day.
            days: data,
            //Function for get currentData.
            calendarDisciplines: currentDisciplines,
            //Function for get operations.
            calendarOperations: returnOperations,
            //Function for add disciplines
            addWorkoutInCalendar: addWorkoutInCalendar,
            //Function for remove disciplines from one day of week.
            deleteWorkout: deleteWorkout
        };

        function get() {
            return $http({
                        method: 'GET',
                        url: 'http://localhost:3001/calendar'
                    }).then(function successCallback(response) {
                        _.assign(data, response.data);
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }

        function addDisciplines() {
            return $http({
                        method: 'POST',
                        url: 'http://localhost:3001/calendar',
                        data: {}
                    }).then(function successCallback(response) {
                        data = response.calendar;
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }

        function put() {
            
        }


        function del() {
            
        }

        //Function for adding training in calendar.
        function addWorkoutInCalendar(inputs) {
            //Variable with name 'dayOfWeek' contains arrey of all disciplines for this day.
            var dayOfWeek = data[inputs.Day];
            //If current discipline is not in the table added him.
            if (dayOfWeek.indexOf(inputs.Training) === -1) {
                dayOfWeek.push(inputs.Training);
            } else {
                //Check if current discipline it is on the calendar. Show mesagge. 
                 alert('This discipline has been added!')
            }
        }
        //Function for deleting all disciplines from calendar.
        function deleteWorkout(inputsDel) {
            //Check if arrey for this day is empty(which means that there is no discipline in this day).
            if (data[inputsDel].length === 0) {
                alert('No disciplinies in this day!');
                //If length is greater than zero delete disciplines.
            } else {
                //Delete all discipline from current day.
                data[inputsDel] = [];
            }
        }

        function currentDisciplines() {
            var disciplinesCount = 0;
            _.each(data, function(val, key) {
                _.each(val, function(v) {
                    disciplinesCount += 1;
                })
            });

            return disciplinesCount;
        }

        function returnOperations() {
            return ['Add Discipline', 'Remove Discipline']
        }
    }
    

}(angular));