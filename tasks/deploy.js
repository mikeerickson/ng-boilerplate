// DEPLOY TASK
// =============================================================================

(function(){
  'use strict';

  var gulp     = require('gulp');
  var execute  = require('run-sequence');

// execute all tasks related to deploy
  gulp.task('deploy:build', function(){
    execute('clean:all','vendor:copy:fonts','vendor:build:scripts','vendor:build:styles');
  });

// execute all tasks related to deploy
  gulp.task('deploy:copy', function(){
    execute('clean','vendor:copy');
  });

  gulp.task('deploy', ['deploy:copy']);

})();

