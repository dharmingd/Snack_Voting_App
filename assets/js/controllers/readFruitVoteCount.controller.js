var app = angular.module('snackVotingApp');

app.controller('readFruitVoteCountController', function($window,$scope, $http, $routeParams, $cookieStore, readFruitVoteCountFactory, readUserVoteFactory, updateFruitVoteCountFactory, updateUserVoteFactory){


		$scope.userName = $routeParams.user;
		if($cookieStore.get('userName')==null){
			$window.location.href = "#";
		}
		else if($scope.userName != $cookieStore.get('userName')){
			$window.location.href = "#/UserName/"+$cookieStore.get('userName');	
		}
		else{
					$scope.gotDataFromServer = false;
					$scope.voteMessage = false;
					$scope.alreadyVoteMessage = false;
					var element1 = document.getElementById("imageInside");
    				element1.classList.add("mystyle1");
    				var element2 = document.getElementById("title");
    				element2.classList.add("mystyle2");
    				var element3 = document.getElementById("subtitle");
    				element3.classList.add("mystyle3");

					readFruitVoteCountFactory.readFruitVoteCount().then(function successCallback(response){
			            $scope.fruitVoteCount = response.data;		            
			            readUserVoteFactory.readUserVote($scope).then(function successCallback(response){
					            $scope.userVote = response.data;
					            $scope.previousChoice = "None";
					            $scope.disable = false;
					            if($scope.userVote[0].FruitName!=null){					    
					            	if($scope.userVote[0].FruitName == "Banana"){
					            		$scope.Banana = true;
					            	}	
					            	else if($scope.userVote[0].FruitName == "Pineapple"){
					            		$scope.Pineapple = true;
					            	}
					            	else if($scope.userVote[0].FruitName == "Apple"){
					            		$scope.Apple = true;
					            	}
					            	else{
					            		$scope.Orange = true;
					            	}
					            	$scope.disable = true;
					            	$scope.alreadyVoteMessage = true;
					            }	
					            $scope.lastChoice ="None";
					            $scope.gotDataFromServer = true;
					            $scope.updateVote2 = function(fruitName){
					            	$scope.voteMessage = true;
					            	if(fruitName == "Banana"){
					            		$scope.Banana = true;
					            	}	
					            	else if(fruitName == "Pineapple"){
					            		$scope.Pineapple = true;
					            	}
					            	else if(fruitName == "Apple"){
					            		$scope.Apple = true;
					            	}
					            	else{
					            		$scope.Orange = true;
					            	}

					            	$scope.fruitName = fruitName;

					            	$scope.votecountSend = null;
					            	for(var i=0; i< $scope.fruitVoteCount.length ; i++){
					            		if($scope.fruitVoteCount[i].FruitName == fruitName){
					            			$scope.fruitVoteCount[i].VoteCount = parseInt($scope.fruitVoteCount[i].VoteCount) +1;
					            			$scope.votecountSend = $scope.fruitVoteCount[i].VoteCount;
					            			$scope.disable = true;
					            	
					            		}

					            	}
					            	for(var i=0; i< $scope.fruitVoteCount.length ; i++){
					    				if($scope.fruitVoteCount[i].FruitName == $scope.lastChoice){
					            			$scope.fruitVoteCount[i].VoteCount = parseInt($scope.fruitVoteCount[i].VoteCount) -1;
					            			
					            		}
					            		
					            	}
					            	$scope.lastChoice = fruitName;
							        updateFruitVoteCountFactory.updateFruitVoteCount($scope).then(function successCallback(response){
								    }, function errorCallback(response){
								        console.log("Unable to read record.");
								    });

									updateUserVoteFactory.updateUserVote($scope).then(function successCallback(response){
								    }, function errorCallback(response){
								        console.log("Unable to read record.");
								    });
					            }	
					        }, function errorCallback(response){
					            console.log("Unable to read record.");
					    });
			        }, function errorCallback(response){
			            console.log("Unable to read record.");
			    });




				$scope.logout = function(){
					$cookieStore.remove("userName");
					var element1 = document.getElementById("imageInside");
    				element1.classList.remove("mystyle1");
    				var element2 = document.getElementById("title");
    				element2.classList.remove("mystyle2");
    				var element3 = document.getElementById("subtitle");
    				element3.classList.remove("mystyle3");
					$window.location.href = "#";

				}	
				
		}				

	});