'use strict'

let Router = function ($stateProvider) {
  $stateProvider.state ('app.home', {
    url : '/home',
    abstract : true,
    template : '<ion-nav-view></ion-nav-view>',

    // USER_ROLES
    //data : {
    //   role : USER_ROLES.user
    // }
  })

  .state ('app.home.index', {
    controller : 'HomeController as $home',
    templateUrl : require ('./home.html'),
    url : '/index',
  })
}

module.exports = [ '$stateProvider', Router ]
