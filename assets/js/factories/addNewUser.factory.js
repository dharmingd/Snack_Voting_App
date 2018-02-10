var app = angular.module('snackVotingApp');
	app.factory("addNewUserFactory", function($http){
	    var factory = {};
	    factory.addNewUser = function($scope){
			 return $http({
	            method: 'GET',
	        	params: {user_name: angular.uppercase($scope.userName)},
	            url: 'https://snackvotingapp.000webhostapp.com/api/DAO/addNewUser.php',
	        });
	    };
	    return factory;
	});