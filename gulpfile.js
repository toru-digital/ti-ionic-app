var gulp = require ('gulp');
var sass = require ('gulp-sass');
var minifyCss = require ('gulp-minify-css');
var yargs = require ('yargs').argv;

var paths = {
  sass: [
    './scss/**/*.scss',
    './www/lib/ti-ionic/**/*.scss',
  ],
  tiIonic: [
    './www/lib/ti-ionic/src/**/*.js',
    './www/lib/ti-ionic/src/**/*.tpl.html'
  ]
};

var IS_RELEASE_BUILD  = yargs.r || yargs.release;

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe (minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('ti-sass', function(done) {
  gulp.src('./scss/ti-ionic.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/lib/ti-ionic/dist'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass', 'ti-sass']);
  // gulp.watch(paths.tiIonic, ['ti-ionic']);
});

// gulp.task (
//   'ti-sass',
//   function (done) {
//     gulp.src (tiBasePath + "src/scss/ti-ionic.scss")
//       .pipe (sass ().on ('error', sass.logError))
//       .pipe (gulp.dest (tiBasePath + 'dist'))
//       .pipe (gulpif (IS_RELEASE_BUILD, autoprefixer ()))
//       .pipe (gulpif (IS_RELEASE_BUILD, minifyCss ()))
//       .pipe (rename ({ extname: '.min.css' }))
//       .pipe (gulp.dest (tiBasePath + 'dist'))
//       .on ('end', done)
//       .pipe (livereload ());
// });


// function getTask (task) {
//   return require ('./www/lib/ti-ionic/scripts/' + task)(gulp, plugins);
// }

  //
  //
  // need to add a task to build and minify.
  //
  // was in ti-html
  //   .pipe (minifyHtml ({empty: true, spare: true, quotes: true}))
  //
  // was in ti-js
  //   .pipe (uglify ({mangle: true}))
  //   .pipe (rename ({ extname: '.min.js' }))
  //   .pipe (gulp.dest (basepath + "dist"))
  //
  // was in ti-sass
  //   .pipe (minifyCss ({ keepSpecialComments: 0 }))
  //   .pipe (rename ({ extname: '.min.css' }))
  //   .pipe (gulp.dest('./www/css/'))
  //
  // gulp.task (
  //   'ti-ionic-production', [ 'ti-scripts', 'ti-sass', 'ti-clean']
  // );
  //
