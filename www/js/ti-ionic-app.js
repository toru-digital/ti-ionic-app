(function(module) {
try {
  module = angular.module('ti-ionic-app-templates');
} catch (e) {
  module = angular.module('ti-ionic-app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/signin.tpl.html',
    '<ion-view>\n' +
    '  <ion-content>\n' +
    '    <ti-signin></ti-signin>\n' +
    '  </ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

angular.module (
  'ti-ionic-app',
  [
    'ionic',
    'ti-ionic-app.dashboard',
    'ti-ionic-app.home',
    'ti-ionic-app-templates',
    'ti-auth'
  ]
)

.run (
  function ($tiAuth) {
    $tiAuth.addService (
      'ti-cms',
      { 'api' : "http://sealedairdigital.com/divexpress/api/web/v0_10" }
    );

    $tiAuth.addService (
      'google',
      { clientId : "1051012468372-9a3sj0c4p41bnkcvmftgoqaa57f290vf.apps.googleusercontent.com" }
    );

    $tiAuth.addService (
      'linkedin',
      {
        clientId : "77a0cl3zsyie76",
        clientSecret : "Dzpj0CzJnTum3ttY"
      }
    );

    $tiAuth.addService (
      'twitter',
      {
        consumerKey : "OWygkoR9hqD02g1WKF4QBrqOM",
        consumerSecretKey : "VOR85Y4ZXcy5DcfAsC7CGmRlHCoGdTscnbD6z5ewV8oduJJq0L"
      }
    );
  }
);

angular.module ('ti-ionic-app.dashboard', []);

angular.module ('ti-ionic-app.dashboard')

.config (
  function ($stateProvider) {
    $stateProvider
      .state (
        'app.dashboard', {
          url : '/dashboard',
          abstract : true,
          template : "<ion-nav-view></ion-nav-view>",
          data : {
            role : "guest"
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

angular.module ('ti-ionic-app.home', []);

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

angular.module (
  'ti-ionic-app'
)

.config (
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise ("/app/home/index");
    $stateProvider.state (
      'app', {
        url: '/app',
        abstract: true,
        template : "<ion-nav-view></ion-nav-view>"
      }
    );
  }
);
