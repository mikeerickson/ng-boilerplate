'use strict';

var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var config = require('./config');

var testFiles = [].concat(config.test.mocha);

gulp.task('test', function() {
  return gulp.src(testFiles)
    .pipe(mocha({reporter: 'mocha-unfunk-reporter'}));
});

// alias
gulp.task('mocha', ['test']);
