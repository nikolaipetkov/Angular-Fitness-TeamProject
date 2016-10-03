(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('login', service);

    service.$inject = ['$timeout'];

    function service($timeout) {
        return {
          login: login,
          showWrong: showWrong,
          showSuccess: showSuccess,
          redirectHome: redirectHome,
          hideWrong: hideWrong
        };



        function login(username, password) {
           // var location = $scope.location;
            if(username == 'admin' && password == 'admin') {
                //$location.path('/home');
                hideWrong();
                showSuccess();
                $timeout(redirectHome,2000);
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


    };
}(angular));