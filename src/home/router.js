angular.module ('ti-ionic-app.home')

.config (
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state (
        'app.home', {
          url: '/home',
          abstract: true
        }
      )

      .state (
        'app.home.index', {
          url: '/index'
        }
      );
  }
);
