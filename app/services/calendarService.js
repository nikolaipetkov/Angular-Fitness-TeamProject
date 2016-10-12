(function (angular) {
    'use strict';
    //Get 'app' mpdule and create directive with name 'calendar'.
    angular
        .module('app')
        .factory('calendarService', service);

    service.$inject = ['$http', 'conf'];
    //Service 'factory'function
    function service($http, conf) {
        //Object with all days of week.
        var currentUserId = conf.user.id;
        var allDays = [];
        var informationForCurrentUser = {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: []
        }

        var dataFromDb = [];

        getAllEventsForCurrentUser();
        //getAllDaysFromDb();
        //getAllEvents();

        //Return from all factory with name 'calendarData' one object with days and two function.
        return {
            //Return data object with disciplines of each day.
            days: informationForCurrentUser,
            //Function for get currentData.
            calendarDisciplines: currentDisciplines,
            //Function for get operations.
            calendarOperations: returnOperations,
            //Function for add disciplines
            addWorkoutInCalendar: addWorkoutInCalendar,
            //Function for remove disciplines from one day of week.
            deleteWorkout: deleteWorkout
        };

        //Function which generate id for each events and call function addDiscipline.
        function getLastEventsId(selectedDayFromUser, selectedDisciplineFromUser, userId) {
            var currentEventId = {};

            $http({
                method: 'GET',
                url: 'http://localhost:3001/eventsId'
            }).then(function successCallback(response) {
                _.assign(currentEventId, response.data);
                var eventsId = (currentEventId.id) + 1;
                // console.log(currentEventId);
                // debugger;
                // console.log(eventsId);
                // debugger;
                var obj = {"id": eventsId, "dayId": selectedDayFromUser, "name": selectedDisciplineFromUser, "userId": userId}
                debugger;
                //Update events id.
                updateEventsId(eventsId);
                debugger;
                addDiscipline(obj);
                
              }, function errorCallback(response) {
                alert(response)
              });
        }

        

        // function getAllEvents() {
        //     return $http({
        //                 method: 'GET',
        //                 url: 'http://localhost:3001/events'
        //             }).then(function successCallback(response) {
        //                 console.log(response.data);
        //                 _.each(response.data, function(val, key) {
        //                     dataFromDb.push(val);
        //                 });
        //                 console.log(dataFromDb);
        //               }, function errorCallback(response) {
        //                 alert(response)
        //               });
        // }

        function addDiscipline(obj) {
            //add
            console.log(dataFromDb);
            //debugger;
            dataFromDb.push(obj);
            console.log(dataFromDb);
            //debugger;
            return $http({
                        method: 'POST',
                        url: 'http://localhost:3001/events',
                        data: JSON.stringify(obj),
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(response) {
                        console.log("Discipline has been saved!");
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }

        function updateEventsId(newEventsId) {
            var newId = {"id": newEventsId}
            return $http({
                        method: 'PUT',
                        url: 'http://localhost:3001/eventsId',
                        data: JSON.stringify(newId),
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(response) {
                        console.log("New ID has been saved!");
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }


        function del() {
            
        }

        //Function for adding training in calendar.
        function addWorkoutInCalendar(inputs) {
            var selectedDayFromUser = inputs.Day;
            var selectedDisciplineFromUser = inputs.Training;

            getLastEventsId(selectedDayFromUser, selectedDisciplineFromUser, 8);


        }
        //Function for deleting all disciplines from calendar.
        function deleteWorkout(inputsDel) {
            //Check if arrey for this day is empty(which means that there is no discipline in this day).
            if (dataFromDb[inputsDel].length === 0) {
                alert('No disciplinies in this day!');
                //If length is greater than zero delete disciplines.
            } else {
                //Delete all discipline from current day.
                dataFromDb[inputsDel] = [];
            }
        }

// =========================================================================================================


        function getAllEventsForCurrentUser() {
            return $http({
                        method: 'GET',
                        url: 'http://localhost:3001/days'
                    }).then(function successCallback(response) {
                        //console.log(response.data);
                        _.each(response.data, function(val, key) {
                            allDays.push(val);
                        });
                        console.log(allDays);
                        printAllDisciplinesForCurrentUser();
                        //console.log(allDays);
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }



        function printAllDisciplinesForCurrentUser() {
            _.each(allDays, function(val, key) {
                            var currentDayOfWeek = val.id;
                            var nameOfCurrentDay = val.name;


                            setTimeout(function(){
                                $http({
                                method: 'GET',
                                url: 'http://localhost:3001/events?userId=' + currentUserId + '&dayId='+ currentDayOfWeek
                            }).then(function successCallback(response) {
                                console.log(response.data);
                                debugger;
                                _.each(response.data, function(val, key) {
                                    informationForCurrentUser[nameOfCurrentDay].push(val.name);
                                });
                                console.log(informationForCurrentUser[nameOfCurrentDay]);
                                debugger;
                              }, function errorCallback(response) {
                                alert(response)
                              });
                            }, 1000);
                        });
            console.log(informationForCurrentUser);
        }


// =========================================================================================================


        function currentDisciplines() {
            var disciplinesCount = 0;
            _.each(dataFromDb, function(val, key) {
                _.each(val, function(v) {
                    disciplinesCount += 1;
                })
            });

            return disciplinesCount;
        }

        function returnOperations() {
            return ['Add Discipline', 'Remove Discipline']
        }
    }
    

}(angular));