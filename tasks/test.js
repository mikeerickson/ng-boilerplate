'use strict';

var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var config = require('./config');

gulp.task('test', function() {
  return gulp.src('./specs/*.spec.js')
    .pipe(mocha({reporter: 'mocha-unfunk-reporter'}));
});

// alias
gulp.task('mocha', ['test']);
