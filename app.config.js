var app = angular.module("MyApp");

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.
	state('games',{
		url:'/games',
		templateUrl:'games/games.html',
		controller:'showGames',
		controllerAs:'games',
		params:{
			"user": ""
		}
	})
	.state('login',{
		url:'/login',
		templateUrl: 'login/login.html',
		controller: 'loginController',
		controllerAs: 'loginCtrl'
	})
	.state('signup',{
		url:'/signup',
		templateUrl: 'signup/signup.html',
		controller: 'signupController',
		controllerAs: 'signupCtrl'

	})
	$urlRouterProvider.otherwise('/games');

});
