'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var paths = {
  scripts: ['src/**/*.js', 'test/**/*.js']
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', ['lint'] ,function() {
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['lint', 'test']);
});

gulp.task('default', ['lint', 'test', 'watch']);
