(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('users', service);

    service.$inject = ['$timeout', '$http', 'notify', 'conf'];

    function service($timeout, $http, notify, conf) {

        //data array containing all the data used in the service
        var data = [];

        

        //return functions in the service
        return {
          data: data,
          getAllUsers: getAllUsers
        };


     function getAllUsers() {
         $http({
         method: 'GET',
         url: 'http://localhost:3001/users'
     }).then(function successCallback(res){
            data = res.data;
            }, function errorCallback(res){
             notify.error('Server Error! Could Not Retrieve Data');
     })
        return data;
    };

//$http.get('http://localhost:3001/users').then(function  success(response) {
//    response.data.forEach(function (users) {
//        data.push(users);
//    })
//    },
//        function error (response) {
//            console.log('error');
//        }
//);
    


    };
}(angular));