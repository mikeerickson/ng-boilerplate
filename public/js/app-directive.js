console.log('*** app-directive.js ***');

angular.module('app',['userInfo','ui.gravatar']);

//factory style, more involved but more sophisticated
angular.module('app').factory('helloWorldFromFactory', function() {
  return {
    sayHello: function() {
      return "Hello World From Factory"
    }
  };
});
