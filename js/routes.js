app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/movies.html',
        controller: 'recommendedMoviesController',
        title: 'Movies'
    })
    .when('/shows', {
        templateUrl: 'pages/shows.html',
        controller: 'showsController',
        title: 'Shows'
    })
    .when('/music', {
        templateUrl: 'pages/albums.html',
        controller: 'showMusicAlbumsController',
        title: 'Music'
    })
    .when('/people', {
        templateUrl: 'pages/peoples.html',
        controller: 'artistsController',
        title: 'People'
    })
    .when('/about', {
        templateUrl: 'pages/aboutus.html',
        controller: 'aboutusController',
        title: 'About Us'
    })
});