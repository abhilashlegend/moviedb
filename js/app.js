const app = angular.module('myApp',['ngRoute']);

app.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
        if ($route.current && $route.current.title) {
            document.title = "CinemaDB" + " - " + $route.current.title;
        }
    });
}]);
