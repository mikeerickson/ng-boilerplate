// GENERIC DATA SERVICE
// =============================================================================

/*global require*/

(function () {

  'use strict';

  angular
    .module('app')
    .service('peopleService', peopleService);

  peopleService.$inject = ['$http', '$q'];

  function peopleService($http, $q) {
    var service = {
      getPeople:  getPeople,
      getDogs:    getDogs
    };

    return service;

    function getPeople() {
      return $http.get('/people')
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return $q.reject(error.data);
        });
    }

    function getDogs() {
      return $http.get('/dogs')
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return $q.reject(error.data);
        });
    }

  }

})();

