var gulp    = require('gulp');
var param   = require('./test-param')(21);
var msg     = require('gulp-messenger');

gulp.task('param', function() {
  var val = param.add(5);
  msg.log(val);
});

