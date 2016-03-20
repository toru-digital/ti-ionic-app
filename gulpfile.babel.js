var gulp        = require ('gulp')
var concat      = require ('gulp-concat')
var gulpif      = require ('gulp-if')
var minifyCss   = require ('gulp-minify-css')
var ngHtml2Js   = require ('gulp-ng-html2js')
var rename      = require ('gulp-rename')
var eslint      = require ('gulp-eslint')
var sass        = require ('gulp-sass')
var sort        = require ('gulp-sort')
var stripDebug  = require ('gulp-strip-debug')
var uglify      = require ('gulp-uglify')
var yargs       = require ('yargs').argv

const isRelease = yargs.r || yargs.release
require ('./www/lib/ti-ionic/gulp-tasks/main') (gulp, isRelease)

gulp.task (
  'sass',
  function () {
    return gulp.src ('./src/ti-ionic-app.scss')
      .pipe (sass ())
      .on ('error', sass.logError)
      .pipe (gulp.dest ('./www/css/'))
      .pipe (gulpif (isRelease, minifyCss ({ keepSpecialComments : 0 })))
      .pipe (rename ({ extname : '.min.css' }))
      .pipe (gulp.dest ('./www/css/'))
  }
)

gulp.task (
  'html',
  function () {
    return gulp
      .src ('./src/**/*.tpl.html')
      .pipe (ngHtml2Js ({ moduleName : 'ti-ionic-app-templates' }))
      .pipe (concat ('templates.js'))
      .pipe (gulp.dest ('./tmp'))
  }
)

gulp.task (
  'js',
  function () {
    return gulp
      .src ('./src/**/*.js')
      .pipe (sort ())
      .pipe (gulpif (isRelease, stripDebug ()))
      .pipe (eslint ())
      .pipe (eslint.format ())
      .pipe (concat ('script.js'))
      .pipe (gulp.dest ('./tmp'))
  }
)

gulp.task (
  'scripts',
  [ 'html', 'js' ],
  function () {
    return gulp
      .src ([ './tmp/templates.js', './tmp/script.js' ])
        .pipe (concat ('ti-ionic-app.js'))
        .pipe (gulp.dest ('./www/js'))
        .pipe (gulpif (isRelease, uglify ()))
        .pipe (rename ({ extname : '.min.js' }))
        .pipe (gulp.dest ('./www/js'))
  }
)

gulp.task (
  'watch',
  [ 'ti-watch' ],
  function () {
    gulp.watch (
      [
        './src/**/*.js',
        './src/**/*.tpl.html',
      ],
      [ 'scripts' ]
    )

    gulp.watch (
      [ './src/**/*.scss' ],
      [ 'sass' ]
    )
  }
)
