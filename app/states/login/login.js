(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('login', login)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login name="\'login\'"></login>',
                params: {site: ''}
            });
    }

    function login() {
        var directive = {
            templateUrl: './states/login/login.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }


//location variable in scope variables?
    controller.$inject = ['$scope', 'survey', '$timeout'];
    function controller($scope, survey, $timeout) {
        $scope.survey = survey;
        //$scope.location = location;


        $scope.login = login;
        $scope.showWrong = showWrong;
        $scope.showSuccess = showSuccess;
        $scope.redirectHome = redirectHome;
        $scope.hideWrong = hideWrong;



        function login() {
            var uname = $scope.username;
            var password = $scope.password;
           // var location = $scope.location;
            if($scope.username == 'admin' && $scope.password == 'admin') {
                //$location.path('/home');
                hideWrong();
                showSuccess();
                $timeout(redirectHome, 2000);
            } else {
                showWrong();
            }
        }

        function showWrong() {
            document.getElementById('wrong').style.display = 'block';
        }

        function showSuccess() {
            document.getElementById('success').style.display = 'block';
        }

        function redirectHome() {
            window.location.hash = '#/home';
        }

        function hideWrong() {
            document.getElementById('wrong').style.display = 'none';
        }


    }

}(angular));