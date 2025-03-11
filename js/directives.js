app.directive('itemCard', function() {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: '/directives/card.html',
        scope: {
            item: '='
        }
    }
});