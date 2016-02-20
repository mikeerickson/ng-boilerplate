var msg = require('gulp-messenger');
var fs  = require('fs');

msg.log('Promises, promises, promises');

var promise = new Promise(function (resolve, reject) {
  fs.readFile('./todo.json', (err, data) => {
    err ? reject(err) : resolve(data);
  });
});

promise.then(function(data){
  msg.dump(data);
}).catch(function(err){
  msg.error(err);
});
