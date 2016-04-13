// PROMISE SPEC
// =============================================================================

/*global require*/
/*global describe*/
/*global it*/

'use strict';

let fs     = require('fs');
let msg    = require('gulp-messenger');
let chai   = require('chai');
let expect =  chai.expect;
let should = chai.should();

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

describe('Testing Promises', () => {

  it('should read file contents and contain specific text', (done) => {
    let promise = getFileData('./todo.json');
    done();
    return expect(promise).to.eventually.contain('file');
  });

  it('should write data then read it back', (done) => {
    var filename = 'test.txt';
    fs.writeFile(filename, 'Hello World', (err) => {
      if (err) throw err;
    });

    let promise = getFileData(filename);
    done();
    return expect(promise).to.eventually.contain('Hello World');

  });

  it('should do something with promises', function() {
    var blah = 'foo';

    var result = systemUnderTest();

    return result.then(function(data) {
      expect(isEven(data)).to.be.true;
    });
  });

});

function getFileData(filename) {
   return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => { err ? reject(err) : resolve(data); });
  });
}

function testPromise() {
  return new Promise(function(resolve, reject) {
    var test = 'foo'

    if (test === 'foo') {
      resolve(test);
    } else {
      reject(new Error())
    }
  })

}

function systemUnderTest() {
  return new Promise(function(resolve, reject) {
    var random = Math.round(Math.random()*100) + 1
    isEven(random) ? resolve(random) : reject(new Error('Odd Number'))
  });
}

var isEven = function(value) { return value % 2 == 0 }
var isOdd  = function(value) { return Math.abs(n % 2) == 1 }

