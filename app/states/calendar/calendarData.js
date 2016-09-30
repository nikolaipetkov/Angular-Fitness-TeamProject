(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calendarData', service);

    service.$inject = [];

    function service() {
        return {
            // example user data
            days: days(),
            //deleteWorkoutFromCalendar: deleteWorkoutFromCalendar()
        };
    }

    function days() {
            return {
              one: [],
              two: [],
              three: [],
              four: [],
              five: [],
              six: [],
              seven: []
            }
        }

}(angular));