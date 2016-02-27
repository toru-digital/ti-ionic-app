angular.module(
  'starter',
  ['ionic', 'starter.controllers', 'starter.services', 'ti-auth']
)

.run(function($ionicPlatform, $tiAuth) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/dash');
});
