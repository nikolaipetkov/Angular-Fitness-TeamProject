(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('dictionary', service);

    service.$inject = ["$http"];

    function service($http) {       

        var current = {};

        var data = [];

        return {
           data: data,
           post: post,
           edit: edit,
           save: save,
           remove: remove,
           cancel: cancel,
           current: current,
           whatIDo: whatIDo,
           get: get
        };

        function get() {
             return $http({
                method: 'GET',
                url: 'http://localhost:3001/dictionary'
             })
            .then(function (res) {
                //console.log(res.data)
                _.each(res.data, function (d) {
                    data.push(d);
                })
            })
        }

        function post (name, description) {
            var id = getNewId();
            data.push({id: id, name: name, description: description});
            return $http({
                method: 'POST',
                url: 'http://localhost:3001/dictionary',
                data: {id: id, name: name, description: description}
               
             })
        }

        function getNewId() {
            var id = 1;
            if (data.length > 0) {
                var last = _.last(data);
                id = parseInt(last.id, 10)  + 1;
            }

            return id;
        }


        function edit(x) {
            current = angular.copy(x);
            x.editMode = true;
            
        };

       
         function save(x) {
                x.editMode = false;
                $http({
                    method: 'PUT',
                    url: 'http://localhost:3001/dictionary/'+x.id,
                    data: {name: x.name, description: x.description}
                 })
            };

        function remove(id) {
            _.each(data, function (val, key) {
                if (val.id === id) {
                    data.splice(key, 1);                    
                };
            })
            return $http({
                method: 'DELETE',
                url: 'http://localhost:3001/dictionary/'+id,
            })
        };

         function cancel(x) {
            x.editMode = false;
            x.name = current.name;
            x.description = current.description;
        }

        function whatIDo() {
            return ['Add Exercise', 'Edit Exercise', 'Delete Exercise'];
        }
    }

}(angular));