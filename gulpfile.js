var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css');



gulp.task('styles', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass({
      'sourcemap=none': true,
      includePaths: ['bower_components/foundation/scss']
    }))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(concat('stylesheet.css'))
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', function() {
    gulp.watch('sass/*.sass', ['styles']);
});

gulp.task('default', ['styles', 'watch']);