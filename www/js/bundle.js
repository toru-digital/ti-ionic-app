(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/dashboard/dashboard');
require('./modules/home/home');

module.exports = angular.module('my-app', ['ionic', 'my-app.dashboard', 'my-app.home']).config(require('./router')).run(require('./run'));

},{"./modules/dashboard/dashboard":2,"./modules/home/home":3,"./router":4,"./run":5}],2:[function(require,module,exports){
'use strict';
'use-strict';

module.exports = angular.module('my-app.dashboard', []);

},{}],3:[function(require,module,exports){
'use strict';

module.exports = angular.module('my-app.home', []);

// 'ti-ionic.utils'

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzcmMvbW9kdWxlcy9ob21lL2hvbWUuanMiLCJzcmMvcm91dGVyLmpzIiwic3JjL3J1bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0EsUUFBUywrQkFBVDtBQUNBLFFBQVMscUJBQVQ7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixRQUFoQixFQUEwQixDQUN6QyxPQUR5QyxFQUNoQyxrQkFEZ0MsRUFDWixhQURZLENBQTFCLEVBRWQsTUFGYyxDQUVOLFFBQVMsVUFBVCxDQUZNLEVBR2QsR0FIYyxDQUdULFFBQVMsT0FBVCxDQUhTLENBQWpCOzs7O0FDSkE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixrQkFBaEIsRUFBb0MsRUFBcEMsQ0FBakI7Ozs7O0FDRkEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixhQUFoQixFQUErQixFQUEvQixDQUFqQjs7Ozs7QUNBQTs7QUFFQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQVUsY0FBVixFQUNYLGtCQURXLEVBQ1M7O0FBRXBCLHFCQUFtQixTQUFuQixDQUE4QixpQkFBOUIsRUFGb0I7QUFHcEIsaUJBQWUsS0FBZixDQUNFLEtBREYsRUFDUztBQUNMLFNBQU0sTUFBTjtBQUNBLGNBQVcsSUFBWDtBQUNBLGNBQVcsK0JBQVg7R0FKSixFQUhvQjtDQURUOztBQWFiLE9BQU8sT0FBUCxHQUFpQixDQUFFLGdCQUFGLEVBQW9CLG9CQUFwQixFQUEwQyxNQUExQyxDQUFqQjs7O0FDZkE7O0FBRUEsSUFBSSxNQUFNLFNBQU4sR0FBTSxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFaOztBQStCVixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5yZXF1aXJlICgnLi9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQnKVxucmVxdWlyZSAoJy4vbW9kdWxlcy9ob21lL2hvbWUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwJywgW1xuICAnaW9uaWMnLCAnbXktYXBwLmRhc2hib2FyZCcsICdteS1hcHAuaG9tZScsXG5dKS5jb25maWcgKHJlcXVpcmUgKCcuL3JvdXRlcicpKVxuICAucnVuIChyZXF1aXJlICgnLi9ydW4nKSlcbiIsIid1c2Utc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwLmRhc2hib2FyZCcsIFtdKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAoJ215LWFwcC5ob21lJywgW10pXG5cbi8vICd0aS1pb25pYy51dGlscydcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgUm91dGVyID0gZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLFxuICAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICgnL2FwcC9ob21lL2luZGV4JylcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUgKFxuICAgICdhcHAnLCB7XG4gICAgICB1cmwgOiAnL2FwcCcsXG4gICAgICBhYnN0cmFjdCA6IHRydWUsXG4gICAgICB0ZW1wbGF0ZSA6ICc8aW9uLW5hdi12aWV3PjwvaW9uLW5hdi12aWV3PicsXG4gICAgfVxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gWyAnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgUm91dGVyIF1cbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgUnVuID0gZnVuY3Rpb24gKCkge1xuICAvLyAkdGlBdXRoXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ3RpLWNtcycsXG4gIC8vICAgeyAnYXBpJyA6IFwiaHR0cDovL3NlYWxlZGFpcmRpZ2l0YWwuY29tL2RpdmV4cHJlc3MvYXBpL3dlYi92MF8xMFwiIH1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAnZ29vZ2xlJyxcbiAgLy8gICB7XG4gIC8vICAgICBjbGllbnRJZCA6IFwiMTA1MTAxMjQ2ODM3Mi05YTNzajBjNHA0MWJua2N2bWZ0Z29xYWE1N2YyOTB2Zi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gIC8vICAgfVxuICAvLyApO1xuICAvL1xuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICdsaW5rZWRpbidcbiAgLy8gICB7XG4gIC8vICAgICBjbGllbnRJZCA6IFwiNzdhMGNsM3pzeWllNzZcIixcbiAgLy8gICAgIGNsaWVudFNlY3JldCA6IFwiRHpwajBDekpuVHVtM3R0WVwiXG4gIC8vICAgfVxuICAvLyApO1xuICAvL1xuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICd0d2l0dGVyJyxcbiAgLy8gICB7XG4gIC8vICAgICBjb25zdW1lcktleSA6IFwiT1d5Z2tvUjlocUQwMmcxV0tGNFFCcnFPTVwiLFxuICAvLyAgICAgY29uc3VtZXJTZWNyZXRLZXkgOiBcIlZPUjg1WTRaWGN5NURjZkFzQzdDR21SbEhDb0dkVHNjbmJENno1ZXdWOG9kdUpKcTBMXCJcbiAgLy8gICB9XG4gIC8vICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVuXG4iXX0=
