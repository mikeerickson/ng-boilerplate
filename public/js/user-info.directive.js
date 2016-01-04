(function() {

  angular
    .module('userInfo',[])
    .directive('userInfo', userInfo );

  userInfo.$inject = [];

  function userInfo() {

    var directive = {
      restrict: 'AE',
      scope: {
        fname: '@',
        lname: '@'
      },
      //compile:  _compile,
      link:     _link,
      template: '<span class="input-sm">Fullname: {{fname}} {{lname}}</span>'
    };

    return directive;

    function _compile(scope, element, attrs, ctrl){
      //console.log('directive compile');
    }

    function _link(scope, element, attrs, ctrl){
      //console.log('directive link');
      //
      //console.log('scope: ', scope.fname);
      //console.log('scope: ', scope.lname);
      //
      //console.log(attrs.fname);
      //console.log(attrs.lname);

    }

  }

}());
