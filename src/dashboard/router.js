angular.module ('ti-ionic-app.dashboard')

.config (
  function ($stateProvider) {
    $stateProvider
      .state (
        'app.dashboard', {
          url : '/dashboard',
          abstract : true,
          template : "<ion-nav-view></ion-nav-view>"
        }
      )

      .state (
        'app.dashboard.signin', {
          url: '/signin',
          templateUrl : "dashboard/signin.tpl.html"
        }
      );
  }
);
