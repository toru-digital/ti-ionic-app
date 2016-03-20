'use strict'

let router = function ($stateProvider1, $urlRouterProvider1) {
  console.log ($stateProvider1, $urlRouterProvider1)
}

module.exports = [ '$stateProvider', '$urlRouterProvider', router ]

//
// $urlRouterProvider.otherwise ('/app/home/index')
// $stateProvider.state (
//   'app', {
//     url : '/app',
//     abstract : true,
//     template : '<ion-nav-view></ion-nav-view>',
//   }
// )
