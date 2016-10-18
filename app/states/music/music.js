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

    controller.$inject = ['$scope', 'survey', 'music'];
        function controller($scope, survey, music) {

            //Text on the large button
            $scope.text = 'Add new song';
            $scope.music = music;
            $scope.songs = music.data;
        //CRUD Model
        $scope.delete = function(item) {
            music.removeSong(item);
        };
        $scope.add = function(item) {
            music.addSong(item);
        }

        $scope.edit = function (item) {
            $scope.clicked = true;
            music.editSong(item);
            var doc = document.getElementById('name').focus();
            $scope.text = 'Submit';
        }

        $scope.submit = function (item) {
            music.submitChange(item);
            $scope.clicked = false;
            $scope.text = 'Add new song';
        }

        //Volume slider with jqueryUI
        $("#volume").slider({
        min: 0,
        max: 100,
        value: 0,
            range: "min",
            animate: true,
        slide: function(event, ui) {
          setVolume((ui.value) / 100);
        }});

        //Filling the new color when sliding
        var myMedia = document.createElement('audio');
        $('#player').append(myMedia);
        myMedia.id = "myMedia"
        function setVolume(myVolume) {
        var myMedia = document.getElementById('myMedia');
        myMedia.volume = myVolume;
        };

        //Total amount of songs in the songs array
        function getTotalSongs(songs) {
            return songs.length;
        }
        //Total operations
        function returnOperations(){
            return ['addSong', 'removeSong', 'editSong', 'submitChange','setVolume'];
        }

    }
}
(angular));