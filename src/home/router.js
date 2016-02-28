angular.module ('ti-ionic-app.home')

.config (
  function ($stateProvider) {
    $stateProvider
      .state (
        'app.home', {
          url: '/home',
          abstract: true,
          template : "<ion-nav-view></ion-nav-view>",
          data : {
            role : "user"
          }
        }
      )

      .state (
        'app.home.index', {
          url: '/index',
          template : "You're in!"
        }
      );
  }
);
