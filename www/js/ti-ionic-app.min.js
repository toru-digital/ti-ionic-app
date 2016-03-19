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

(function(module) {
try {
  module = angular.module('ti-ionic-app-templates');
} catch (e) {
  module = angular.module('ti-ionic-app-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/index.tpl.html',
    '<ion-view>\n' +
    '  <ion-content>\n' +
    '    <div class="padding">\n' +
    '      <div class="button button-calm" ng-click="signout()">\n' +
    '        sign out\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);
})();

angular.module (
  'ti-ionic-app',
  [
    'ionic',
    'ti-ionic',
    'ti-ionic-app.dashboard',
    'ti-ionic-app.home',
    'ti-ionic-app-templates'
  ]
);

angular.module ('ti-ionic-app.dashboard', []);

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

angular.module ('ti-ionic-app.home', []);

//'ti-auth'

angular.module ('ti-ionic-app.home')

.controller (
	"IndexCtrl",
	function ($scope) {

		// $tiAuth
    // $scope.signout = function ($) {
		// 	console.log ("I'M HERE");
    //   $tiAuth.signout ();
    // };
  }
);

angular.module ('ti-ionic-app.home')

.config (
  function ($stateProvider, USER_ROLES) {
    $stateProvider
      .state (
        'app.home', {
          url: '/home',
          abstract: true,
          template : "<ion-nav-view></ion-nav-view>",
          // data : {
      		//   role : USER_ROLES.user
      		// }
        }
      )

      .state (
        'app.home.index', {
          url: '/index',
          controller : "IndexCtrl",
          cpmtrollerAs : "_index",
          templateUrl : "home/index.tpl.html"
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

angular.module (
  'ti-ionic-app'
)

.run (
  function () {
    // $tiAuth
    // $tiAuth.addService (
    //   'ti-cms',
    //   { 'api' : "http://sealedairdigital.com/divexpress/api/web/v0_10" }
    // );
    //
    // $tiAuth.addService (
    //   'google',
    //   {
    //     clientId : "1051012468372-9a3sj0c4p41bnkcvmftgoqaa57f290vf.apps.googleusercontent.com"
    //   }
    // );
    //
    // $tiAuth.addService (
    //   'linkedin',
    //   {
    //     clientId : "77a0cl3zsyie76",
    //     clientSecret : "Dzpj0CzJnTum3ttY"
    //   }
    // );
    //
    // $tiAuth.addService (
    //   'twitter',
    //   {
    //     consumerKey : "OWygkoR9hqD02g1WKF4QBrqOM",
    //     consumerSecretKey : "VOR85Y4ZXcy5DcfAsC7CGmRlHCoGdTscnbD6z5ewV8oduJJq0L"
    //   }
    // );
  }
);
