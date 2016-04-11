app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/details', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
      })
      .when('/charges', {
        templateUrl: 'partials/charges.html',
        controller: 'ChargesController'
      })
      .when('/earnings', {
        templateUrl: 'partials/earnings.html',
        controller: 'EarningsController'
      })
      .otherwise('/details');
});