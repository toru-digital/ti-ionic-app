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
