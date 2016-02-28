angular.module ('ti-ionic-app.signin')

.config (
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state (
        'signin', {
          url: '/signin',
          abstract: true
        }
      )

      .state (
        'signin.home', {
          url: '/signin'
        }
      )
  }
);
