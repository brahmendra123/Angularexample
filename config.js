app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/about');
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'view/about.html',
            controller:  'controllerForms'
        })
        .state('new', {
            url: '/new',
            templateUrl: 'view/new.html',
            controller:  'controllerForms'

        })
        .state('first', {
            url: '/first',
            templateUrl: 'view/first.html'

        })
        .state('second', {
            url: '/second',
            templateUrl: 'view/second.html'

        })
        .state('example', {
            url: '/example',
            templateUrl: 'view/example.html'

        })

}]);
