app.controller('navController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewPath){
        return viewPath === $location.path();
    }
}])

app.controller('moviesController', ['$scope', function($scope) {

}]);

app.controller('recommendedMoviesController', ['$scope','recommendedMoviesService', function($scope, recommendedMoviesService) {

     $scope.movies = null;
    recommendedMoviesService.getRecommendedMovies().then(result => {
        $scope.movies = result.data.results;
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
}])

app.controller('showsController', ['$scope', function($scope) {

}]);