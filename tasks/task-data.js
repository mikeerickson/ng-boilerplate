(function () {

  var chalk = require('chalk');
  var green = chalk.green;

  module.exports = function (config) {

    var taskList = [
      {
        name: 'clean.js',
        desc: ''
      }, {
        name: 'clean:vendor',
        desc: 'Clean vendor scripts'
      }, {
        name: 'clean:logs',
        desc: 'Clean Logs'
      }, {
        name: 'clean:all',
        desc: 'Clean all folders'
      }, {
        name: 'clean:console',
        desc: 'Remove `console.log` calls in source files'
      }, {
        name: ' ',
        desc: ' '
      }, {
        name: 'compile.js',
        desc: ''
      }, {
        name: 'compile:scripts',
        desc: 'Compiles all script files into ' + chalk.green('build.js')
      }, {
        name: 'compile',
        desc: 'Alias to ' + chalk.green('compile:scripts')
      }, {
        name: '',
        desc: ''
      }, {
        name: 'deploy.js',
        desc: ''
      }, {
        name: 'deploy:build',
        desc: 'Build Process (all clean, fonts, scripts and styles)'
      }, {
        name: 'deploy:copy',
        desc: 'Clean and Vendor Copy'
      }, {
        name: '',
        desc: ''
      }, {
        name: 'hint.js',
        desc: ''
      }, {
        name: 'hint',
        desc: 'Lints all scripts files (defined in ' + green('config.js') + ') using jshint'
      }, {
        name: 'lint',
        desc: 'Alias to ' + green('hint') + ' Task'
      }, {
        name: '',
        desc: ''
      }, {
        name: 'karma.js',
        desc: ''
      }, {
        name: 'karma',
        desc: 'Karma Test Runner'
      },
      {
        name: '',
        desc: ''
      },{
        name: 'todo.js',
        desc: ''
      }, {
        name: 'todo',
        desc: 'Creates ' + green('TODO.md') + ' file'
      }, {
        name: 'todo:watch',
        desc: 'Enables watch task to create todo file on change'
      }, {
        name: '',
        desc: ''
      }, {
        name: 'vendor.js',
        desc: ''
      }, {
        name: 'vendor:copy',
        desc: 'Copies all vendor files to ' + green(config.vendor.dest) + ' directory'
      }, {
        name: 'vendor:copy:fonts',
        desc: 'Copies all vendor fonts to ' + green(config.vendor.dest) + ' directory'
      }, {
        name: 'vendor:build:scripts',
        desc: 'Build all Vendor Scripts into ' + green(config.vendor.build.scripts.bundle)
      }, {
        name: 'vendor:build:styles',
        desc: 'Build all Vendor Styles into ' + green(config.vendor.build.styles.bundle)
      }, {
        name: 'vendor:copy:images',
        desc: 'Copies all images to ' + green(config.vendor.dest) + ' directory'
      }, {
        name: 'vendor:build',
        desc: 'Performs all `vendor` tasks'
      }, {
        name: 'vendor',
        desc: 'Executes ' + green('vendor:copy') + ' task'
      }, {
        name: 'build',
        desc: 'Executes ' + green('vendor:build') + ' task'
      }, {
        name: 'vendor:fonts',
        desc: 'Alias to ' + green('vendor:copy:fonts') + ' task'
      }, {
        name: 'vendor:scripts',
        desc: 'Alias to ' + green('vendor:build:scripts') + ' task'
      }, {
        name: 'vendor:styles',
        desc: 'Alias to ' + green('vendor:build:scripts') + ' task'
      }, {
        name: 'vendor:images',
        desc: 'Alias to ' + green('vendor:build:images') + ' task'
      }, {
        name: '',
        desc: ''
      }, {
        name: 'watch.js',
        desc: ''
      }, {
        name: 'watch scripts',
        desc: 'Watcher for ' + green('compile:scripts') + ' task'
      }, {
        name: 'watch hint',
        desc: 'Watcher for ' + green('hint') + ' task'
      }, {
        name: 'watch todo',
        desc: 'Watcher for ' + green('todo') + ' task'
      }
    ];

    return {
      getTaskList: function () {
        return taskList;
      }
    };
  };

})();

