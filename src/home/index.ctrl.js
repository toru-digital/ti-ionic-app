angular.module ('ti-ionic-app.home')

.controller (
	"IndexCtrl",
	function ($scope, $tiAuth) {
    $scope.signout = function ($) {
      $tiAuth.signout ();
    };
  }
);
