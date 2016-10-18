(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('usersState', directive)
        .config(config);


    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                title: 'Users',
                template: '<users-state></users-state>'
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/users/users.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf', '$compile', 'api', '$state', '$http', 'notify', 'users'];
    function controller($scope, conf, $compile, api, $state, $http, notify, users) {
        $scope.vm = {

            dtInstance: {},
        };




    //var users = null;


      

        /*$scope.vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
            return api.get('users');
        }).withPaginationType('full_numbers');*/

    
    $scope.allUsers = users.getAllUsers();

    var sortOrder = $scope.sortOrder; 
    $scope.users = $scope.allUsers;
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.numberOfPages=function(){
    return Math.ceil($scope.users.length/$scope.pageSize);                
    }


       
 


      $scope.vm.dtColumns = [
          {data: 'username', title: 'Username'},
          {data: 'id', title: 'id'},
      ];

        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }


    }

}(angular));


/*         .filter('startFrom', function() {
          return function (input,start) {
              start = +start; //parse to int
              return input.slice(start);
          }
        });
*/


/* AngularJS
- What is MVC?
- explain: ng-app, ng-model, ng-bind, ng-controller, ng-repeat, ng-class, ng-change, filters
- what are angular expressions
- How to make an ajax call using Angular JS?
- How do you share data between controllers?
- What is the difference between ng-show/ng-hide and ng-if directives?
- What is a digest cycle in AngularJS?
- Where should we implement the DOM manipulation in AngularJS?
- If you were to migrate from Angular 1.4 to Angular 1.5, what is the main thing that would need refactoring?
- What is the difference between one-way binding and two-way binding?
- How would you specify that a scope variable should have one-time binding only?
- Explain how $scope.$apply() works
- How would you make an Angular service return a promise?
- What is the role of services in AngularJS and name any services made available by default?
- What is a singleton pattern and where we can find it in Angularjs?
- Explain what is a $scope in AngularJS
- What is $rootScope and how does it relate to $scope?
- What are Directives?
- What is DDO Directive Definition Object?
- When creating a directive, it can be used in several different ways in the view. Which ways for using a directive do you know? How do you define the way your directive will be used?
- what is transclude
- Name and describe the phases of a directive definition function execution, or describe how directives are instantiated.
- How would you programatically change or adapt the template of a directive before it is executed and transformed?
- ng-messages
- required, min-length
- How do you hide an HTML element via a button click in AngularJS?
- how to react on checkbox change
- How do you disable a button depending on a checkbox’s state?
- List a few ways to improve performance in an AngularJS app.
- How to implement internationalization in AngularJS?
- How could one create single-page application using AngularJS? Which provider is used to achieve this objective?
- what is ui-router
- what is restangular
- Explain $q service
- What setup may be needed to do unit testing with AngularJS? What features of Angular come handy for doing unit tests?*/