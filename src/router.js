angular.module (
  'ti-ionic-app'
)

.config (
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state (
      'app', {
        url: '/app',
        abstract: true,
        template : "<ion-nav-view></ion-nav-view>"
      }
    );
  }
);
