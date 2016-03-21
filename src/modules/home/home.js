'use-strict'

module.exports = angular.module ('my-app.home', [ 'ti-ionic.utils' ])
  .config (require ('./router'))
  .controller ('HomeController', require ('./home-controller'))
