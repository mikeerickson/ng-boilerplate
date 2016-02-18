// CLEAN TASKS
// =============================================================================

(function() {

  'use strict';

  var gulp       = require('gulp');
  var del        = require('del');
  var config     = require('./config');
  var console    = require('gulp-messenger');
  var stripDebug = require('gulp-strip-debug');
  var plumber    = require('gulp-plumber');
  var handleErrors = require('./utils/handleErrors');

  console.init({
    timestamp: true,
    logToFile: true,
    showPipeFile: false
  });

  // TODO: This should clear the contents but not the actual folder
  gulp.task('clean:vendor', function(cb){
    del(config.vendor.dest);
    console.success(config.vendor.dest + ' Cleaned...');
  });

  gulp.task('clean:logs', function(cb){
    del('./logs');
    console.success('./logs Cleaned...');
  });

  gulp.task('clean:all', ['clean:vendor', 'clean:logs']);

  gulp.task('clean:console', function() {
    return gulp.src(['./test/test2.js'])
      .on('error', handleErrors)
      .pipe(stripDebug())
      .pipe(gulp.dest('test'));
  });


})();
