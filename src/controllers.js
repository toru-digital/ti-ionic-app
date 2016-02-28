angular.module ('ti-ionic-app', [])

.controller (
  'DashCtrl',
  function ($scope) {}
)

.controller (
  'AccountCtrl',
  function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
);
