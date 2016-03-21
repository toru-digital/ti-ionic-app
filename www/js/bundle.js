(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/dashboard/dashboard');
require('./modules/home/home');

module.exports = angular.module('my-app', ['ionic', 'my-app.dashboard', 'my-app.home', 'templates', 'ti-ionic']).config(require('./router')).run(require('./run'));

},{"./modules/dashboard/dashboard":2,"./modules/home/home":5,"./router":7,"./run":8}],2:[function(require,module,exports){
'use strict';
'use-strict';

module.exports = angular.module('my-app.dashboard', []);

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function () {
  function HomeController($tiToast) {
    _classCallCheck(this, HomeController);

    this.$tiToast = $tiToast;
  }

  _createClass(HomeController, [{
    key: 'signout',
    value: function signout() {
      // $tiAuth.signout ();
    }
  }, {
    key: 'toast',
    value: function toast() {
      this.$tiToast.say('FUCK YOU ANGULAR I WIN');
    }
  }]);

  return HomeController;
}();

module.exports = ['$tiToast', HomeController];

},{}],4:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('templates');
} catch (e) {
  ngModule = angular.module('templates', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('home.html',
    '<ion-view>\n' +
    '  <ion-content>\n' +
    '    <div class="padding">\n' +
    '\n' +
    '      <p>$tiToast...</p>\n' +
    '      <div class="button button-calm" ng-click="$home.toast()">\n' +
    '        say hello\n' +
    '      </div>\n' +
    '\n' +
    '      <br>\n' +
    '      <br>\n' +
    '      <p>tiButton...</p>\n' +
    '      <ti-button class="button button-calm">Click</ti-button>\n' +
    '\n' +
    '      <!-- <div class="button button-calm" ng-click="signout()">\n' +
    '        sign out\n' +
    '      </div> -->\n' +
    '    </div>\n' +
    '  </ion-content>\n' +
    '</ion-view>\n' +
    '');
}]);

module.exports = "home.html";
},{}],5:[function(require,module,exports){
'use strict';
'use-strict';

module.exports = angular.module('my-app.home', ['ti-ionic.utils']).config(require('./router')).controller('HomeController', require('./home-controller'));

},{"./home-controller":3,"./router":6}],6:[function(require,module,exports){
'use strict';

var Router = function Router($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/home',
    abstract: true,
    template: '<ion-nav-view></ion-nav-view>'

  }). // USER_ROLES
  //data : {
  //   role : USER_ROLES.user
  // }
  state('app.home.index', {
    controller: 'HomeController as $home',
    templateUrl: require('./home.html'),
    url: '/index'
  });
};

module.exports = ['$stateProvider', Router];

},{"./home.html":4}],7:[function(require,module,exports){
'use strict';

var Router = function Router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/home/index');
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    template: '<ion-nav-view></ion-nav-view>'
  });
};

module.exports = ['$stateProvider', '$urlRouterProvider', Router];

},{}],8:[function(require,module,exports){
'use strict';

var Run = function Run() {
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
  //   'linkedin'
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
};

module.exports = Run;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzcmMvbW9kdWxlcy9ob21lL2hvbWUtY29udHJvbGxlci5qcyIsInNyYy9tb2R1bGVzL2hvbWUvaG9tZS5odG1sIiwic3JjL21vZHVsZXMvaG9tZS9ob21lLmpzIiwic3JjL21vZHVsZXMvaG9tZS9yb3V0ZXIuanMiLCJzcmMvcm91dGVyLmpzIiwic3JjL3J1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsUUFBUywrQkFBVDtBQUNBLFFBQVMscUJBQVQ7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixRQUFoQixFQUEwQixDQUN6QyxPQUR5QyxFQUNoQyxrQkFEZ0MsRUFDWixhQURZLEVBQ0csV0FESCxFQUNnQixVQURoQixDQUExQixFQUVkLE1BRmMsQ0FFTixRQUFTLFVBQVQsQ0FGTSxFQUdkLEdBSGMsQ0FHVCxRQUFTLE9BQVQsQ0FIUyxDQUFqQjs7OztBQ0pBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixRQUFRLE1BQVIsQ0FBZ0Isa0JBQWhCLEVBQW9DLEVBQXBDLENBQWpCOzs7Ozs7Ozs7SUNGTTtBQUNKLFdBREksY0FDSixDQUFhLFFBQWIsRUFBdUI7MEJBRG5CLGdCQUNtQjs7QUFDckIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCLENBRHFCO0dBQXZCOztlQURJOzs4QkFLTzs7Ozs7NEJBSUY7QUFDUCxXQUFLLFFBQUwsQ0FBYyxHQUFkLENBQW1CLHdCQUFuQixFQURPOzs7O1NBVEw7OztBQWNOLE9BQU8sT0FBUCxHQUFpQixDQUFFLFVBQUYsRUFBYyxjQUFkLENBQWpCOzs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsUUFBUSxNQUFSLENBQWdCLGFBQWhCLEVBQStCLENBQUUsZ0JBQUYsQ0FBL0IsRUFDZCxNQURjLENBQ04sUUFBUyxVQUFULENBRE0sRUFFZCxVQUZjLENBRUYsZ0JBRkUsRUFFZ0IsUUFBUyxtQkFBVCxDQUZoQixDQUFqQjs7O0FDRkE7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFVLGNBQVYsRUFBMEI7QUFDckMsaUJBQWUsS0FBZixDQUFzQixVQUF0QixFQUFrQztBQUNoQyxTQUFNLE9BQU47QUFDQSxjQUFXLElBQVg7QUFDQSxjQUFXLCtCQUFYOztHQUhGOzs7O0FBV0MsT0FYRCxDQVdRLGdCQVhSLEVBVzBCO0FBQ3hCLGdCQUFhLHlCQUFiO0FBQ0EsaUJBQWMsUUFBUyxhQUFULENBQWQ7QUFDQSxTQUFNLFFBQU47R0FkRixFQURxQztDQUExQjs7QUFtQmIsT0FBTyxPQUFQLEdBQWlCLENBQUUsZ0JBQUYsRUFBb0IsTUFBcEIsQ0FBakI7OztBQ3JCQTs7QUFFQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQVUsY0FBVixFQUNYLGtCQURXLEVBQ1M7O0FBRXBCLHFCQUFtQixTQUFuQixDQUE4QixpQkFBOUIsRUFGb0I7QUFHcEIsaUJBQWUsS0FBZixDQUNFLEtBREYsRUFDUztBQUNMLFNBQU0sTUFBTjtBQUNBLGNBQVcsSUFBWDtBQUNBLGNBQVcsK0JBQVg7R0FKSixFQUhvQjtDQURUOztBQWFiLE9BQU8sT0FBUCxHQUFpQixDQUFFLGdCQUFGLEVBQW9CLG9CQUFwQixFQUEwQyxNQUExQyxDQUFqQjs7O0FDZkE7O0FBRUEsSUFBSSxNQUFNLFNBQU4sR0FBTSxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFaOztBQStCVixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5yZXF1aXJlICgnLi9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQnKVxucmVxdWlyZSAoJy4vbW9kdWxlcy9ob21lL2hvbWUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwJywgW1xuICAnaW9uaWMnLCAnbXktYXBwLmRhc2hib2FyZCcsICdteS1hcHAuaG9tZScsICd0ZW1wbGF0ZXMnLCAndGktaW9uaWMnLFxuXSkuY29uZmlnIChyZXF1aXJlICgnLi9yb3V0ZXInKSlcbiAgLnJ1biAocmVxdWlyZSAoJy4vcnVuJykpXG4iLCIndXNlLXN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAoJ215LWFwcC5kYXNoYm9hcmQnLCBbXSlcbiIsImNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aVRvYXN0KSB7XG4gICAgdGhpcy4kdGlUb2FzdCA9ICR0aVRvYXN0XG4gIH1cblxuICBzaWdub3V0ICgpIHtcbiAgICAvLyAkdGlBdXRoLnNpZ25vdXQgKCk7XG4gIH1cblxuICB0b2FzdCAoKSB7XG4gICAgdGhpcy4kdGlUb2FzdC5zYXkgKCdGVUNLIFlPVSBBTkdVTEFSIEkgV0lOJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsgJyR0aVRvYXN0JywgSG9tZUNvbnRyb2xsZXIgXVxuIiwidmFyIG5nTW9kdWxlO1xudHJ5IHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJyk7XG59IGNhdGNoIChlKSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3RlbXBsYXRlcycsIFtdKTtcbn1cblxubmdNb2R1bGUucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJHRlbXBsYXRlQ2FjaGUpIHtcbiAgJHRlbXBsYXRlQ2FjaGUucHV0KCdob21lLmh0bWwnLFxuICAgICc8aW9uLXZpZXc+XFxuJyArXG4gICAgJyAgPGlvbi1jb250ZW50PlxcbicgK1xuICAgICcgICAgPGRpdiBjbGFzcz1cInBhZGRpbmdcIj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDxwPiR0aVRvYXN0Li4uPC9wPlxcbicgK1xuICAgICcgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1jYWxtXCIgbmctY2xpY2s9XCIkaG9tZS50b2FzdCgpXCI+XFxuJyArXG4gICAgJyAgICAgICAgc2F5IGhlbGxvXFxuJyArXG4gICAgJyAgICAgIDwvZGl2PlxcbicgK1xuICAgICdcXG4nICtcbiAgICAnICAgICAgPGJyPlxcbicgK1xuICAgICcgICAgICA8YnI+XFxuJyArXG4gICAgJyAgICAgIDxwPnRpQnV0dG9uLi4uPC9wPlxcbicgK1xuICAgICcgICAgICA8dGktYnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1jYWxtXCI+Q2xpY2s8L3RpLWJ1dHRvbj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbiBidXR0b24tY2FsbVwiIG5nLWNsaWNrPVwic2lnbm91dCgpXCI+XFxuJyArXG4gICAgJyAgICAgICAgc2lnbiBvdXRcXG4nICtcbiAgICAnICAgICAgPC9kaXY+IC0tPlxcbicgK1xuICAgICcgICAgPC9kaXY+XFxuJyArXG4gICAgJyAgPC9pb24tY29udGVudD5cXG4nICtcbiAgICAnPC9pb24tdmlldz5cXG4nICtcbiAgICAnJyk7XG59XSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCJob21lLmh0bWxcIjsiLCIndXNlLXN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAoJ215LWFwcC5ob21lJywgWyAndGktaW9uaWMudXRpbHMnIF0pXG4gIC5jb25maWcgKHJlcXVpcmUgKCcuL3JvdXRlcicpKVxuICAuY29udHJvbGxlciAoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSAoJy4vaG9tZS1jb250cm9sbGVyJykpXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFJvdXRlciA9IGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAkc3RhdGVQcm92aWRlci5zdGF0ZSAoJ2FwcC5ob21lJywge1xuICAgIHVybCA6ICcvaG9tZScsXG4gICAgYWJzdHJhY3QgOiB0cnVlLFxuICAgIHRlbXBsYXRlIDogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+JyxcblxuICAgIC8vIFVTRVJfUk9MRVNcbiAgICAvL2RhdGEgOiB7XG4gICAgLy8gICByb2xlIDogVVNFUl9ST0xFUy51c2VyXG4gICAgLy8gfVxuICB9KVxuXG4gIC5zdGF0ZSAoJ2FwcC5ob21lLmluZGV4Jywge1xuICAgIGNvbnRyb2xsZXIgOiAnSG9tZUNvbnRyb2xsZXIgYXMgJGhvbWUnLFxuICAgIHRlbXBsYXRlVXJsIDogcmVxdWlyZSAoJy4vaG9tZS5odG1sJyksXG4gICAgdXJsIDogJy9pbmRleCcsXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gWyAnJHN0YXRlUHJvdmlkZXInLCBSb3V0ZXIgXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBSb3V0ZXIgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsXG4gICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgKCcvYXBwL2hvbWUvaW5kZXgnKVxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSAoXG4gICAgJ2FwcCcsIHtcbiAgICAgIHVybCA6ICcvYXBwJyxcbiAgICAgIGFic3RyYWN0IDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlIDogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+JyxcbiAgICB9XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBSb3V0ZXIgXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBSdW4gPSBmdW5jdGlvbiAoKSB7XG4gIC8vICR0aUF1dGhcbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAndGktY21zJyxcbiAgLy8gICB7ICdhcGknIDogXCJodHRwOi8vc2VhbGVkYWlyZGlnaXRhbC5jb20vZGl2ZXhwcmVzcy9hcGkvd2ViL3YwXzEwXCIgfVxuICAvLyApO1xuICAvL1xuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICdnb29nbGUnLFxuICAvLyAgIHtcbiAgLy8gICAgIGNsaWVudElkIDogXCIxMDUxMDEyNDY4MzcyLTlhM3NqMGM0cDQxYm5rY3ZtZnRnb3FhYTU3ZjI5MHZmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgLy8gICB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ2xpbmtlZGluJ1xuICAvLyAgIHtcbiAgLy8gICAgIGNsaWVudElkIDogXCI3N2EwY2wzenN5aWU3NlwiLFxuICAvLyAgICAgY2xpZW50U2VjcmV0IDogXCJEenBqMEN6Sm5UdW0zdHRZXCJcbiAgLy8gICB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ3R3aXR0ZXInLFxuICAvLyAgIHtcbiAgLy8gICAgIGNvbnN1bWVyS2V5IDogXCJPV3lna29SOWhxRDAyZzFXS0Y0UUJycU9NXCIsXG4gIC8vICAgICBjb25zdW1lclNlY3JldEtleSA6IFwiVk9SODVZNFpYY3k1RGNmQXNDN0NHbVJsSENvR2RUc2NuYkQ2ejVld1Y4b2R1SkpxMExcIlxuICAvLyAgIH1cbiAgLy8gKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdW5cbiJdfQ==
