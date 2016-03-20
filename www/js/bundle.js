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

var Router = function Router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/home/index');
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    template: '<ion-nav-view></ion-nav-view>'
  });
};

module.exports = ['$stateProvider', '$urlRouterProvider', Router];

},{}],3:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9yb3V0ZXIuanMiLCJzcmMvcnVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUNVQSxPQUFPLE9BQVAsR0FBaUIsUUFBUSxNQUFSLENBQWdCLFFBQWhCLEVBQTBCLENBQUUsT0FBRixDQUExQixFQUNkLE1BRGMsQ0FDTixRQUFTLFVBQVQsQ0FETSxFQUVkLEdBRmMsQ0FFVCxRQUFTLE9BQVQsQ0FGUyxDQUFqQjs7O0FDVkE7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFVLGNBQVYsRUFDWCxrQkFEVyxFQUNTOztBQUVwQixxQkFBbUIsU0FBbkIsQ0FBOEIsaUJBQTlCLEVBRm9CO0FBR3BCLGlCQUFlLEtBQWYsQ0FDRSxLQURGLEVBQ1M7QUFDTCxTQUFNLE1BQU47QUFDQSxjQUFXLElBQVg7QUFDQSxjQUFXLCtCQUFYO0dBSkosRUFIb0I7Q0FEVDs7QUFhYixPQUFPLE9BQVAsR0FBaUIsQ0FBRSxnQkFBRixFQUFvQixvQkFBcEIsRUFBMEMsTUFBMUMsQ0FBakI7OztBQ2ZBOztBQUVBLElBQUksTUFBTSxTQUFOLEdBQU0sR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBWjs7QUErQlYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLy8gaW1wb3J0IGlvbmljIGZyb20gJ2lvbmljJ1xuXG4vLyBpbXBvcnQgZGFzaGJvYXJkIGZyb20gJy4vbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkJ1xuLy8gaW1wb3J0IGhvbWUgZnJvbSAnLi9tb2R1bGVzL2hvbWUvaG9tZSdcbi8vIGlvbmljLFxuLy8gZGFzaGJvYXJkLFxuLy8gaG9tZSxcbi8qICd0aS1pb25pYycgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSAoJ215LWFwcCcsIFsgJ2lvbmljJyBdKVxuICAuY29uZmlnIChyZXF1aXJlICgnLi9yb3V0ZXInKSlcbiAgLnJ1biAocmVxdWlyZSAoJy4vcnVuJykpXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFJvdXRlciA9IGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcixcbiAgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAoJy9hcHAvaG9tZS9pbmRleCcpXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlIChcbiAgICAnYXBwJywge1xuICAgICAgdXJsIDogJy9hcHAnLFxuICAgICAgYWJzdHJhY3QgOiB0cnVlLFxuICAgICAgdGVtcGxhdGUgOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nLFxuICAgIH1cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIFJvdXRlciBdXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gJHRpQXV0aFxuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICd0aS1jbXMnLFxuICAvLyAgIHsgJ2FwaScgOiBcImh0dHA6Ly9zZWFsZWRhaXJkaWdpdGFsLmNvbS9kaXZleHByZXNzL2FwaS93ZWIvdjBfMTBcIiB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ2dvb2dsZScsXG4gIC8vICAge1xuICAvLyAgICAgY2xpZW50SWQgOiBcIjEwNTEwMTI0NjgzNzItOWEzc2owYzRwNDFibmtjdm1mdGdvcWFhNTdmMjkwdmYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAvLyAgIH1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAnbGlua2VkaW4nXG4gIC8vICAge1xuICAvLyAgICAgY2xpZW50SWQgOiBcIjc3YTBjbDN6c3lpZTc2XCIsXG4gIC8vICAgICBjbGllbnRTZWNyZXQgOiBcIkR6cGowQ3pKblR1bTN0dFlcIlxuICAvLyAgIH1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAndHdpdHRlcicsXG4gIC8vICAge1xuICAvLyAgICAgY29uc3VtZXJLZXkgOiBcIk9XeWdrb1I5aHFEMDJnMVdLRjRRQnJxT01cIixcbiAgLy8gICAgIGNvbnN1bWVyU2VjcmV0S2V5IDogXCJWT1I4NVk0WlhjeTVEY2ZBc0M3Q0dtUmxIQ29HZFRzY25iRDZ6NWV3VjhvZHVKSnEwTFwiXG4gIC8vICAgfVxuICAvLyApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1blxuIl19
