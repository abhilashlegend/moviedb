app.controller('navController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewPath){
        return viewPath === $location.path();
    }
}])

app.controller('moviesController', ['$scope', function($scope) {

}]);

app.controller('recommendedMoviesController', ['$scope','recommendedMoviesService', 'ImageService', function($scope, recommendedMoviesService, ImageService) {

     $scope.movies = []; // Initialize movies array
     $scope.pages =  Array.from({ length: 100}, (_, i) => i + 1); // Create an array of numbers 1 to 100;
     $scope.selectedPage = 1; // Default to page 1
     
     // Reusable function for fetching recommended movies
     function fetchRecommendedMovies(page){
        recommendedMoviesService.getRecommendedMovies(page).then(result => {
           // console.log(result.data.results);
            $scope.movies = result.data.results; // Update movies in scope
        }).catch(error => {
            console.error("Error fetching movies:", error); 
        });
     }

    $scope.getItemImage = function(item) {
        return ImageService.getImageUrl(item);
    };

     $scope.onPageChange = function() {
        fetchRecommendedMovies($scope.selectedPage);
     }
    
     // Initial API call to fetch movies for the default page
    fetchRecommendedMovies($scope.selectedPage);

}])

app.controller('showsController', ['$scope','recommendedShowsService', 'ImageService', function($scope, recommendedShowsService, ImageService) {

        $scope.shows = []; // Initialize shows array
        $scope.pages = Array.from({ length: 100}, (_, i) => i + 1); // Create an array of numbers 1 to 100;
        $scope.selectedPage = 1; // Default to page 1

        // Reusable function for fetching recommended shows
        function fetchRecommendedShows(page) {
            recommendedShowsService.getRecommendedShows(page).then(result => {
               // console.log(result.data.results);
                $scope.shows = result.data.results; // Update shows in scope
            }).catch(error => {
                console.log(error);
            })
        }

        $scope.getItemImage = function(item) {
            return ImageService.getImageUrl(item);
        };

        $scope.onPageChange = function() {
            fetchRecommendedShows($scope.selectedPage);
         }
        
         // Initial API call to fetch movies for the default page
         fetchRecommendedShows($scope.selectedPage);
}]);

app.controller('showMusicAlbumsController', ['$scope', 'musicAlbumsService', 'ImageService', function($scope, musicAlbumsService, ImageService) {
    $scope.albums = [];
    $scope.pages = Array.from({ length: 100 }, (_, i) => i + 1); // Create an array of numbers 1 to 100
    $scope.selectedPage = 1; // Default to page 1

    function fetchAlbums(page) {
        musicAlbumsService.getAlbums(page, 20).then(result => {
            $scope.albums = result.results; // Update albums in scope
            console.log($scope.albums);
        }).catch(error => {
            console.error("Error fetching albums:", error);
        });
    }

    // Fetch albums when the user selects a page
    $scope.onPageChange = function () {
        fetchAlbums($scope.selectedPage);
    };

    $scope.getItemImage = function(item) {
        return ImageService.getImageUrl(item);
    };
    

     // Initial API call to fetch albums for the default page
     fetchAlbums($scope.selectedPage);

}])


app.controller('artistsController', ['$scope','recommendedArtistsService', 'ImageService', function($scope, recommendedArtistsService, ImageService) {

    $scope.artists = []; // Initialize artists array
    $scope.pages =  Array.from({ length: 100}, (_, i) => i + 1); // Create an array of numbers 1 to 100;
    $scope.selectedPage = 1; // Default to page 1
    
    // Reusable function for fetching recommended artists
    function fetchRecommendedArtists(page){
        recommendedArtistsService.getRecommendedArtists(page).then(result => {
           console.log(result.data.results);
           $scope.artists = result.data.results; // Update artists in scope
       }).catch(error => {
           console.error("Error fetching artists:", error); 
       });
    }

   $scope.getItemImage = function(item) {
       return ImageService.getImageUrl(item);
   };

    $scope.onPageChange = function() {
        fetchRecommendedArtists($scope.selectedPage);
    }
   
    // Initial API call to fetch movies for the default page
    fetchRecommendedArtists($scope.selectedPage);

}])