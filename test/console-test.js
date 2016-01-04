var msg = require('gulp-messenger');

var add = function(a, b) {
  return (a+b);
};

var result = add(1,2);

// this should be removed
void 0;

// this sound remain
msg.success('result: ', result);

// this should remain as well

var family = ['mike','kira','joelle','brady','bailey','trevor'];
msg.success('Here is my result with data', family);
