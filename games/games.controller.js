(function(){

	'use strinct';
	var app = angular.module("MyApp");
	app.controller("showGames",function($state,APIServices,$window,$timeout,$scope){
		var vm = this;
		var start=1,end=9;
		vm.showlogin = true;
		vm.display = function(s, e){
			start = s;
			end = e;
			scrollTo(0,0);
			 vm.object = vm.all_games.slice(start,start+9);
		};
		vm.login = function(){
			vm.showlogin = !vm.showlogin;
			$state.go('login');
		}
		vm.logout = function(){
			vm.showlogin = !vm.showlogin;
		}
		vm.pre = function(){
			if(start != 1)
			{
				start-=9;
				end-=9;
				vm.display(start,end);
			}
		}
		vm.next = function(){
			if(end != 99)
			{
				start+=9;
				end+=9;
				vm.display(start,end);
			}
		}

		APIServices.getList().then(function(response){
			vm.all_games = response;
			vm.all_games.map(function (project) {
				if(project.editors_choice == 'N')
					angular.extend(project,{mystyle: {color:"grey"}});
				else {
					angular.extend(project,{mystyle: {color:"rgba(255, 179, 0, 0.94)"}});
				}
			});
			console.log(vm.all_games);
			vm.display(1,10);
		});

});

}());
