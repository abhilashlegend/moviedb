app.service('recommendedMoviesService',["$http", function($http) {

    this.getRecommendedMovies = function(Pgno){

        const apiurl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${Pgno}&sort_by=popularity.desc`;

        return $http({
            method: 'GET',
            url: apiurl,
            headers: {
                 accept: 'application/json',
                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNjNjA1M2FkOTcwYTNmMzZjNTlhZmI0OTlmMTAzMiIsIm5iZiI6MTc0MTE5MTAyOC45LCJzdWIiOiI2N2M4Nzc3NDkyNjRhYTU4NjY2ZTQ1ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yqimCVW-wJ3c8MuTV1-mRAs_dfX7xuyc6YfiDnbbRhM'
            }
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(err){
            console.log(err);
            return null;
        });
    }
}])

app.service('recommendedShowsService', ['$http', function($http) {
    this.getRecommendedShows = function(Pgno) {
        const apiurl = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${Pgno}&sort_by=popularity.desc`;

        return $http({
            method: 'GET',
            url: apiurl,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNjNjA1M2FkOTcwYTNmMzZjNTlhZmI0OTlmMTAzMiIsIm5iZiI6MTc0MTE5MTAyOC45LCJzdWIiOiI2N2M4Nzc3NDkyNjRhYTU4NjY2ZTQ1ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yqimCVW-wJ3c8MuTV1-mRAs_dfX7xuyc6YfiDnbbRhM'
            }
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(err){
            console.log(err);
            return null;
        })
    }
}])

app.service('musicAlbumsService', ['$http', function($http) {
   
    var baseUrl = "https://api.discogs.com";
    var accessToken = "ygviSFxGUtjgiCjZhfMKpOXrLhaIQTgNyZaxVWTJ"; // Replace with your token

    this.getAlbums = function(page, perPage) {
        var url = baseUrl + "/database/search";
        var params = {
            format: "album",
            type: "release",
            page: page || 1,
            per_page: perPage || 20,
            token: accessToken  // Using token directly in request
        };

        return $http({
            method: "GET",
            url: url,
            params: params
        }).then(function(response) {
            return response.data;
        }, function(error) {
            return $q.reject(error);
        });
    };
    
}])

app.service('ImageService', function(){
    this.getImageUrl = function(item){
        console.log("Fetching image for:", item);
        if (item.poster_path) {
            return "https://image.tmdb.org/t/p/w1280/" + item.poster_path; // TMDB API
        } else if (item.cover_image) {
            return item.cover_image; // Discogs API
        } else if (item.thumb) {
            return item.thumb; // Discogs Thumbnail (Fallback)
        } else {
            return "fallback-image.jpg"; // Default Image
        }
    }
})