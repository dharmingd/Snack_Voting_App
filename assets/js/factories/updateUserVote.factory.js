var app = angular.module('snackVotingApp');

	app.factory("updateUserVoteFactory", function($http){
	    var factory = {};
	    factory.updateUserVote = function($scope){
			 return $http({
	            method: 'GET',
				url: 'https://snackvotingapp.000webhostapp.com/api/DAO/updateUserVote.php',
				params: {fruit_name: $scope.fruitName, user_name: angular.uppercase($scope.userName) }
	        });
	    };
	    return factory;
	});