# ti-ionic-dev-app

This app is an example of an ionic project that is set up to be used to develop the [ti-ionic](https://github.com/toru-interactive/ti-ionic) repo.  

to set up an app to develop ti-cms...
-------------------------------------
-------------------------------------

*set your app up for sass*

    ionic setup sass

*add bower and npm dependencies*

    bower install ng-cordova-oauth ngCordova --save-dev

    npm instapp gulp --save;
    npm instapp gulp-concat --save;
    npm instapp gulp-if --save;
    npm instapp gulp-jshint --save;
    npm instapp gulp-minify-css --save;
    npm instapp gulp-ng-html2js --save;
    npm instapp gulp-rename --save;
    npm instapp gulp-sass --save;
    npm instapp gulp-strip-debug --save;
    npm instapp gulp-uglify --save;
    npm instapp gulp-util --save;
    npm instapp jshint --save;
    npm instapp jshint-stylish --save;
    npm instapp yargs --save;

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
