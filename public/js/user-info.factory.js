(function(){
  'use strict';

  angular
    .module('app')
    .factory('UserInfoFactory', UserInfoFactory);

  function UserInfoFactory($http) {
    return {
      getErickson: function() {
        var data = [{
          fname: 'Mike',
          lname: 'Erickson',
          role:  'Father',
          email: 'mike.erickson@mac.com'
        },{
          fname: 'Joelle',
          lname: 'Erickson',
          role:  'Daughter',
          email: 'joelle.erickson@mac.com'
        },{
          fname: 'Brady',
          lname: 'Erickson',
          role:  'Son',
          email: 'brady.erickson@mac.com'
        },{
          fname: 'Trevor',
          lname: 'Erickson',
          role:  'Son',
          email: 'trevor.erickson@mac.com'
        }];

        return data;

      },
      getBuffington: function() {
        var data = [{
          fname: 'Kira',
          lname: 'Buffington (Erickson)',
          role:  'Mother',
          email: 'kiraerickson@mac.com'
        },{
          fname: 'Bailey',
          lname: 'Buffington (Erickson)',
          role:  'Daughter',
          email: 'bailey.erickson@mac.com'
        }];

        return data;
      },
      get: function(family) {
        var url = 'data/' + family + '.json';
        return $http.get(url);
      }
    };
  }

})();
