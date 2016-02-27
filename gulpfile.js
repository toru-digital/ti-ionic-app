var gulp      = require ('gulp');
var sass      = require ('gulp-sass');
var minifyCss = require ('gulp-minify-css');
var yargs     = require ('yargs').argv;
var rename    = require ('gulp-rename');

var IS_RELEASE_BUILD  = yargs.r || yargs.release;

gulp.task (
  'sass',
  function (done) {
    gulp.src ('./scss/ionic.app.scss')
      .pipe (sass ())
      .on ('error', sass.logError)
      .pipe (minifyCss ({keepSpecialComments: 0}))
      .pipe (rename ({extname: '.min.css'}))
      .pipe (gulp.dest ('./www/css/'))
      .on ('end', done);
  });

gulp.task (
  'watch',
  function () {
    gulp.watch (
      [
        './scss/**/*.scss',
        './www/lib/ti-ionic/**/*.scss'
      ],
      ['sass']
    );
  }
);
