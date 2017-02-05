(function(){

	'use strinct';
	var app = angular.module("MyApp");
	app.controller("signupController",function($state,APIServices,$window,$timeout,$scope){
		var vm = this;
    var user = {};
    vm.switchtologin = function(){
      $state.go('login');
    }
    vm.signup = function(){
      if (vm.password1 != vm.password2) {
        $window.alert("Both password must match....");
      }
      else {
        user.fullName = vm.fullName;
        user.username = vm.username;
        user.password = vm.password1;
        APIServices.addUser(user);
      }

    }
  });

}());
