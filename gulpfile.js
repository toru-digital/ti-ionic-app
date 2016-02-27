var gulp      = require ('gulp');
var sass      = require ('gulp-sass');
var minifyCss = require ('gulp-minify-css');
var yargs     = require ('yargs');
var rename    = require ('gulp-rename');

require ('./www/lib/ti-ionic/gulp-tasks/scripts')(gulp, yargs.argv);

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
  ['ti-watch'],
  function () {
    gulp.watch (
      [
        './scss/**/*.scss'
      ],
      ['sass']
    );
  }
);

// var paths = [
//   './www/lib/ti-ionic/src/**/*.js',
//   './www/lib/ti-ionic/src/**/*.tpl.html'
// ];
// // gulp.watch(paths.tiIonic, ['ti-ionic']); , 'ti-sass'
