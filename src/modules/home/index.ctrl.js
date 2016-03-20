angular.module ('ti-ionic-app.home')

.controller (
	'IndexCtrl',
	function ($scope, $tiToast) {

  // $tiAuth
  // $scope.signout = function ($) {
  // 	console.log ("I'M HERE");
  //   $tiAuth.signout ();
  // };

  $scope.toast = function () {
    $tiToast.say ('HELLO')
  }
}
)
