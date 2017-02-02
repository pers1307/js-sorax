'use strict';

var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCSS("bundle.css"))
        .pipe(prefix('last 2 versions', '> 1%', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/'))
        .pipe(notify('Done!'));
});

gulp.task('watch', function () {

    gulp.watch('css/*.css', ['default']);
});