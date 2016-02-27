var gulp      = require ('gulp');
var sass      = require ('gulp-sass');
var minifyCss = require ('gulp-minify-css');
var yargs     = require ('yargs').argv;
var rename    = require ('gulp-rename');
var gulpif    = require ('gulp-if');

require ('./www/lib/ti-ionic/gulp-tasks/scripts')(gulp, yargs);
var IS_RELEASE_BUILD  = yargs.r || yargs.release;

gulp.task (
  'sass',
  function () {
    return gulp.src ('./scss/ionic.app.scss')
      .pipe (sass ())
      .on ('error', sass.logError)
      .pipe (gulp.dest ('./www/css/'))
      .pipe (gulpif (IS_RELEASE_BUILD, minifyCss ({keepSpecialComments: 0})))
      .pipe (rename ({extname: '.min.css'}))
      .pipe (gulp.dest ('./www/css/'));
  });

gulp.task (
  'watch',
  ['ti-watch'],
  function () {
    gulp.watch ( ['./scss/**/*.scss'], ['sass'] );
  }
);
