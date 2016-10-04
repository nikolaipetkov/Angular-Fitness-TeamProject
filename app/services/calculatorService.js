(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('calculatorService', service);

    service.$inject = [];
    function service() {
        var lightTraining = ['15 push-ups', '15 crunches', '5km run'];
        var middleTraining = ['25 push-ups', '25 crunches', '10km run'];
        var hardTraining = ['35 push-ups', '35 crunches', '15km run'];

        return {
            //array with soft training
            lightTraining: lightTraining,
            //array with middle training
            middleTraining: middleTraining,
            //array with hard training
            hardTraining: hardTraining,
            //function for checking training
            checkTraining: checkTraining
        };

        function checkTraining(user) {
            var result  = [];
            if (user.age != null && user.age != undefined) {
                result = checkAge(user.age);
            };

            return result;
        };

        function checkAge(age) {
            var result = hardTraining;
            if (age >= 40) {
                result = lightTraining;
            } else if (age >= 30) {
                result = middleTraining;
            }

            return result;

        }
    };
})(angular);