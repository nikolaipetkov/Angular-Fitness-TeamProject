(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('dictionary', dictionary)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('dictionary', {
                url: '/dictionary',
                template: '<dictionary ></dictionary>',
                params: {site: ''}
            });
    }

    function dictionary() {
        var directive = {
            templateUrl: './states/dictionary/dictionary.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope'];
    function controller($scope) {
        $scope.table =[
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
        ]; 

        $scope.addRow = function() {
            $scope.table.push({'name':$scope.name, 'description' : $scope.description});
            $scope.name = '';
            $scope.description = '';
        }

        $scope.editExercises = function(x) {
            $scope.current = angular.copy(x);
            x.editMode = true;
        };

         $scope.saveChanges = function(x) {
                x.editMode = false;
            };

        $scope.removeExercise = function(index) {
            $scope.table.splice(index, 1);
        };

        $scope.cancel = function(x) {
            x.editMode = false;
            x.name = $scope.current.name;
            x.description = $scope.current.name;
        }
    }

}(angular));