// PROMISE SPEC
// =============================================================================

/*global require*/

var fs     = require('fs');
var msg    = require('gulp-messenger');
var expect = require('chai').expect;


describe('Testing Promises', function(){

  it('should do something good with promises now', function(done){

    var promise = new Promise(function (resolve, reject) {
      fs.readFile('./todo.json', (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });

    promise.then(function(data){
      expect.data.to.exists;
    }).catch(function(err){
      expect.err.to.exists;
      msg.error(err);
    });

    done();

  });

});


