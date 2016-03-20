'use strict'

var angular = require ('angular')

// import ionic from 'ionic'

// import dashboard from './modules/dashboard/dashboard'
// import home from './modules/home/home'
// ionic,
// dashboard,
// home,
/* 'ti-ionic' */

module.exports = angular.module ('my-app', [ 'ngRoute' ])
  .config (require ('./router'))
  .run (require ('./run'))
