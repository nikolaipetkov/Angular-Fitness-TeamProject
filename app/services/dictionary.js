(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('dictionary', service);

    service.$inject = [];

    function service() {

        var current = {};

        var table = [
            {
            'name' : 'kljenj',
            'description' : 'kvbejiobneriovbrnvbier'
             },
             {
            'name' : 'njedogjer',
            'description': 'klnbbbolmoebenrobvrnme'
            },
            {
            'name' : 'nejvne',
            'description': 'lkvnmoblerkn'
            },
        ]

        return {
           data: table,
           add: add,
           edit: edit,
           save: save,
           remove: remove,
           cancel: cancel,
           current: current
        };

        function add(name, description) {
            table.push({name: name, description: description});

        }

        function edit(x) {
            current = angular.copy(x);
            x.editMode = true;
        };

         function save(x) {
                x.editMode = false;
            };

         function remove(index) {
            table.splice(index, 1);
        };

         function cancel(x) {
            x.editMode = false;
            x.name = current.name;
            x.description = current.description;
        }
    }

}(angular));