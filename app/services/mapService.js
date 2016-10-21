(function (angular) {
    'use strict';

    var data = [],
        urlLink = 'http://localhost:4816/api/maps';
        
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
            $http.get(urlLink, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(function success(response) {
                    response.data.forEach(function (addressObject) {
                        data.push(addressObject);
                    });

                    console.log(data);
                },
                function error(response) {
                    console.log(response.statusText);
                });
        }


        function addNewLocation(lastAddressPicked, lastNameGiven, lastDescriptionGiven) {

            var newAddressAddedData = {
                id: lastNameGiven.toLowerCase(),
                name: lastNameGiven,
                address: lastAddressPicked,
                description: lastDescriptionGiven
            };

            var config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // Update UI.
            data.push(newAddressAddedData);

            // Update DB.
            $http.post(urlLink, JSON.stringify(newAddressAddedData), config)
                .then(function success(response) {
                    // console.log(response.data)
                    console.log('Adding new address in DB succeeded!')
                },
                function error(response) {
                    console.log('Adding new address in DB failed!')

                });
        }

        function deleteLocations() {

            //Update UI.
            data = [];

            //Update DB.

            $http.delete(urlLink)
                .then(function success(response) {
                    // console.log(response.data)
                    console.log('All addresses deletion in DB succeeded!')
                },
                function error(response) {
                    console.log('All addresses deletion in DB failed!')
                });

            return data;
        }

        function deleteCertainLocation(nameToDelete) {

            // Update UI.
            data.forEach(function (iteratedAddress) {
                if (nameToDelete.toLowerCase() === iteratedAddress.name.toLowerCase()) {
                    var index = data.indexOf(iteratedAddress);
                    if (index > -1) {
                        data.splice(index, 1);
                    } else {
                        console.log('No such address');
                    }
                }
            });

            // Update database.
            $http.delete(urlLink + '/' + nameToDelete.toLowerCase())
                .then(function success(response) {
                    // console.log(response.data)
                    console.log('Deleting a certain address in DB succeeded!')
                },
                function error(response) {
                    // console.log(response.statusText);
                    console.log('Deleting a certain address in DB failed!')
                });
        }

        // Function created for Niki to use
        function listMapOperations() {
            return ['Add Gym Location', 'Remove Certain Gym Location', 'Remove All Gym Locations', 'Hide All Gym Locations', 'Show All Gym Locations'];
        }
    }
} (angular));
