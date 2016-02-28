angular.module ('ti-ionic-app.app')

.config (
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state (
        'app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/tabs.html'
        }
      )

      .state (
        'app.home', {
          url: '/home',
          views: {
            'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
            }
          }
        }
      );
  }
);
