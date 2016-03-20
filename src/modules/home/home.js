'use-strict'

module.exports = angular.module ('my-app.home', [])
  .controller ('HomeController', require ('./home-controller'))
  .config (require ('./router'))
