const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sassToCss',async function () {
    gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
})

gulp.task('watch', async function () {
    gulp.watch('./src/sass/*.scss',gulp.series('sassToCss'));
})

gulp.task('default', gulp.parallel('sassToCss','watch'));