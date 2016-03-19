angular.module ('ti-ionic-app.home')

.config (
  function ($stateProvider) {
    $stateProvider
      .state (
        'app.home', {
          url : '/home',
          abstract : true,
          template : '<ion-nav-view></ion-nav-view>',

          // USER_ROLES
          //data : {
          //   role : USER_ROLES.user
          // }
        }
      )

      .state (
        'app.home.index', {
          url : '/index',
          controller : 'IndexCtrl',
          cpmtrollerAs : '_index',
          templateUrl : 'home/index.tpl.html',
        }
      )
  }
)
