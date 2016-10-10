(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('login', service);

    service.$inject = ['$timeout', '$http', 'notify', 'conf'];

    function service($timeout, $http, notify, conf) {

        //data array containing all the data used in the service
        var data = [
            'login(username,password)',
            'showWrong',
            'showSuccess',
            'redirectHome',
            'hideWrong'
        ]

        

        //return functions in the service
        return {
          login: login,
          showWrong: showWrong,
          showSuccess: showSuccess,
          redirectHome: redirectHome,
          hideWrong: hideWrong
        };


        //login function : 
        //parameters: username,password
        function login(username, password) {
            $http({
                method: 'GET',
                url: 'http://localhost:3001/users?username='+username+'&password='+password,
            }).then(function successCallback(res) {
                if (_.isEmpty(res.data)) {
                    notify.error('Not Found');
                } else {
                    notify.info('Found');
                    conf.user = res.data[0];
                    //$timeout(redirectHome(),500);
                }
                
            }, function errorCallback(res) {
                notify.error('noooo!');   
            })
        }



        //shows a div that tells the user username/pass is wrong
        function showWrong() {
            document.getElementById('wrong').style.display = 'block';
        }

        //shows a div that tells the user username/pass is correct
        function showSuccess() {
            document.getElementById('success').style.display = 'block';
        }

        //function that redirects to the home page
        function redirectHome() {
            window.location.hash = '#/home';
        }

        //function that hides the div that tells username/pass is wrong and shows the correct one
        function hideWrong() {
            document.getElementById('wrong').style.display = 'none';
        }


    };
}(angular));