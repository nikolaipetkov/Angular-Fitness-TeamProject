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
                name:$scope.songName,
                author:$scope.songAuthor,
                duration:$scope.songDuration,
                date:$scope.songDate,
                done:false
            });
        $scope.songName = '';
        $scope.songAuthor = '';
        $scope.songDate = '';
        $scope.songDuration = '';
        };
           
        $scope.removeSong = function() {
        var oldSongs = $scope.songs;
        $scope.songs = [];
        angular.forEach(oldSongs, function(song) {
            if (!song.done) {$scope.songs.push(song);}
        });
        };    

        $scope.toggleMarkAll = function() {
            var songs = $scope.songs;
            angular.forEach(songs, function (song) {
                    song.done = true;
            });
        };

        $scope.editSong = function() {
            var songs = $scope.songs;
            angular.forEach(songs, function(song){
                if(song.done == true){
                    var nameNew = prompt("Please enter new name: ");
                    song.name = nameNew;
                    var authorNew = prompt("Please enter new author: ");
                    song.author = authorNew;
                    console.log(song.name);
                    console.log(song.author);
                }
            });

        }

    }
}
(angular));