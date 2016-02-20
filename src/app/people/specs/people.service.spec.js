// PEOPLE SERVICE SPEC
// - Executed via Karma Runner, don't require dependencies
// =============================================================================

/*global require*/


describe("People Specs", function() {

  beforeEach(function() { });
  afterEach(function() { });

  it('expect to fail', function() {
    expect(false).to.be.false;
  });

  it('expect to pass', function() {
    expect(true).to.be.true;
  });

});

describe('Sample Spec w/ Chai Should', function() {

  beforeEach(function() { });
  afterEach(function() { });

  it('should be a string', function() {
    var foo = 'test';
    foo.should.be.a('string');
  });

  it('should not be a string', function() {
    var foo = {};
    foo.should.not.be.a('string');
  });

  it('should perform various tests', function() {
    var foo = 'bar';
    var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.length(3);

  });

  it('should perform test on a object', function() {
    var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    beverages.should.have.property('tea').with.length(3);

  });

});
