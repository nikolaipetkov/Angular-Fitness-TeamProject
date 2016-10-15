(function (angular) {
    'use strict';


    var data = [];


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
            $http.get('http://localhost:8080/api/maps',{headers: {
                'Content-Type': 'application/json'
            }})
                .then(function success(response) {

                        response.data.forEach(function (addressObject) {
                            data.push(addressObject);
                        });

                    console.log(data);
                    },
                    function error(response) {
                        // console.log(response.statusText);
                    });
        }


        function addNewLocation(lastAddressPicked, lastNameGiven, lastDescriptionGiven) {

            var newAddressAddedData = {
                // ID needs to be a string for marker to work properly.
                // Why not use the name of the gym, nothing better than that, right??
                // TODO: When enough time, drop the name altogether and use the id only in the HTML too.
                Id: lastNameGiven.toLowerCase(),
                Name: lastNameGiven,
                Address: lastAddressPicked,
                Description: lastDescriptionGiven
            };

            var config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // Update UI.
            data.push(newAddressAddedData);

            // Update DB.
            $http.post('http://localhost:3005/mapsData', JSON.stringify(newAddressAddedData), config)
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
            $http.get('http://localhost:3005/mapsData')
                .then(function success(response) {
                        console.log(response.data);

                        response.data.forEach(function (addressObject) {
                            var currentObjectIdToDelete = addressObject.Id;

                            $http.delete('http://localhost:3005/mapsData/' + currentObjectIdToDelete)
                                .then(function success(response) {
                                        // console.log(response.data)
                                        console.log('Deleting all addresses in DB succeeded!')

                                    },
                                    function error(response) {
                                        console.log('Deleting all addresses in DB failed!')

                                    });

                        })

                    },
                    function error(response) {
                        console.log(response.statusText);
                    });

            return data;

        }

        function deleteCertainLocation(nameToDelete) {

            // Update UI.
            data.forEach(function (iteratedAddress) {
                if (nameToDelete.toLowerCase() === iteratedAddress.Name.toLowerCase()) {

                    var index = data.indexOf(iteratedAddress);
                    if (index > -1) {
                        data.splice(index, 1);
                    } else {
                        console.log('No such address');
                    }
                }
            });

            // Update database.
            $http.delete('http://localhost:3005/mapsData/' + nameToDelete.toLowerCase())
                .then(function success(response) {
                        // console.log(response.data)
                        console.log('Deleting a certain address in DB succeeded!')

                    },
                    function error(response) {
                        // console.log(response.statusText);
                        console.log('Deleting a certain address in DB succeeded!')
                    });


        }

        // Function created for Niki to use
        function listMapOperations() {
            return ['Add Gym Location', 'Remove Certain Gym Location', 'Remove All Gym Locations', 'Hide All Gym Locations', 'Show All Gym Locations'];
        }
    }

}(angular));
