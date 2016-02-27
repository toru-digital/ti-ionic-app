var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var yargs = require ('yargs').argv;
var ngHtml2Js = require ("gulp-ng-html2js");
var sort = require ('gulp-sort');
var gulpif = require ('gulp-if');
var stripDebug = require ('gulp-strip-debug');
var jshint = require ('gulp-jshint');
var stylish = require ('jshint-stylish');
var uglify = require ('gulp-uglify');

var paths = {
  sass: [
    './scss/**/*.scss',
    './www/lib/ti-ionic/**/*.scss',
  ],
  tiIonic: [
    './www/lib/ti-ionic/src/**/*.*',
  ]
};

var IS_RELEASE_BUILD  = yargs.r || yargs.release;
if (IS_RELEASE_BUILD) {
  gutil.log (
    gutil.colors.green('--release:'),
    'Building release version (minified, debugs stripped)...'
  );
}

gulp.task ('default', ['sass']);

gulp.task (
  'ti-html',
  function () {
    return gulp
      .src ("./www/lib/ti-ionic/src/**/*.tpl.html")
      .pipe (ngHtml2Js ({moduleName: "ti-ionic-templates" }))
      .pipe (concat ("templates.js"))
      .pipe (gulp.dest ("./www/lib/ti-ionic/tmp"));
  }
);

gulp.task (
  'ti-js',
  function () {
    return gulp
      .src ("./www/lib/ti-ionic/src/**/*.js")
      .pipe (sort ())
      .pipe (gulpif (IS_RELEASE_BUILD, stripDebug ()))
      .pipe (jshint ())
      .pipe (jshint.reporter (stylish))
      .pipe (jshint.reporter ('fail'))
      .pipe (concat ('script.js'))
      .pipe (gulp.dest ('./www/lib/ti-ionic/tmp'));
  }
);

gulp.task (
  'ti-ionic',
  ['ti-html', 'ti-js'],
  function () {
    return gulp
      .src ([
        "./www/lib/ti-ionic/tmp/templates.js",
        "./www/lib/ti-ionic/tmp/script.js",
        "./www/lib/ti-ionic/lib/sha1.js"
      ])
        .pipe (concat ('ti-ionic.js'))
        .pipe (gulp.dest ('./www/lib/ti-ionic/dist'))
        .pipe (gulpif (IS_RELEASE_BUILD, uglify ()))
        .pipe (rename ({ extname: '.min.js' }))
        .pipe (gulp.dest ('./www/lib/ti-ionic/dist'));
  }
);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.tiIonic, ['ti-ionic']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
