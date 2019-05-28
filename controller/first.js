app.controller('controllerForms', ['$scope', '$state','$rootScope','firstService', function ($scope,$state,$rootScope,firstService) {
 /*   $scope.username = "SheoNarayan";*/
    $scope.address = "Hyderabad, India";
    $scope.Categories=["Electronics","Shoes","clothes","bikes"]
    $scope.fieldvalue = [];
    $scope.user={};
    $scope.isloading = false;
    $scope.adddata = function(v1) {
        console.log(v1);
        $rootScope.myname = v1.name;
         if(($scope.user.email) && ($scope.user.name )){
             console.log("success")
             $state.go('about')
         }
    }

    $scope.login = function(v) {
       /* $rootScope.id = v.email;*/
        console.log($scope.user.email);
        if(($scope.user.email) && ($scope.user.password)){
            $state.go('first')
        } else {
            console.log('error');
        }

    }

    /*firstService.getRequest().then(function (res) {
        console.log(res);
        $scope.description = res.description;
        $scope.city = res.location.city;
        $scope.name = res.employer.name;
        $scope.email = res.employer.email;
        $scope.phone = res.phoneNumbers;
        if(res.title) {
            $scope.title = res.title;
            $scope.company = res.organization.name;
            $scope.url = res.organization.url;
        }


    });*/

    /*$scope.customLogin = function () {
        console.log($scope.email);
        if ($scope.username) {
            if ($scope.password) {
                authService.authenticate({
                    app_type: 'talentscreen',
                    email_address: $scope.username,
                    password: $scope.password,
                    type: 'login'
                }).then(function (results) {
                    if (results.status) {

                    }
                });
            }
        }
    };*/


}]).directive("w3TestDirective", function() {
    return {
        restrict: 'E',
        templateUrl: "view/directive.html"
    };
});



