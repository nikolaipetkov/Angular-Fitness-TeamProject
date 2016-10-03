(function (angular) {
    'use strict';
    //Get 'app' mpdule and create directive with name 'calendar'.
    angular
        .module('app')
        .factory('calendarService', service);

    service.$inject = [];
    //Service 'factory'function
    function service() {
        //Return from all factory with name 'calendarData' one object with days and two function.
        return {
            data: data,
            days: days,
            //Function for add disciplines
            addWorkoutInCalendar: addWorkoutInCalendar,
            //Function for remove disciplines from one day of week.
            deleteWorkout: deleteWorkout
        };
    }

    var data = [
            'Calendar Table',
            'Add Sport Types',
            'Delete Sport Types'
        ];
    //Object with all days of week.
    var days = {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        seven: []
    }
    //Function for adding training in calendar.
    function addWorkoutInCalendar(inputs) {
        //Variable with name 'dayOfWeek' contains arrey of all disciplines for this day.
        var dayOfWeek = days[inputs.Day];
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
        if (days[inputsDel].length === 0) {
            alert('No disciplinies in this day!');
            //If length is greater than zero delete disciplines.
        } else {
            //Delete all discipline from current day.
            days[inputsDel] = [];
        }
    }

}(angular));