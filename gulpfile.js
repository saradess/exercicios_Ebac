const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('sass', function() {
return gulp.src('source/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('images', function() {
return gulp.src('source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/imagens'));
});

gulp.task('scripts', function() {
return gulp.src('source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));
});

gulp.task('default', gulp.parallel('sass', 'images', 'scripts'));

