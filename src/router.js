angular.module (
  'ti-ionic-app'
)

.config (
  function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state (
      'app', {
        url: '/app',
        abstract: false,
        template: '<div>HELLO</div>'
      }
    );
  }
);
