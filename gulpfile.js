'use strict';

const gulp = require ('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';


gulp.task('compile_scss', function() {
   return gulp.src(SCSS_SRC)
       .pipe(sourceMaps.init())
       .pipe(concat('main.css'))
       .pipe(sass())
       .pipe(sourceMaps.write('.'))
       // .pipe(minifyCSS())
       // .pipe(rename({ suffix: '.min' }))
       .pipe(changed(SCSS_DEST))
       .pipe(gulp.dest(SCSS_DEST));
});


gulp.task('watch_scss', function() {
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});


gulp.task('default', gulp.series('watch_scss'));
