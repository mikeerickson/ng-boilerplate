// TASK LIST
// =============================================================================

'use strict';

var gulp   = require('gulp');
var msg    = require('gulp-messenger');
var utils  = require('./utils/cd-utils');
var chalk  = require('chalk');
var _      = require('lodash');
var config = require('./config');
var data   = require('./task-data')(config);

msg.init({timestamp: true});

var green  = chalk.green;
var orange = chalk.cyan;

var tasks = data.getTaskList();

function buildTaskList() {
  var task = {};

  console.log(chalk.yellow("\n\nGulp Task List (choose one of the following tasks eg. `gulp hint`) "));
  console.log(chalk.yellow(_.repeat('=', 100)));
  console.log("\n");

  _.map(tasks, function(taskObj) {
    task = { name: chalk.cyan(taskObj.name), desc: ''};
    if ( taskObj.desc.length > 0 ) {
      task = { name: utils.padRight(taskObj.name,30), desc: taskObj.desc };
    }
    console.log(_.template('${name} ${desc}')(task));
  });

  console.log("\n");

}

gulp.task('tasklist', function() {
  buildTaskList();
});
