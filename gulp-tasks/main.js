module.exports = function (gulp, isRelease) {
  let paths = {
    scss : {
      dist : './www/css/',
      entry : './src/ti-ionic-app.scss',
      src : './src/**/*.scss',
    },
    scripts : './src/**/*.js',
    templates : './src/**/*.tpl.html',
    tmp : './tmp',
  }

  gulp.task ('watch', [ 'ti-watch' ], function () {
    gulp.watch ([ paths.scripts, paths.templates, ], [ 'scripts' ])
    gulp.watch ([ paths.scss.src ], [ 'sass' ])
  })
}
