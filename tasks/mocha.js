'use strict';

var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var config = require('./config');

var testFiles = [].concat(config.test.mocha);

// reporter: 'mocha-unfunk-reporter'
gulp.task('mocha', function() {
  return gulp.src(testFiles)
    .pipe(mocha({reporter: 'spec'}));
});

// alias
gulp.task('test', ['mocha']);
