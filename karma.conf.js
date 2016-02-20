// Karma configuration
// Generated on Tue Nov 24 2015 15:17:54 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha', 'mocha-clean', 'html', 'htmlalt'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // html - https://www.npmjs.com/package/karma-html-reporter
    reporters: ['mocha','html'],

    // this section is configuration for `html` AND `htmlalt` reporters
    htmlReporter: {

      // output file for `htmlalt` reporter
      outputFile: 'specs/units.html',

      // the rest of this section if for `html` reporter
      outputDir: 'karma_html', // where to put the reports
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: 'ng-boilerplate', // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary', // report summary filename; browser info by default
      openReporter: true,


      // experimental
      preserveDescribeNesting: false, // folded suites stay folded
      foldAll: true, // reports start folded (only with preserveDescribeNesting)

    },


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','chai','sinon','sinon-chai'],
		//
    //plugins: ['karma-htmlfile-reporter'],

    // list of files / patterns to load in the browser
    files: [

      'src/app/test-helpers/mockdata.js',

      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-ui-bootstrap/ui-bootstrap.js',
      'node_modules/bardjs/dist/bard.js',

      'specs/browser/*spec.js',

      'src/app/app.module.js',
      'src/app/dataservice.js',
      'src/app/people/people.controller.js',
      'src/app/people/people.service.js',
      'src/app/people/specs/**/*spec.js',
      'src/app/people/specs/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
