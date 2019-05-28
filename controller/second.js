app.controller('demoController',['$scope', function($scope) {
    $scope.items = [];
    $scope.add = function() {
        $scope.items.push($scope.input);
    };

    // remove an item
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    };

}])