(function (angular) {
    var app = angular.module('calculator', []);

    app.service('CalculatorService', function () {
        this.user = {};
        this.update = function (user) {
            this.user = angular.copy(user);
        };
        this.newUser = function () {
        return user;
    }
       
       
       
        var age = this.user.age;
        if (age != null && age != undefined) {

            console.log("Age is" + age);
            this.checkingAge = function (age) {
                if (age <= 20) {
                    console.log("Age equal or under 20")
                }
            }
        }

    });

    app.controller('CalculatorController', function ($scope, CalculatorService) {
        $scope.user = CalculatorService.newUser();

        $scope.checkAge = function () {
            $scope.answer = CalculatorService.checkingAge($scope.user.age);
        };


    });

})(angular);

