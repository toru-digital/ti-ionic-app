module.exports = function (gulp, isRelease) {
  let paths = {
    scss : {
      dist : './www/css/',
      entry : './src/ti-ionic-app.scss',
      src : './src/**/*.scss',
    },
    scripts : {
      dist : './www/js',
      entry : './src/ti-ionic-app.js',
      src : './src/**/*.js',
    },
    templates : './src/**/*.tpl.html',
    tmp : './tmp',
  }

  require ('./_sass') (gulp, paths, isRelease)
  require ('./_scripts') (gulp, paths, isRelease)
  require ('./_tests') (gulp, paths, isRelease)

  gulp.task ('watch', [ 'ti-watch' ], function () {
    gulp.watch ([ paths.scripts.src, paths.templates, ], [ 'scripts' ])
    gulp.watch ([ paths.scss.src ], [ 'sass' ])
  })
}
