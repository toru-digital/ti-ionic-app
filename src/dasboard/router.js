angular.module ('ti-ionic-app.dashboard')

.config (
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state (
        'app.dashboard', {
          url: '/dashboard',
          abstract: true
        }
      )

      .state (
        'app.dashboard.signin', {
          url: '/signin'
        }
      );
  }
);
