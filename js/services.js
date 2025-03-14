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