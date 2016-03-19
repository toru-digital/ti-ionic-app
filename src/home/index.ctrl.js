angular.module ('ti-ionic-app.home')

.controller (
	"IndexCtrl",
	function ($scope) {

		// $tiAuth
    // $scope.signout = function ($) {
		// 	console.log ("I'M HERE");
    //   $tiAuth.signout ();
    // };

		$scope.toast = function () {
			console.log ("HELLO");
		}
  }
);
