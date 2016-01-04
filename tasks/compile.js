// COMPILE TASK
// =============================================================================

(function(){
  'use strict';

  var gulp         = require('gulp');
  var config       = require('./config');
  var console      = require('gulp-messenger');
  var concat       = require('gulp-concat');
  var uglify       = require('gulp-uglify');
  var utils        = require('./utils/cd-utils');
  var handleErrors = require('./utils/handleErrors');
  var execute      = require('run-sequence');

  gulp.task('compile:scripts', function() {
    return gulp.src(config.app.src)
      .on('error', handleErrors)
      .pipe(concat(config.app.filename))
      .pipe(uglify())
      .pipe(gulp.dest(config.app.dest))
      .pipe(console.flush.success('=== ' + config.app.filename + ' created -- ' + utils.timestamp() + ' ==='));
  });

  gulp.task('compile', function(){
    execute('compile:scripts');
  });

})();

