var app = angular.module('snackVotingApp');
app.factory("updateFruitVoteCountFactory", function($http){
        var factory = {};
        factory.updateFruitVoteCount = function($scope){
             return $http({
                method: 'GET',
                url: 'https://snackvotingapp.000webhostapp.com/api/DAO/updateFruitVoteCount.php',
                params: {fruit_name: $scope.fruitName, vote_count: $scope.votecountSend }
            });
        };
        return factory;
    });