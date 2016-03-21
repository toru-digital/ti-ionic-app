
require ('./modules/dashboard/dashboard')
require ('./modules/home/home')

module.exports = angular.module ('my-app', [
  'ionic', 'my-app.dashboard', 'my-app.home', 'templates', 'ti-ionic',
]).config (require ('./router'))
  .run (require ('./run'))
