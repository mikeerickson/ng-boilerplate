// KARMA TASK
// =============================================================================

/*global require*/

(function () {

  "use strict";

  var gulp    = require('gulp');
  var Server  = require('karma').Server;
  var appRoot = require('app-root-path');
  var console = require('gulp-messenger');
  var plumber = require('gulp-plumber');
  var run     = require('gulp-run');
  var args    = process.argv.slice(3);
  var utils   = require('./utils/cd-utils');

  // load karma.conf.js config obpect
  var karmaParseConfig = require('karma/lib/config').parseConfig;
  var config           = karmaParseConfig(appRoot + '/karma.conf.js', {});
  var openReport       = args.indexOf('--open') >= 0 || (config.htmlReporter.openReporter && utils.isOSX());


  gulp.task('karma', function (done) {
    var server =  new Server({
      configFile: appRoot + '/karma.conf.js',
      singleRun: false
    });

    server.on('browser_error', function (browser, err){
      console.chalkline.red();
      console.error('Karma Run Failed: ' + err.message);
      throw err;
    });

    server.on('run_complete', function (browsers, results){
      results.failed ? console.chalkline.red() : console.chalkline.green();
      if (openReport) {
        run('open ./karma_html/report-summary/index.html').exec();
      }

    });

    server.start();
  });

})();

