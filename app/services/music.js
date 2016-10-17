(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('music', service);

    service.$inject = ['$http'];

    function service($http) {

    var id = 0;
    var data = [];
       $http.get("http://localhost:3001/music")
            .then(function success(response) {
                     console.log(response.data);
                        response.data.forEach(function (music) {
                            data.push(music);
                        })
                    },
                    function error(response) {
                        console.log(response.statusText);
                    });


        return {
            data:data,
            addSong:addSong,
            //editSong: editSong,
            removeSong:removeSong,
            getTotalSongs:getTotalSongs,
            returnOperations:returnOperations
            };

        var config = {
        headers: {
            'Content-Type': 'application/json'
        }
        };
        //Add new song
        function addSong(item) {
        if(item.name !== undefined && item.author !== undefined){
          id++;
        //song to be added
            var newSong = {
            id: id,
            name:item.name,
            author:item.author,
            duration:item.duration,
            date:item.date
         };
        //add to UI
            data.push(newSong);
        //add to DB
            $http.post('http://localhost:3001/music', JSON.stringify(newSong), config)
                .then(function success(response) {
                        // console.log(response.data)
                        console.log('Added successfuly!')
                    },
                    function error(response) {
                        console.log('Adding failed!')
                    });
            }else{
                alert('Please fill in name and author');
            }
        }


        //Remove existing song
        function removeSong(item) {
            //remove from UI
        var index = data.indexOf(item);
        data.splice(index,1);
            //remove from DB
        $http.delete('http://localhost:3001/music/' + item.id)
            .then(function success(response) {
                    console.log('Delete successful!')
                },
                function error(response) {
                    console.log('Deleting failed!')

                });
        };

        //Total amount of songs in the songs array
        function getTotalSongs(songs) {
            return data.length;
        }

        //Total operations
        function returnOperations(){
            return ['addSong', 'removeSong', 'editSong', 'submitChange'];
        }


    }
}(angular));