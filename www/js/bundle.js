(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/dashboard/dashboard');
require('./modules/home/home');

module.exports = angular.module('my-app', ['ionic', 'my-app.dashboard', 'my-app.home', 'templates']).config(require('./router')).run(require('./run'));

},{"./modules/dashboard/dashboard":2,"./modules/home/home":5,"./router":7,"./run":8}],2:[function(require,module,exports){
'use strict';
'use-strict';

module.exports = angular.module('my-app.dashboard', []);

},{}],3:[function(require,module,exports){
'use strict';

function HomeController() {
  console.log('HELLO');

  // $tiAuth
  //, $tiToast
  // $scope
  // $scope.signout = function ($) {
  // 	console.log ("I'M HERE");
  //   $tiAuth.signout ();
  // };

  // $scope.toast = function () {
  //   $tiToast.say ('HELLO')
  // }
}

module.exports = [HomeController];

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
    '      <div class="button button-calm" ng-click="toast()">\n' +
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

module.exports = angular.module('my-app.home', []).controller('HomeController', require('./home-controller')).config(require('./router'));

},{"./home-controller":3,"./router":6}],6:[function(require,module,exports){
'use strict';

require('./home.html');

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
    url: '/index',
    controller: 'HomeController',
    cpmtrollerAs: '$home',
    templateUrl: 'home.html'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzcmMvbW9kdWxlcy9ob21lL2hvbWUtY29udHJvbGxlci5qcyIsInNyYy9tb2R1bGVzL2hvbWUvaG9tZS5odG1sIiwic3JjL21vZHVsZXMvaG9tZS9ob21lLmpzIiwic3JjL21vZHVsZXMvaG9tZS9yb3V0ZXIuanMiLCJzcmMvcm91dGVyLmpzIiwic3JjL3J1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsUUFBUywrQkFBVDtBQUNBLFFBQVMscUJBQVQ7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixRQUFoQixFQUEwQixDQUN6QyxPQUR5QyxFQUNoQyxrQkFEZ0MsRUFDWixhQURZLEVBQ0csV0FESCxDQUExQixFQUVkLE1BRmMsQ0FFTixRQUFTLFVBQVQsQ0FGTSxFQUdkLEdBSGMsQ0FHVCxRQUFTLE9BQVQsQ0FIUyxDQUFqQjs7OztBQ0pBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixRQUFRLE1BQVIsQ0FBZ0Isa0JBQWhCLEVBQW9DLEVBQXBDLENBQWpCOzs7OztBQ0ZBLFNBQVMsY0FBVCxHQUEyQjtBQUN6QixVQUFRLEdBQVIsQ0FBYSxPQUFiOzs7Ozs7Ozs7Ozs7O0NBREY7QUFBMkI7QUFpQjNCLE9BQU8sT0FBUCxHQUFpQixDQUFFLGNBQUYsQ0FBakI7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2hDQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsUUFBUSxNQUFSLENBQWdCLGFBQWhCLEVBQStCLEVBQS9CLEVBQ2QsVUFEYyxDQUNGLGdCQURFLEVBQ2dCLFFBQVMsbUJBQVQsQ0FEaEIsRUFFZCxNQUZjLENBRU4sUUFBUyxVQUFULENBRk0sQ0FBakI7OztBQ0ZBOztBQUVBLFFBQVMsYUFBVDs7QUFFQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQVUsY0FBVixFQUEwQjtBQUNyQyxpQkFBZSxLQUFmLENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLFNBQU0sT0FBTjtBQUNBLGNBQVcsSUFBWDtBQUNBLGNBQVcsK0JBQVg7O0dBSEY7Ozs7QUFXQyxPQVhELENBV1EsZ0JBWFIsRUFXMEI7QUFDeEIsU0FBTSxRQUFOO0FBQ0EsZ0JBQWEsZ0JBQWI7QUFDQSxrQkFBZSxPQUFmO0FBQ0EsaUJBQWMsV0FBZDtHQWZGLEVBRHFDO0NBQTFCOztBQW9CYixPQUFPLE9BQVAsR0FBaUIsQ0FBRSxnQkFBRixFQUFvQixNQUFwQixDQUFqQjs7O0FDeEJBOztBQUVBLElBQUksU0FBUyxTQUFULE1BQVMsQ0FBVSxjQUFWLEVBQ1gsa0JBRFcsRUFDUzs7QUFFcEIscUJBQW1CLFNBQW5CLENBQThCLGlCQUE5QixFQUZvQjtBQUdwQixpQkFBZSxLQUFmLENBQ0UsS0FERixFQUNTO0FBQ0wsU0FBTSxNQUFOO0FBQ0EsY0FBVyxJQUFYO0FBQ0EsY0FBVywrQkFBWDtHQUpKLEVBSG9CO0NBRFQ7O0FBYWIsT0FBTyxPQUFQLEdBQWlCLENBQUUsZ0JBQUYsRUFBb0Isb0JBQXBCLEVBQTBDLE1BQTFDLENBQWpCOzs7QUNmQTs7QUFFQSxJQUFJLE1BQU0sU0FBTixHQUFNLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQVo7O0FBK0JWLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnJlcXVpcmUgKCcuL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZCcpXG5yZXF1aXJlICgnLi9tb2R1bGVzL2hvbWUvaG9tZScpXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgKCdteS1hcHAnLCBbXG4gICdpb25pYycsICdteS1hcHAuZGFzaGJvYXJkJywgJ215LWFwcC5ob21lJywgJ3RlbXBsYXRlcycsXG5dKS5jb25maWcgKHJlcXVpcmUgKCcuL3JvdXRlcicpKVxuICAucnVuIChyZXF1aXJlICgnLi9ydW4nKSlcbiIsIid1c2Utc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwLmRhc2hib2FyZCcsIFtdKVxuIiwiZnVuY3Rpb24gSG9tZUNvbnRyb2xsZXIgKCkge1xuICBjb25zb2xlLmxvZyAoJ0hFTExPJylcblxuICAvLyAkdGlBdXRoXG4gIC8vLCAkdGlUb2FzdFxuICAvLyAkc2NvcGVcbiAgLy8gJHNjb3BlLnNpZ25vdXQgPSBmdW5jdGlvbiAoJCkge1xuICAvLyBcdGNvbnNvbGUubG9nIChcIkknTSBIRVJFXCIpO1xuICAvLyAgICR0aUF1dGguc2lnbm91dCAoKTtcbiAgLy8gfTtcblxuICAvLyAkc2NvcGUudG9hc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICAgJHRpVG9hc3Quc2F5ICgnSEVMTE8nKVxuICAvLyB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbIEhvbWVDb250cm9sbGVyIF1cbiIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3RlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnaG9tZS5odG1sJyxcbiAgICAnPGlvbi12aWV3PlxcbicgK1xuICAgICcgIDxpb24tY29udGVudD5cXG4nICtcbiAgICAnICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nXCI+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICA8cD4kdGlUb2FzdC4uLjwvcD5cXG4nICtcbiAgICAnICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBidXR0b24tY2FsbVwiIG5nLWNsaWNrPVwidG9hc3QoKVwiPlxcbicgK1xuICAgICcgICAgICAgIHNheSBoZWxsb1xcbicgK1xuICAgICcgICAgICA8L2Rpdj5cXG4nICtcbiAgICAnXFxuJyArXG4gICAgJyAgICAgIDxicj5cXG4nICtcbiAgICAnICAgICAgPGJyPlxcbicgK1xuICAgICcgICAgICA8cD50aUJ1dHRvbi4uLjwvcD5cXG4nICtcbiAgICAnICAgICAgPHRpLWJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tY2FsbVwiPkNsaWNrPC90aS1idXR0b24+XFxuJyArXG4gICAgJ1xcbicgK1xuICAgICcgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXR0b24gYnV0dG9uLWNhbG1cIiBuZy1jbGljaz1cInNpZ25vdXQoKVwiPlxcbicgK1xuICAgICcgICAgICAgIHNpZ24gb3V0XFxuJyArXG4gICAgJyAgICAgIDwvZGl2PiAtLT5cXG4nICtcbiAgICAnICAgIDwvZGl2PlxcbicgK1xuICAgICcgIDwvaW9uLWNvbnRlbnQ+XFxuJyArXG4gICAgJzwvaW9uLXZpZXc+XFxuJyArXG4gICAgJycpO1xufV0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiaG9tZS5odG1sXCI7IiwiJ3VzZS1zdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUgKCdteS1hcHAuaG9tZScsIFtdKVxuICAuY29udHJvbGxlciAoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSAoJy4vaG9tZS1jb250cm9sbGVyJykpXG4gIC5jb25maWcgKHJlcXVpcmUgKCcuL3JvdXRlcicpKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnJlcXVpcmUgKCcuL2hvbWUuaHRtbCcpXG5cbmxldCBSb3V0ZXIgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUgKCdhcHAuaG9tZScsIHtcbiAgICB1cmwgOiAnL2hvbWUnLFxuICAgIGFic3RyYWN0IDogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSA6ICc8aW9uLW5hdi12aWV3PjwvaW9uLW5hdi12aWV3PicsXG5cbiAgICAvLyBVU0VSX1JPTEVTXG4gICAgLy9kYXRhIDoge1xuICAgIC8vICAgcm9sZSA6IFVTRVJfUk9MRVMudXNlclxuICAgIC8vIH1cbiAgfSlcblxuICAuc3RhdGUgKCdhcHAuaG9tZS5pbmRleCcsIHtcbiAgICB1cmwgOiAnL2luZGV4JyxcbiAgICBjb250cm9sbGVyIDogJ0hvbWVDb250cm9sbGVyJyxcbiAgICBjcG10cm9sbGVyQXMgOiAnJGhvbWUnLFxuICAgIHRlbXBsYXRlVXJsIDogJ2hvbWUuaHRtbCcsXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gWyAnJHN0YXRlUHJvdmlkZXInLCBSb3V0ZXIgXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBSb3V0ZXIgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsXG4gICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgKCcvYXBwL2hvbWUvaW5kZXgnKVxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSAoXG4gICAgJ2FwcCcsIHtcbiAgICAgIHVybCA6ICcvYXBwJyxcbiAgICAgIGFic3RyYWN0IDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlIDogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+JyxcbiAgICB9XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBSb3V0ZXIgXVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmxldCBSdW4gPSBmdW5jdGlvbiAoKSB7XG4gIC8vICR0aUF1dGhcbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAndGktY21zJyxcbiAgLy8gICB7ICdhcGknIDogXCJodHRwOi8vc2VhbGVkYWlyZGlnaXRhbC5jb20vZGl2ZXhwcmVzcy9hcGkvd2ViL3YwXzEwXCIgfVxuICAvLyApO1xuICAvL1xuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICdnb29nbGUnLFxuICAvLyAgIHtcbiAgLy8gICAgIGNsaWVudElkIDogXCIxMDUxMDEyNDY4MzcyLTlhM3NqMGM0cDQxYm5rY3ZtZnRnb3FhYTU3ZjI5MHZmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgLy8gICB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ2xpbmtlZGluJ1xuICAvLyAgIHtcbiAgLy8gICAgIGNsaWVudElkIDogXCI3N2EwY2wzenN5aWU3NlwiLFxuICAvLyAgICAgY2xpZW50U2VjcmV0IDogXCJEenBqMEN6Sm5UdW0zdHRZXCJcbiAgLy8gICB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ3R3aXR0ZXInLFxuICAvLyAgIHtcbiAgLy8gICAgIGNvbnN1bWVyS2V5IDogXCJPV3lna29SOWhxRDAyZzFXS0Y0UUJycU9NXCIsXG4gIC8vICAgICBjb25zdW1lclNlY3JldEtleSA6IFwiVk9SODVZNFpYY3k1RGNmQXNDN0NHbVJsSENvR2RUc2NuYkQ2ejVld1Y4b2R1SkpxMExcIlxuICAvLyAgIH1cbiAgLy8gKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdW5cbiJdfQ==
