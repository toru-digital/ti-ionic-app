(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/dashboard/dashboard');
require('./modules/home/home');

module.exports = angular.module('my-app', ['ionic', 'my-app.dashboard', 'my-app.home']).config(require('./router')).run(require('./run'));

},{"./modules/dashboard/dashboard":2,"./modules/home/home":4,"./router":6,"./run":7}],2:[function(require,module,exports){
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
'use strict';
'use-strict';

module.exports = angular.module('my-app.home', []).controller('HomeController', require('./home-controller')).config(require('./router'));

},{"./home-controller":3,"./router":5}],5:[function(require,module,exports){
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
    url: '/index',
    controller: 'HomeController',
    cpmtrollerAs: '$home',
    template: '<div>!</div>'
  });
};

module.exports = ['$stateProvider', Router];

// templateUrl : 'home/index.tpl.html',

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuanMiLCJzcmMvbW9kdWxlcy9ob21lL2hvbWUtY29udHJvbGxlci5qcyIsInNyYy9tb2R1bGVzL2hvbWUvaG9tZS5qcyIsInNyYy9tb2R1bGVzL2hvbWUvcm91dGVyLmpzIiwic3JjL3JvdXRlci5qcyIsInNyYy9ydW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLFFBQVMsK0JBQVQ7QUFDQSxRQUFTLHFCQUFUOztBQUVBLE9BQU8sT0FBUCxHQUFpQixRQUFRLE1BQVIsQ0FBZ0IsUUFBaEIsRUFBMEIsQ0FDekMsT0FEeUMsRUFDaEMsa0JBRGdDLEVBQ1osYUFEWSxDQUExQixFQUVkLE1BRmMsQ0FFTixRQUFTLFVBQVQsQ0FGTSxFQUdkLEdBSGMsQ0FHVCxRQUFTLE9BQVQsQ0FIUyxDQUFqQjs7OztBQ0pBOztBQUVBLE9BQU8sT0FBUCxHQUFpQixRQUFRLE1BQVIsQ0FBZ0Isa0JBQWhCLEVBQW9DLEVBQXBDLENBQWpCOzs7OztBQ0ZBLFNBQVMsY0FBVCxHQUEyQjtBQUN6QixVQUFRLEdBQVIsQ0FBYSxPQUFiOzs7Ozs7Ozs7Ozs7O0NBREY7QUFBMkI7QUFpQjNCLE9BQU8sT0FBUCxHQUFpQixDQUFFLGNBQUYsQ0FBakI7Ozs7QUNqQkE7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLFFBQVEsTUFBUixDQUFnQixhQUFoQixFQUErQixFQUEvQixFQUNkLFVBRGMsQ0FDRixnQkFERSxFQUNnQixRQUFTLG1CQUFULENBRGhCLEVBRWQsTUFGYyxDQUVOLFFBQVMsVUFBVCxDQUZNLENBQWpCOzs7QUNGQTs7QUFFQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQVUsY0FBVixFQUEwQjtBQUNyQyxpQkFBZSxLQUFmLENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLFNBQU0sT0FBTjtBQUNBLGNBQVcsSUFBWDtBQUNBLGNBQVcsK0JBQVg7O0dBSEY7Ozs7QUFXQyxPQVhELENBV1EsZ0JBWFIsRUFXMEI7QUFDeEIsU0FBTSxRQUFOO0FBQ0EsZ0JBQWEsZ0JBQWI7QUFDQSxrQkFBZSxPQUFmO0FBQ0EsY0FBVyxjQUFYO0dBZkYsRUFEcUM7Q0FBMUI7O0FBb0JiLE9BQU8sT0FBUCxHQUFpQixDQUFFLGdCQUFGLEVBQW9CLE1BQXBCLENBQWpCOzs7OztBQ3RCQTs7QUFFQSxJQUFJLFNBQVMsU0FBVCxNQUFTLENBQVUsY0FBVixFQUNYLGtCQURXLEVBQ1M7O0FBRXBCLHFCQUFtQixTQUFuQixDQUE4QixpQkFBOUIsRUFGb0I7QUFHcEIsaUJBQWUsS0FBZixDQUNFLEtBREYsRUFDUztBQUNMLFNBQU0sTUFBTjtBQUNBLGNBQVcsSUFBWDtBQUNBLGNBQVcsK0JBQVg7R0FKSixFQUhvQjtDQURUOztBQWFiLE9BQU8sT0FBUCxHQUFpQixDQUFFLGdCQUFGLEVBQW9CLG9CQUFwQixFQUEwQyxNQUExQyxDQUFqQjs7O0FDZkE7O0FBRUEsSUFBSSxNQUFNLFNBQU4sR0FBTSxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFaOztBQStCVixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5yZXF1aXJlICgnLi9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQnKVxucmVxdWlyZSAoJy4vbW9kdWxlcy9ob21lL2hvbWUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwJywgW1xuICAnaW9uaWMnLCAnbXktYXBwLmRhc2hib2FyZCcsICdteS1hcHAuaG9tZScsXG5dKS5jb25maWcgKHJlcXVpcmUgKCcuL3JvdXRlcicpKVxuICAucnVuIChyZXF1aXJlICgnLi9ydW4nKSlcbiIsIid1c2Utc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwLmRhc2hib2FyZCcsIFtdKVxuIiwiZnVuY3Rpb24gSG9tZUNvbnRyb2xsZXIgKCkge1xuICBjb25zb2xlLmxvZyAoJ0hFTExPJylcblxuICAvLyAkdGlBdXRoXG4gIC8vLCAkdGlUb2FzdFxuICAvLyAkc2NvcGVcbiAgLy8gJHNjb3BlLnNpZ25vdXQgPSBmdW5jdGlvbiAoJCkge1xuICAvLyBcdGNvbnNvbGUubG9nIChcIkknTSBIRVJFXCIpO1xuICAvLyAgICR0aUF1dGguc2lnbm91dCAoKTtcbiAgLy8gfTtcblxuICAvLyAkc2NvcGUudG9hc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICAgJHRpVG9hc3Quc2F5ICgnSEVMTE8nKVxuICAvLyB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBbIEhvbWVDb250cm9sbGVyIF1cbiIsIid1c2Utc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlICgnbXktYXBwLmhvbWUnLCBbXSlcbiAgLmNvbnRyb2xsZXIgKCdIb21lQ29udHJvbGxlcicsIHJlcXVpcmUgKCcuL2hvbWUtY29udHJvbGxlcicpKVxuICAuY29uZmlnIChyZXF1aXJlICgnLi9yb3V0ZXInKSlcbiIsIid1c2Ugc3RyaWN0J1xuXG5sZXQgUm91dGVyID0gZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlICgnYXBwLmhvbWUnLCB7XG4gICAgdXJsIDogJy9ob21lJyxcbiAgICBhYnN0cmFjdCA6IHRydWUsXG4gICAgdGVtcGxhdGUgOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nLFxuXG4gICAgLy8gVVNFUl9ST0xFU1xuICAgIC8vZGF0YSA6IHtcbiAgICAvLyAgIHJvbGUgOiBVU0VSX1JPTEVTLnVzZXJcbiAgICAvLyB9XG4gIH0pXG5cbiAgLnN0YXRlICgnYXBwLmhvbWUuaW5kZXgnLCB7XG4gICAgdXJsIDogJy9pbmRleCcsXG4gICAgY29udHJvbGxlciA6ICdIb21lQ29udHJvbGxlcicsXG4gICAgY3BtdHJvbGxlckFzIDogJyRob21lJyxcbiAgICB0ZW1wbGF0ZSA6ICc8ZGl2PiE8L2Rpdj4nLFxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsgJyRzdGF0ZVByb3ZpZGVyJywgUm91dGVyIF1cblxuLy8gdGVtcGxhdGVVcmwgOiAnaG9tZS9pbmRleC50cGwuaHRtbCcsXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFJvdXRlciA9IGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcixcbiAgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAoJy9hcHAvaG9tZS9pbmRleCcpXG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlIChcbiAgICAnYXBwJywge1xuICAgICAgdXJsIDogJy9hcHAnLFxuICAgICAgYWJzdHJhY3QgOiB0cnVlLFxuICAgICAgdGVtcGxhdGUgOiAnPGlvbi1uYXYtdmlldz48L2lvbi1uYXYtdmlldz4nLFxuICAgIH1cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFsgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIFJvdXRlciBdXG4iLCIndXNlIHN0cmljdCdcblxubGV0IFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gJHRpQXV0aFxuICAvLyAkdGlBdXRoLmFkZFNlcnZpY2UgKFxuICAvLyAgICd0aS1jbXMnLFxuICAvLyAgIHsgJ2FwaScgOiBcImh0dHA6Ly9zZWFsZWRhaXJkaWdpdGFsLmNvbS9kaXZleHByZXNzL2FwaS93ZWIvdjBfMTBcIiB9XG4gIC8vICk7XG4gIC8vXG4gIC8vICR0aUF1dGguYWRkU2VydmljZSAoXG4gIC8vICAgJ2dvb2dsZScsXG4gIC8vICAge1xuICAvLyAgICAgY2xpZW50SWQgOiBcIjEwNTEwMTI0NjgzNzItOWEzc2owYzRwNDFibmtjdm1mdGdvcWFhNTdmMjkwdmYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAvLyAgIH1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAnbGlua2VkaW4nXG4gIC8vICAge1xuICAvLyAgICAgY2xpZW50SWQgOiBcIjc3YTBjbDN6c3lpZTc2XCIsXG4gIC8vICAgICBjbGllbnRTZWNyZXQgOiBcIkR6cGowQ3pKblR1bTN0dFlcIlxuICAvLyAgIH1cbiAgLy8gKTtcbiAgLy9cbiAgLy8gJHRpQXV0aC5hZGRTZXJ2aWNlIChcbiAgLy8gICAndHdpdHRlcicsXG4gIC8vICAge1xuICAvLyAgICAgY29uc3VtZXJLZXkgOiBcIk9XeWdrb1I5aHFEMDJnMVdLRjRRQnJxT01cIixcbiAgLy8gICAgIGNvbnN1bWVyU2VjcmV0S2V5IDogXCJWT1I4NVk0WlhjeTVEY2ZBc0M3Q0dtUmxIQ29HZFRzY25iRDZ6NWV3VjhvZHVKSnEwTFwiXG4gIC8vICAgfVxuICAvLyApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1blxuIl19
