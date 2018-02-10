var app = angular.module('snackVotingApp');

app.controller('userNameController', function($scope, $http, $window, $cookieStore, readUserVoteFactory, addNewUserFactory){

	if($cookieStore.get('userName')!=null){
			$window.location.href = "#UserName/"+$cookieStore.get('userName');
	}

	$scope.animateBtn = function(){
		document.getElementById('userNameBtn').classList.add('rubberBand');
	}


	$scope.redirect = function(){
			$cookieStore.put('userName', $scope.userName); 
			readUserVoteFactory.readUserVote($scope).then(function successCallback(response){
				if(response.data.message=="No Data Found!"){	
						addNewUserFactory.addNewUser($scope).then(function successCallback(response){
							$window.location.href = '#UserName/'+$scope.userName;
						}, function errorCallback(response){
					            console.log("Unable to read record.");
						});
				}
				else{
					$window.location.href = '#UserName/'+$scope.userName;
				}

			}, function errorCallback(response){
					console.log("Unable to read record.");
			});




			
	}

});
