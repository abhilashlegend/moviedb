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
});