// WATCH TASK
// =============================================================================

/*global require*/

(function(){

  'use strict';

  var gulp    = require('gulp');
  var console = require('gulp-messenger');
  var config  = require('./config');
  var utils   = require('./utils/cd-utils');

  gulp.task('watch', function() {

    console.success('*', utils.padCenter('All Watchers Started', 80, ' '),  '*');

    gulp.watch(config.app.src,    ['compile:scripts']);
    gulp.watch(config.app.src,    ['hint']);
    gulp.watch(config.todo.src,   ['todo']);
    gulp.watch(config.test.mocha, ['test']);
    gulp.watch(config.test.karma, ['karma']);

  });

  gulp.task('watch:dev', function(){
    console.success('*', utils.padCenter('Development Watchers Started', 80, ' '),  '*');

    gulp.watch(config.app.src,  ['compile:scripts']);
    gulp.watch(config.app.src,  ['hint']);
  });

  gulp.task('watch:test', function(){
    console.success('*', utils.padCenter('Mocha/Karma Watchers Started', 80, ' '),  '*');

    gulp.watch(config.test.mocha, ['test']);
    gulp.watch(config.test.karma, ['karma']);
  });

})();
