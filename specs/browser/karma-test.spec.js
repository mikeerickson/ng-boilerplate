//var expect = require('chai').expect;
// chai plugin used (see karma.conf.js)

/* global expect */

describe("A test suite", function() {

  beforeEach(function() { });
  afterEach(function() { });

  it('should fail', function() {
    expect(false).to.be.false;
  });

  it('should pass', function() {
    expect(true).to.be.true;
  });

});


