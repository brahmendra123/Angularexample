app.controller('MainController', function($scope) {
    $scope.mydata = [1,2,3,4];
    $scope.mydata1 = [2,5,2,4];
    $scope.myJson = {
        /*title: {
            text: "My title"
        },*/
        series: [{
            values: [3],
            text: "Total Commits"

        }, {
            values: [4],
            text: "Issues Solved"

        }, {
            values: [8],
            text: "Issues Submitted"
        }, {
            values: [7],
            text: "Number of Clones"

        },{
            values: [1],
            text: "Numbers"

        }
        ]
    };
});