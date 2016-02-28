angular.module (
  'ti-ionic-app',
  [
    'ionic',
    'starter.controllers',
    'starter.services',
    'ti-auth'
  ]
)

.run (
  function ($tiAuth) {
    $tiAuth.addService (
      'ti-cms',
      { 'api' : "http://sealedairdigital.com/divexpress/api/web/v0_10" }
    );

    $tiAuth.addService (
      'google',
      { clientId : "1051012468372-9a3sj0c4p41bnkcvmftgoqaa57f290vf.apps.googleusercontent.com" }
    );

    $tiAuth.addService (
      'linkedin',
      {
        clientId : "77a0cl3zsyie76",
        clientSecret : "Dzpj0CzJnTum3ttY"
      }
    );

    $tiAuth.addService (
      'twitter',
      {
        consumerKey : "OWygkoR9hqD02g1WKF4QBrqOM",
        consumerSecretKey : "VOR85Y4ZXcy5DcfAsC7CGmRlHCoGdTscnbD6z5ewV8oduJJq0L"
      }
    );
  }
);

angular.module ('ti-ionic-app.login', []);

angular.module ('ti-ionic-app', [])

.controller (
  'DashCtrl',
  function ($scope) {}
)

.controller (
  'AccountCtrl',
  function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
);

angular.module ('ti-ionic-app.login', []);

angular.module ('ti-ionic-app')

.config (
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state (
        'tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        }
      )

      .state (
        'tab.dash', {
          url: '/dash',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        }
      )

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise ('/tab/dash');
  }
);
