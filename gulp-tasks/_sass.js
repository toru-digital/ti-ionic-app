module.exports = function (gulp, paths, isRelease) {
  gulp.task ('sass', function () {
    let gulpif = require ('gulp-if')
    let sass = require ('gulp-sass')

    return gulp.src (paths.sass.entry)
      .pipe (sass ())
      .on ('error', sass.logError)
      .pipe (gulp.dest (paths.sass.dist))
      .pipe (gulpif (isRelease, gulp.dest (paths.sass.dist)))
  })
}
