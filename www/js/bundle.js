(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import ionic from 'ionic'

// import dashboard from './modules/dashboard/dashboard'
// import home from './modules/home/home'
// ionic,
// dashboard,
// home,
/* 'ti-ionic' */

module.exports = angular.module('my-app', ['ionic']).config(require('./router')).run(require('./run'));

},{"./router":2,"./run":3}],2:[function(require,module,exports){
'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider1, $urlRouterProvider1) {
  console.log($stateProvider1, $urlRouterProvider1);
}];

//
// $urlRouterProvider.otherwise ('/app/home/index')
// $stateProvider.state (
//   'app', {
//     url : '/app',
//     abstract : true,
//     template : '<ion-nav-view></ion-nav-view>',
//   }
// )

},{}],3:[function(require,module,exports){
'use strict';

module.exports = function () {};

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9yb3V0ZXIuanMiLCJzcmMvcnVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUNVQSxPQUFPLE9BQVAsR0FBaUIsUUFBUSxNQUFSLENBQWdCLFFBQWhCLEVBQTBCLENBQUUsT0FBRixDQUExQixFQUNkLE1BRGMsQ0FDTixRQUFTLFVBQVQsQ0FETSxFQUVkLEdBRmMsQ0FFVCxRQUFTLE9BQVQsQ0FGUyxDQUFqQjs7O0FDVkE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLENBQUUsZ0JBQUYsRUFBb0Isb0JBQXBCLEVBQTBDLFVBQVUsZUFBVixFQUEyQixtQkFBM0IsRUFBZ0Q7QUFDekcsVUFBUSxHQUFSLENBQWEsZUFBYixFQUE4QixtQkFBOUIsRUFEeUc7Q0FBaEQsQ0FBM0Q7Ozs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsWUFBWSxFQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gaW1wb3J0IGlvbmljIGZyb20gJ2lvbmljJ1xuXG4vLyBpbXBvcnQgZGFzaGJvYXJkIGZyb20gJy4vbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkJ1xuLy8gaW1wb3J0IGhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUvaG9tZSdcbi8vIGlvbmljLFxuLy8gZGFzaGJvYXJkLFxuLy8gaG9tZSxcbi8qICd0aS1pb25pYycgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAoJ215LWFwcCcsIFsgJ2lvbmljJyBdKVxuICAuY29uZmlnIChyZXF1aXJlICgnLi9yb3V0ZXInKSlcbiAgLnJ1biAocmVxdWlyZSAoJy4vcnVuJykpXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBbICckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIxLCAkdXJsUm91dGVyUHJvdmlkZXIxKSB7XG4gIGNvbnNvbGUubG9nICgkc3RhdGVQcm92aWRlcjEsICR1cmxSb3V0ZXJQcm92aWRlcjEpXG59LCBdXG5cbi8vXG4vLyAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICgnL2FwcC9ob21lL2luZGV4Jylcbi8vICRzdGF0ZVByb3ZpZGVyLnN0YXRlIChcbi8vICAgJ2FwcCcsIHtcbi8vICAgICB1cmwgOiAnL2FwcCcsXG4vLyAgICAgYWJzdHJhY3QgOiB0cnVlLFxuLy8gICAgIHRlbXBsYXRlIDogJzxpb24tbmF2LXZpZXc+PC9pb24tbmF2LXZpZXc+Jyxcbi8vICAgfVxuLy8gKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xufVxuXG4vLyAkdGlBdXRoXG4vLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuLy8gICAndGktY21zJyxcbi8vICAgeyAnYXBpJyA6IFwiaHR0cDovL3NlYWxlZGFpcmRpZ2l0YWwuY29tL2RpdmV4cHJlc3MvYXBpL3dlYi92MF8xMFwiIH1cbi8vICk7XG4vL1xuLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbi8vICAgJ2dvb2dsZScsXG4vLyAgIHtcbi8vICAgICBjbGllbnRJZCA6IFwiMTA1MTAxMjQ2ODM3Mi05YTNzajBjNHA0MWJua2N2bWZ0Z29xYWE1N2YyOTB2Zi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4vLyAgIH1cbi8vICk7XG4vL1xuLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbi8vICAgJ2xpbmtlZGluJ1xuLy8gICB7XG4vLyAgICAgY2xpZW50SWQgOiBcIjc3YTBjbDN6c3lpZTc2XCIsXG4vLyAgICAgY2xpZW50U2VjcmV0IDogXCJEenBqMEN6Sm5UdW0zdHRZXCJcbi8vICAgfVxuLy8gKTtcbi8vXG4vLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuLy8gICAndHdpdHRlcicsXG4vLyAgIHtcbi8vICAgICBjb25zdW1lcktleSA6IFwiT1d5Z2tvUjlocUQwMmcxV0tGNFFCcnFPTVwiLFxuLy8gICAgIGNvbnN1bWVyU2VjcmV0S2V5IDogXCJWT1I4NVk0WlhjeTVEY2ZBc0M3Q0dtUmxIQ29HZFRzY25iRDZ6NWV3VjhvZHVKSnEwTFwiXG4vLyAgIH1cbi8vICk7XG4iXX0=
