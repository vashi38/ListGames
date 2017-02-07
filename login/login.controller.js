(function(){

	'use strinct';
	var app = angular.module("MyApp");
	app.controller("loginController",function($state,APIServices,$window,$timeout,$scope){
		var vm = this;
    var user = {};
    vm.switchtologin = function(){
      $state.go('signup');
    }
    vm.login = function () {
      user.username = vm.username;
      user.password = vm.password;
      APIServices.getUser(user).then(function(response){
					if(response == "false"){
            $window.alert("Username/Password incorrect");
            vm.username = "";
            vm.password = "";
					}
					else{
						$state.go("games",{"user":response});
					}
      })
    }
  });

}());
