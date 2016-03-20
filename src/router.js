'use strict'

let Router = function ($stateProvider,
  $urlRouterProvider) {

  $urlRouterProvider.otherwise ('/app/home/index')
  $stateProvider.state (
    'app', {
      url : '/app',
      abstract : true,
      template : '<ion-nav-view></ion-nav-view>',
    }
  )
}

module.exports = [ '$stateProvider', '$urlRouterProvider', Router ]
