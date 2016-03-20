// gulp.task ('sass', function () {
//   let gulpif = require ('gulp-if')
//   let minifyCss = require ('gulp-minify-css')
//   let rename = require ('gulp-rename')
//   let sass = require ('gulp-sass')
//
//   return gulp.src (paths.sass.entry)
//     .pipe (sass ())
//     .on ('error', sass.logError)
//     .pipe (gulp.dest (paths.scss.dist))
//     .pipe (gulpif (isRelease, minifyCss ({ keepSpecialComments : 0 })))
//     .pipe (rename ({ extname : '.min.css' }))
//     .pipe (gulp.dest ('./www/css/'))
// })
