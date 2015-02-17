'use strict';

var gulp    = require('gulp'),
    mocha   = require('gulp-mocha'),
    jshint  = require('gulp-jshint'),
    nodemon = require('gulp-nodemon');

var paths = {
  server: {
    scripts: ['server/**/*.js'],
    tests: ['server/**/*.test.js']
  }
};

gulp.task('lint', function() {
  return gulp.src([
    paths.server.scripts,
    paths.server.tests
  ]).pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test',function() {
    return gulp.src(paths.server.tests, {read: false})
      .pipe(mocha({reporter: 'spec'}));
});

gulp.task('nodemon', function () {
  nodemon({ script: 'server/app.js', ext: 'js', ignore: [paths.server.tests] })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('watch', function(){
  gulp.watch([paths.server.scripts, paths.server.tests], ['lint']);
});

gulp.task('default', ['lint', 'watch', 'nodemon']);
