// CONFIG (TASKS)
// =============================================================================

(function(){

  'use strict';

  var fs = require('fs');

  var data = JSON.parse(fs.readFileSync('./.bowerrc'));
  var componentBase = data.directory  || './bower_components';

  module.exports = {
    defaults: {
      show: false,
      public: './public'
    },
    todo: {
      openReport: true,
      src: [
        './src/**/*.{js,es6,jsx}',
        './tasks/**/*.js',
        './public/js/**/*.{js,es6,jsx}',
        '!./public/js/build.js'
      ],
      exclude: './public/js/build.js'
    },
    vendor: {
      src: [
        './node_modules/bootstrap/dist/css/bootstrap-min.css',
        './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/bootstrap/dist/fonts/*.*',
        './components/lodash/lodash.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/moment/min/moment.min.js',
        './node_modules/angular-gravatar/build/angular-gravatar.min.js'
      ],
      dest: './public/vendor',
      build: {
        scripts: {
          // the loading order is important here as some libraries have dependencies of other libraries
          // the items in `componentBase` are installed via bower (and are not available on npm as full library
          src: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            componentBase + 'lodash/lodash.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-animate/angular-animate.min.js',
            './node_modules/moment/min/moment.min.js',
            './node_modules/angular-ui-bootstrap/ui-bootstrap.min.js',
            './node_modules/angular-ui-bootstrap/ui-bootstrap/tpls.js'
          ],
          bundle: 'vendor.js'
        },
        styles: {
          src: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/angular-ui-bootstrap/ui-bootstrap-csp.css'
          ],
          bundle: 'vendor.css'
        },
        fonts: {
          src: [
            './node_modules/bootstrap/dist/fonts/*.*'
          ]
        }
      }
    },
    test: {
      mocha: ['./specs/**/*.spec.js', './specs/**/*Spec.js'],
      karma: ['./src/app/**/*.spec.js', './src/app/**/*Spec.js']
    },

    app: {
      src:      ['./src/app/**/*.js','!./src/app/**/*.spec.js'],
      dest:     './public/js/',
      tasks:    ['./tasks/*.js'],
      filename: 'build.js'
    }

  };

})();

