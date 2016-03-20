'use strict'

require ('./home.html')

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
    url : '/index',
    controller : 'HomeController',
    cpmtrollerAs : '$home',
    templateUrl : 'home.html',
  })
}

module.exports = [ '$stateProvider', Router ]
