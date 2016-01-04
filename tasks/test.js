'use strict';

var gulp   = require('gulp');
var mocha  = require('gulp-mocha');
var config = require('./config');

gulp.task('test', function() {
  return gulp.src('./specs/*.spec.js')
    //.pipe(mocha());
    .pipe(mocha({reporter: 'spec'}));
});

// alias
gulp.task('mocha', ['test']);
