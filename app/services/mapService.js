(function (angular) {
    'use strict';

    var id = 'b';

    angular
        .module('app')
        .factory('mapService', service);

    service.$inject = ['$http'];

    function service($http) {

        return {
            data: data,
            getMapData: getMapData,
            addNewLocation: addNewLocation,
            deleteLocations: deleteLocations,
            deleteCertainLocation: deleteCertainLocation,
            listMapOperations: listMapOperations
        };

        function getMapData() {
            $http.get('data/db.json')
                .then(function success(response) {
                        // console.log(response.data)
                        response.data.mapsData.forEach(function (addressObject) {
                            console.log(addressObject);
                            data.push(addressObject);
                        })
                    },
                    function error(response) {
                        console.log(response.statusText)
                    })
        }
    }

    var data = [];


    function addNewLocation(lastAddressPicked, lastNameGiven, lastDescriptionGiven) {

        data.push({
            id: id + '1',
            name: lastNameGiven,
            address: lastAddressPicked,
            description: lastDescriptionGiven
        });

        id = id + '1';
    }

    function deleteLocations() {

        data = [];

        return data;
    }

    function deleteCertainLocation(nameToDelete) {

        data.forEach(function (iteratedAddress) {
            if (nameToDelete.toLowerCase() === iteratedAddress.name.toLowerCase()) {

                var index = data.indexOf(iteratedAddress);
                if (index > -1) {
                    data.splice(index, 1);
                } else {
                    console.log('No such address');
                }
            }
        })

    }

    // Function created for Niki to use
    function listMapOperations() {
        return ['Add Gym Location', 'Remove Certain Gym Location', 'Remove All Gym Locations', 'Hide All Gym Locations', 'Show All Gym Locations'];
    }

}(angular));
