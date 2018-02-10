var app = angular.module('snackVotingApp');
	app.factory("readUserVoteFactory", function($http){
	    var factory = {};
	    factory.readUserVote = function($scope){
			 return $http({
	            method: 'GET',
	        	params: {user_name: angular.uppercase($scope.userName)},
	            url: 'https://snackvotingapp.000webhostapp.com/api/DAO/readUserVote.php',
	        });
	    };
	    return factory;
	});