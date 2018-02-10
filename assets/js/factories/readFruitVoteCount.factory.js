var app = angular.module('snackVotingApp');
app.factory("readFruitVoteCountFactory", function($http){
        var factory = {};
        factory.readFruitVoteCount = function(){
            return $http({
                method: 'GET',
                url: 'https://snackvotingapp.000webhostapp.com/api/DAO/readFruitVoteCount.php'
            });
        };
        return factory;
});