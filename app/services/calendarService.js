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
        var eventsId = 0;
        getAllEventsForCurrentUser();

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

        //Function for adding training in calendar.
        function addWorkoutInCalendar(inputs) {
            var selectedDayFromUser = inputs.Day;
            var selectedDisciplineFromUser = inputs.Training;
            getLastEventsId(selectedDayFromUser, selectedDisciplineFromUser);
        }

        //Function which get last id for events and call function addDiscipline.
        function getLastEventsId(selectedDayFromUser, selectedDisciplineFromUser) {
            var currentEventId = {};
            $http({
                method: 'GET',
                url: 'http://localhost:3001/eventsId'
            }).then(function successCallback(response) {
                _.assign(currentEventId, response.data);
                //Update event ID with one.
                eventsId = (currentEventId.id) + 1;
                //Events object for add in db file.
                var obj = {"id": eventsId, "dayId": +selectedDayFromUser, "name": selectedDisciplineFromUser, "userId": currentUserId}
                
                //Call this function to check user input is valid and add discipline.
                validateDataFromUser(obj);
              }, function errorCallback(response) {
                alert(response)
              });
        }

        //This function update userId property in db.json file(Save last user ID). 
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

        //Check user input and if data is valid call function to add discipline.
        function validateDataFromUser(obj) {
            //For request link.
            var selectedDayOfWeek = obj.dayId;
            var selectedDisciplineFromUser = obj.name;
            //Get all events for choosen day of current user.
            $http({
                method: 'GET',
                url: 'http://localhost:3001/events?userId=' + currentUserId + '&dayId='+ selectedDayOfWeek
            }).then(function successCallback(response) {
                var isAdded = false;
                _.each(response.data, function(val, key) {
                            var checkCurrentDay = val.name;
                            //Check whether selected discipline is already added.
                            if (selectedDisciplineFromUser === checkCurrentDay) {
                                isAdded = true;
                            }
                        });
                if (isAdded) {
                    alert('This discipline has already added');
                } else {
                    //Call this function to add discipline.
                    addDiscipline(obj);
                    //Update events id.
                    updateEventsId(eventsId);
                }
              }, function errorCallback(response) {
                alert(response)
              });
        }

        //With this function save selected discipline in json file(mock data).
        function addDiscipline(obj) {
            //Add new discipline in local variable.
            var day = changeValue(obj.dayId);
            informationForCurrentUser[day].push(obj.name);
            //Add discipline in db file with GET request.
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

        //Get all days from db file and call function to get and print on the table all events.
        function getAllEventsForCurrentUser() {
            //Get with request all days.
            return $http({
                        method: 'GET',
                        url: 'http://localhost:3001/days'
                    }).then(function successCallback(response) {
                        _.each(response.data, function(val, key) {
                            allDays.push(val);
                        });
                        printAllDisciplinesForCurrentUser();
                      }, function errorCallback(response) {
                        alert(response)
                      });
        }
        //Print user disciplines on table.
        function printAllDisciplinesForCurrentUser() {
            _.each(allDays, function(val, key) {
                            //For request link.
                            var currentDayOfWeek = val.id;
                            var nameOfCurrentDay = val.name;

                            setTimeout(function(){
                                $http({
                                method: 'GET',
                                url: 'http://localhost:3001/events?userId=' + currentUserId + '&dayId='+ currentDayOfWeek
                            }).then(function successCallback(response) {
                                //With this loop fill properties of 'informationForCurrentUser' object.
                                _.each(response.data, function(val, key) {
                                    informationForCurrentUser[nameOfCurrentDay].push(val.name);
                                });
                              }, function errorCallback(response) {
                                alert(response)
                              });
                            }, 200);
                        });
        }

        
// =========================================================================================================
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
        //
        function del() {
            
        }



        



        


// =========================================================================================================
        //Change value of variable from number to string(name of day).
        function changeValue(dayId) {
            switch (dayId) {
                case 1: return 'Monday'; break;
                case 2: return 'Tuesday'; break;
                case 3: return 'Wednesday'; break;
                case 4: return 'Thursday'; break;
                case 5: return 'Friday'; break;
                case 6: return 'Saturday'; break;
                case 7: return 'Sunday'; break;
            }
        }
        //Return total count of disciplines in table for current user.
        function currentDisciplines() {
            var disciplinesCount = 0;
            _.each(informationForCurrentUser, function(val, key) {
                _.each(val, function(v) {
                    disciplinesCount += 1;
                })
            });

            return disciplinesCount;
        }
        //Return all functionalities of calendar page
        function returnOperations() {
            return ['Add Discipline', 'Remove Discipline']
        }
    }
    
}(angular));