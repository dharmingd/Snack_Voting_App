var app = angular.module('snackVotingApp');

app.config(function($routeProvider,$locationProvider) {
	   $locationProvider.hashPrefix('');
	   $routeProvider
	    .when("/", {
	        templateUrl : "files/userName.html",
	        controller : "userNameController"
	    })
		.when("/UserName/:user", {
	        templateUrl : "files/fruitVoteData.html",
			controller : "readFruitVoteCountController"
	    })
	    .otherwise({
	        template : "<h1>None</h1><p>Nothing has been selected</p>"
	    });
});
