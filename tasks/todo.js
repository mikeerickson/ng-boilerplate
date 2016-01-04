// Simple todo file creation (not full todo tasks used in other projects)
// Requires `./tasks/config.js'
// =============================================================================

/*global require*/

(function(){
  'use strict';

  var gulp         = require('gulp');
  var config       = require('./config');
  var todo         = require('gulp-todo');
  var exclude      = require('gulp-ignore');
  var console      = require('gulp-messenger');
  var moment       = require('moment');
  var utils        = require('./utils/cd-utils');
  var run          = require('gulp-run');
  var handleErrors = require('./utils/handleErrors');
  var args         = process.argv.slice(3);

  var openReport = args.indexOf('--open') >= 0 || (config.todo.openReport && utils.isOSX);

  console.init({logToFile: true, timestamp: true, showPipeFile: false});

  gulp.task('todo', function() {
    return gulp.src(config.todo.src)
      .on('error', handleErrors)
      .on('end', function(){
        if(openReport) {
          run('open ./TODO.md').exec();
        }
      })
      .pipe(exclude(config.todo.exclude))
      .pipe(todo())
      .pipe(todo.reporter('json', {fileName: 'todo.json'}))
      .pipe(gulp.dest('./'))
      .pipe(console.flush.success('*** ./TODO.md Updated ' + utils.timestamp() + ' ***'));
  });

// watch for changes in the same source files and update TODO.md as necessary
  gulp.task('todo:watch', ['todo'], function() {
    gulp.watch(config.todo.src, ['todo']);
  });


})();
