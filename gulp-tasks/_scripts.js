module.exports = function (gulp, paths, isRelease) {
  gulp.task ('scripts', function () {
    let babelify = require ('babelify')
    let browserify = require ('browserify')
    let source = require ('vinyl-source-stream')
    let ngHtml2Js = require ('browserify-ng-html2js')

    return browserify ({ entries : paths.scripts.entry, debug : !isRelease })
      .transform (babelify)
      .transform (ngHtml2Js ({ extension : 'html', module : 'templates' }))
      .bundle ()
      .pipe (source ('bundle.js'))
      .pipe (gulp.dest (paths.scripts.dist))
  })
}

// [ 'ti-compile-templates' ],
// gulp.task ('html', function () {
//   let concat = require ('gulp-concat')
//   let ngHtml2Js = require ('gulp-ng-html2js')
//
//   return gulp
//     .src (paths.templates)
//     .pipe (ngHtml2Js ({ moduleName : 'ti-ionic-app-templates' }))
//     .pipe (concat ('templates.js'))
//     .pipe (gulp.dest (paths.tmp))
// })
//
// gulp.task ('js', function () {
//   let concat = require ('gulp-concat')
//   let eslint = require ('gulp-eslint')
//   let gulpif = require ('gulp-if')
//   let sort = require ('gulp-sort')
//   let stripDebug = require ('gulp-strip-debug')
//
//   return gulp
//     .src (paths.script)
//     .pipe (sort ())
//     .pipe (gulpif (isRelease, stripDebug ()))
//     .pipe (eslint ())
//     .pipe (eslint.format ())
//     .pipe (concat ('script.js'))
//     .pipe (gulp.dest (paths.tmp))
// })
//
// gulp.task ('scripts', [ 'html', 'js' ], function () {
//   let concat = require ('gulp-concat')
//   let gulpif = require ('gulp-if')
//   let rename = require ('gulp-rename')
//   let uglify = require ('gulp-uglify')
//
//   return gulp
//     .src ([ paths.tmp + '/templates.js', paths.tmp + './tmp/script.js' ])
//       .pipe (concat ('ti-ionic-app.js'))
//       .pipe (gulp.dest ('./www/js'))
//       .pipe (gulpif (isRelease, uglify ()))
//       .pipe (rename ({ extname : '.min.js' }))
//       .pipe (gulp.dest ('./www/js'))
// })
