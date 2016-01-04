// VENDOR TASK
// Copy appropriate `vendor` files to associated ./public/vendor directory
// =============================================================================

(function(){

  'use strict';

  var gulp         = require('gulp');
  var copy         = require('gulp-copy');
  var console      = require('gulp-messenger');
  var config       = require('./config');
  var execute      = require('run-sequence');
  var del          = require('del');
  var concat       = require('gulp-concat');
  var uglify       = require('gulp-uglify');
  var rename       = require('gulp-rename');
  var handleErrors = require('./utils/handleErrors');
  var chalkline    = require('chalkline');

  console.init({
    timestamp: true,
    logToFile: true,
    showPipeFile: false
  });

  gulp.task('vendor:copy', function() {
    del(config.vendor.dest);
    return gulp.src(config.vendor.src)
      .on('error',handleErrors)
      .pipe(copy(config.vendor.dest, {prefix: 1}))
      .pipe(console.flush.warning('=== Files Copied To ' + config.vendor.dest + ' ==='));
  });

  gulp.task('vendor:copy:fonts', function() {
    return gulp.src(config.vendor.build.fonts.src)
      .on('error',handleErrors)
      .pipe(copy(config.defaults.public, {prefix: 3}))
      .pipe(console.flush.warning('=== Fonts Copied To ' + config.defaults.public + ' ==='));
  });

  gulp.task('vendor:build:scripts', function(){
    gulp.src(config.vendor.build.scripts.src)
      .on('error',handleErrors)
      .pipe(concat(config.vendor.build.scripts.bundle))
      .pipe(uglify())
      .pipe(gulp.dest(config.vendor.dest))
      .pipe(console.flush.warning('=== Scripts File Built: ' + config.vendor.dest + '/' + config.vendor.build.scripts.bundle + ' ==='));
  });

  gulp.task('vendor:build:styles', function(){
    gulp.src(config.vendor.build.styles.src)
      .pipe(concat(config.vendor.build.styles.bundle))
      .pipe(gulp.dest(config.vendor.dest))
      .pipe(console.flush.warning('=== Styles File Built: ' + config.vendor.dest + '/' + config.vendor.build.styles.bundle + ' ==='));
  });

  gulp.task('vendor:copy:images', function(){
    console.error('Image Task Incomplete');
  });

  // performs all build processes (individual tasks above)
  gulp.task('vendor:build', function() {

    del(config.vendor.dest);
    execute('vendor:copy:fonts','vendor:build:scripts','vendor:build:styles');

  });

// Aliases
// =============================================================================
  gulp.task('vendor',['vendor:copy']);
  gulp.task('build',['vendor:build']);

  gulp.task('vendor:fonts', ['vendor:copy:fonts']);
  gulp.task('vendor:scripts', ['vendor:build:scripts']);
  gulp.task('vendor:styles', ['vendor:build:styles']);
  gulp.task('vendor:images', ['vendor:build:images']);

})();
