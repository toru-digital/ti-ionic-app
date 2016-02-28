var gulp        = require ('gulp');
var concat      = require ('gulp-concat');
var gulpif      = require ('gulp-if');
var jshint      = require ('gulp-jshint');
var minifyCss   = require ('gulp-minify-css');
var ngHtml2Js   = require ("gulp-ng-html2js");
var rename      = require ('gulp-rename');
var sass        = require ('gulp-sass');
var sort        = require ('gulp-sort');
var stripDebug  = require ('gulp-strip-debug');
var stylish     = require ('jshint-stylish');
var yargs       = require ('yargs').argv;

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
  }
);

gulp.task (
  'html',
  function () {
    return gulp
      .src ("./src/**/*.tpl.html")
      .pipe (ngHtml2Js ({moduleName: "ti-ionic-app-templates" }))
      .pipe (concat ("templates.js"))
      .pipe (gulp.dest ("./tmp"));
  }
);

gulp.task (
  'js',
  function () {
    return gulp
      .src ("./src/**/*.js")
      .pipe (sort ())
      .pipe (gulpif (IS_RELEASE_BUILD, stripDebug ()))
      .pipe (jshint ())
      .pipe (jshint.reporter (stylish))
      .pipe (jshint.reporter ('fail'))
      .pipe (concat ('script.js'))
      .pipe (gulp.dest ('./tmp'));
  }
);

gulp.task (
  'watch',
  ['ti-watch'],
  function () {
    gulp.watch ( ["./src/**/*.js"], ['js'] );
    gulp.watch ( ['./scss/**/*.scss'], ['sass'] );
  }
);
