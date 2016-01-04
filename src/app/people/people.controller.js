// PEOPLE CONTROLLER
// =============================================================================

/*global require*/

angular
  .module('app')
  .controller('PeopleController', PeopleController);

PeopleController.$inject = ['$http', '$q', 'dataservice'];

function PeopleController($http, $q, dataservice) {
  var vm    = this;
  vm.people = [];

  vm.heartbeat = function(value) {
    return value + ' pong';
  };

  vm.getPeople = function(){
    return 'success';
  };

  function getPeople() {
    dataservice.getPeople()
      .then(function (people) {
        vm.people = people;
        console.log('get some people');
        console.log(vm.poeple);
      });
  }
}
