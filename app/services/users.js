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

        function add(username, id) {
            data.push({username: username, id: id});

        }

        function edit(x) {
            current = angular.copy(x);
            x.editMode = true;
        };

         function save(x) {
                x.editMode = false;
            };

         function remove(index) {
            data.splice(index, 1);
        };

         function cancel(x) {
            x.editMode = false;
            x.username = current.username;
            x.id = current.id;
        }


    


    };
}(angular));