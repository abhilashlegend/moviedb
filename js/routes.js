app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/movies.html',
        controller: 'moviesController'
    })
    .when('/shows', {
        templateUrl: 'pages/shows.html',
        controller: 'showsController'
    })
    .when('/music', {
        templateUrl: 'pages/albums.html',
        controller: 'showMusicAlbumsController'
    })
    .when('/people', {
        templateUrl: 'pages/peoples.html',
        controller: 'artistsController'
    })
});