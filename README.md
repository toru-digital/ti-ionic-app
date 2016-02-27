# ti-ionic-dev-app

This app is an example of an ionic project that is set up to be used to develop the [ti-ionic](https://github.com/toru-interactive/ti-ionic) repo.  

to set up an app to develop ti-cms...
-------------------------------------
-------------------------------------

*set your app up for sass*

    ionic setup sass

*add bower and npm dependencies*

    bower install ng-cordova-oauth ngCordova --save-dev

    npm install gulp gulp-concat gulp-if gulp-jshint gulp-minify-css gulp-ng-html2js gulp-rename gulp-sass gulp-strip-debug gulp-uglify gulp-util jshint jshint-stylish yargs --save

*replace the contents of scss.app.scss with this*

    @import "../www/lib/ti-ionic/src/scss/ti-ionic";

*in your gulpfile, require the ti-ionic tasks and pass argv to them*

    require ('./www/lib/ti-ionic/gulp-tasks/scripts')(gulp, yargs);

*Add the 'ti-wacth task to your gulp watch task'*

    gulp.task (
      'watch',
      ['ti-watch'],

      ...
    );
