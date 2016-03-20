'use strict'

require ('angular')
require ('ionic')

require ('./modules/dashboard/dashboard')
require ('./modules/home/home')

/* 'ti-ionic' */

module.exports = angular.module ('my-app', [
  'ionic',
  'dashboard',
  'home',
])
.config (require ('./router'))
.run (require ('./run'))
