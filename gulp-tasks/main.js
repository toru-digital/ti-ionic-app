module.exports = function (gulp, isRelease) {
  var paths = {
    scss : {
      dist : './www/css/',
      entry : './src/main.scss',
      src : './src/**/*.scss',
    },
    scripts : {
      dist : './www/js',
      entry : './src/main.js',
      src : './src/**/*.js',
    },
    templates : './src/**/*.tpl.html',
    tmp : './tmp',
  }

  require ('./_sass') (gulp, paths, isRelease)
  require ('./_scripts') (gulp, paths, isRelease)
  require ('./_tests') (gulp, paths, isRelease)

  gulp.task ('default', [ 'scripts', 'watch' ])

  gulp.task ('watch', [ 'ti-watch' ], function () {
    gulp.watch ([ paths.scripts.src ], [ 'scripts' ])

    //, paths.templates
    //gulp.watch ([ paths.scss.src ], [ 'sass' ])
  })
}
