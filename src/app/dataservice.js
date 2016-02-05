

// GENERIC DATA SERVICE
// =============================================================================
/* -W003 */

/*global require*/

(function () {

  'use strict';

  angular
    .module('app')
    .service('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q'];

  function dataservice($http, $q) {

    var service = {
      getPeople:       getPeople,
      getDogs:         getDogs,
      getMessageCount: getMessageCount
    };

    return service;

    function getMessageCount() {
      return $q.when(72);
    }

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

