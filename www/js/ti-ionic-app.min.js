(function(module) {
try {
  module = angular.module('ti-ionic-app-templates');
} catch (e) {
  module = angular.module('ti-ionic-app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/app.tpl.html',
    '<ion-nav-view\n' +
    '  name="appContent"\n' +
    '  animation="slide-left-right">\n' +
    '</ion-nav-view>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ti-ionic-app-templates');
} catch (e) {
  module = angular.module('ti-ionic-app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/home.tpl.html',
    '<ion-view>\n' +
    '  <ion-content>\n' +
    '    HELLO\n' +
    '  </ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('ti-ionic-app-templates');
} catch (e) {
  module = angular.module('ti-ionic-app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('signin/home.tpl.html',
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
  function ($stateProvider, $urlRouterProvider) {
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
          template : "YES"
        }
      );
  }
);

angular.module ('ti-ionic-app.home', []);

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
