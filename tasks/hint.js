// HINT TASK
// =============================================================================

/*global require*/

(function(){
  'use strict';

  var gulp         = require('gulp');
  var jshint       = require('gulp-jshint');
  var config       = require('./config');
  var console      = require('gulp-messenger');
  var utils        = require('./utils/cd-utils');
  var handleErrors = require('./utils/handleErrors');

  require('jshint-summary');

  console.init({logToFile: true, timestamp: true, showPipeFile: true});

  gulp.task('hint', function() {

    // if you need to hint specs, adjust config.app.src as it contains '!./src/app/**/*.spec.js'
    // which will override `config.test.karma`
    // var files = [].concat(config.app.src, config.app.tasks, config.test.mocha, config.test.karma);
    var files = [].concat(config.app.src, config.app.tasks);

    return gulp.src(files)
      .on('error', handleErrors)
      .pipe(jshint())
      .pipe(console.flush.success('*** Hinting Process Completed Successfully *** '))
      .pipe(jshint.reporter('jshint-summary'));
  });

  // alias
  gulp.task('lint', ['hint']);

})();
