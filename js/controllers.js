app.controller('navController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewPath){
        return viewPath === $location.path();
    }
}])

app.controller('moviesController', ['$scope', function($scope) {

}]);

app.controller('showsController', ['$scope', function($scope) {

}]);