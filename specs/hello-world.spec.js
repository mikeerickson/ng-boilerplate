// hello-world.spec.js
// =============================================================================

var assert = require('chai').assert;
var expect = require('chai').expect;


describe('sanity check chai.assert and chai.expect working', function() {

  it('should test positive assertion', function() {
    assert.equal((1+2), 3, 'one plus two is three');
  });

  it('should test negative assertion', function() {
      assert.notEqual(true, false);
  });

  it('should use expect asserting', function() {
      expect((1+2)).to.equal(3);
  });

  it('should test negative expect', function() {
    expect(true).to.not.equal(false);
  });

  it('should test negative expect', function() {
    expect(true).to.not.equal(false);
  });

});
