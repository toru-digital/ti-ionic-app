'use strict'

import angular from 'angular'

// import ionic from 'ionic'
// import dashboard from './modules/dashboard/dashboard'
// import home from './modules/home/home'
// ionic,
// dashboard,
// home,
/* 'ti-ionic' */

module.exports = angular.module ('my-app', [])
  .config (require ('./router'))
  .run (require ('./run'))
