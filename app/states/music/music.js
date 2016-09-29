(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('music', music)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('music', {
                url: '/music',
                template: '<music name="\'LoL\'"></music>',
                params: {site: ''}
            });
    }

    function music() {
        var directive = {
            templateUrl: './states/music/music.html',
            restrict: 'E',
            controller: controller,
            scope: {
                name: '='
            }
        };

        return directive;
    }

    controller.$inject = ['$scope', 'survey', '$timeout'];
        function controller($scope, survey, $timeout) {
            $scope.text = 'Add new song';
            var id = 1;
            $scope.songs = [
            {
                id: 0,
                name: 'nameofsong1',
                author: 'some author1',
                duration: '3:20',
                date: '01-02-2016',
                url: 'some/url/with/songs'
            },{
                id: 1,
                name: 'nameofsong1',
                author: 'some author1',
                duration: '3:20',
                date: '01-02-2016',
                url: 'some/url/with/songs'
            }];
            $scope.markAll = false;


        $scope.addSong = function () {
        id++;
        $scope.songs.push(
            {
                id: id,
                name:$scope.item.name,
                author:$scope.item.author,
                duration:$scope.songDuration,
                date:$scope.songDate,
                done:false
            });


        $scope.songName = '';
        $scope.songAuthor = '';
        $scope.songDate = '';
        $scope.songDuration = '';

        };
        
        $scope.removeSong = function(item) {
        var index = $scope.songs.indexOf(item);
        $scope.songs.splice(index,1);
        };    


        $scope.clicked = false;
        $scope.editSong = function(item) {
            
            $scope.clicked = true;
           var doc = document.getElementById('name').focus();
            $scope.itemRef = item;
            $scope.item = angular.copy(item);
            $scope.text = 'Submit';

            

        };

        $scope.submitChange = function(item) {

                $scope.itemRef.name = $scope.item.name;
                $scope.itemRef.author = $scope.item.author;


                $scope.clicked = false;
                $scope.item.name = '';
                $scope.item.author = '';
                
                $scope.text = 'Add new song';
        }

    }
}
(angular));