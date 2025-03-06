app.controller('navController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewPath){
        return viewPath === $location.path();
    }
}])

app.controller('moviesController', ['$scope', function($scope) {

}]);

app.controller('recommendedMoviesController', ['$scope','recommendedMoviesService', function($scope, recommendedMoviesService) {

     $scope.movies = []; // Initialize movies array
     $scope.pages =  Array.from({ length: 100}, (_, i) => i + 1); // Create an array of numbers 1 to 100;
     $scope.selectedPage = 1; // Default to page 1
     
     // Reusable function for fetching recommended movies
     function fetchRecommendedMovies(page){
        recommendedMoviesService.getRecommendedMovies(page).then(result => {
            $scope.movies = result.data.results; // Update movies in scope
        }).catch(error => {
            console.error("Error fetching movies:", error); 
        });
     }

     $scope.onPageChange = function() {
        fetchRecommendedMovies($scope.selectedPage);
     }
    
     // Initial API call to fetch movies for the default page
    fetchRecommendedMovies($scope.selectedPage);

}])

app.controller('showsController', ['$scope', function($scope) {

}]);