/*jshint -W003 */
/*jshint -W117 */

(function(){

  'use strict';

  angular
    .module('app')
    .controller('ColumnOneController', ColumnOneController );

  ColumnOneController.$inject = [];
  function ColumnOneController() {
    var col1Ctrl = this;

    col1Ctrl.sayHello = function () {
      alert('Hello World!');
    };
  }

})();

