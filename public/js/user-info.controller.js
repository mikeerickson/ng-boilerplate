angular
  .module('app')
  .controller('MainController', MainController);

function MainController(UserInfoFactory) {
  var vm = this;

  //vm.erickson   = UserInfoFactory.getErickson();
  //vm.buffington = UserInfoFactory.getBuffington();

  UserInfoFactory.get('erickson').then(function(result){
    vm.erickson = result.data;
  });

  UserInfoFactory.get('buffington').then(function(result){
    vm.buffington = result.data;
  });

}


