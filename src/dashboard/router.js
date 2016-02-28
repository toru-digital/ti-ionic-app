angular.module ('ti-ionic-app.dashboard')

.config (
  function ($stateProvider, USER_ROLES) {
    $stateProvider
      .state (
        'app.dashboard', {
          url : '/dashboard',
          abstract : true,
          template : "<ion-nav-view></ion-nav-view>",
          data : {
      		  role : USER_ROLES.guest
      		}
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
