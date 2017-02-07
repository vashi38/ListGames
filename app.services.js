var app = angular.module("MyApp");

app.service("APIServices",function($http,$state){

	this.getList = function(){
		return $http({
			method:'GET',
			// url:'response.json',
			url:'http://127.0.0.1:3000/'
		}).then(function(response){
			console.log(response.data);
			return (response.data);
		});
	};

	this.getUser = function(user){
		// console.log(user);
		return $http({
			method:'POST',
			url:'http://127.0.0.1:3000/login',
			data:{
				"username": user.username,
				"password": user.password
			}
		}).then(function (response) {
			console.log(response.data);
			return (response.data);
		});
	};

	this.addUser = function(user){
		return $http({
			method:'POST',
		url:'http://127.0.0.1:3000/signup',
		data:{
			"username": user.username,
			"password": user.password,
			"fullName": user.fullName
		}
	}).then(function (response) {
		console.log(response);
		return response.data;
	});
};

});
