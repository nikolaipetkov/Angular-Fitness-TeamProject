(function (angular) {
    'use strict';

    var id = 'b';


    angular
        .module('app')
        .factory('mapService', service);

    service.$inject = [];

    function service() {
        var id = 'b';              
        
        return {
            locations: locations,
            addNewLocation: addNewLocation,
            deleteMarkers: deleteMarkers

        };
    }   
   
        var locations= [
            {
                id: id,
                name: 'Gym1',
                address: 'Bulgaria Blvd Sofia Bulgaria',
                description: 'Number 1 Gym in Sofia..'
            }];
    

     function addNewLocation(lastAddressPicked,lastNameGiven,lastDescriptionGiven) {           

            locations.push({
                id: id + '1',
                name: lastNameGiven,
                address: lastAddressPicked,
                description: lastDescriptionGiven
            });

            id = id + '1';
        };

        function deleteMarkers(){
            locations=[];

            return locations;
        };      

} (angular));
