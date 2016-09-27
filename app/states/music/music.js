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
        
        
        $scope.songs = [
        {
            id: 0,
            name: 'name',
            author: 'some author',
            duration: '3:20',
            date: '01-02-2016',
            url: 'some/url/with/songs'
        }];
        $scope.markAll = false;

        function addSong() {
            if(event.keyCode == 13 && $scope.songText){
            $scope.songs.push({text:$scope.songText, done:false});
            $scope.SongText = '';
            }
        }
        function isSong() {
                  return $scope.songs.length > 0;  
        }
        
      function clear() {
        var oldSongs = $scope.songs;
            $scope.songs = [];
            angular.forEach(oldSongs, function(song) {
          if (!todo.done) $scope.songs.push(song);
        });
      }

    

}
}(angular));