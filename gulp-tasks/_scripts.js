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

// .pipe (gulpif (isRelease, stripDebug ()))
// .pipe (eslint ())
// .pipe (eslint.format ())
