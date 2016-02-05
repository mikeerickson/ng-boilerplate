var expect = require('chai').expect;
var should = require('chai').should();
var _      = require('lodash');

describe("Sample Spec w/ Chai Expect", function() {

  beforeEach(function() { });
  afterEach(function() { });

  it('expect to fail', function() {
    expect(false).to.be.false;
  });

  it('expect to pass', function() {
    expect(true).to.be.true;
  });

  it('expect it to be true', function(){
    expect(true).to.be.true;
  });

});

describe('Sample Spec w/ Chai Should', function() {

  var familyObj;
  
  beforeEach(function() {
    familyObj = [
      {fname: 'Mike',    lname: 'Erickson', dob: '10/15/72'},
      {fname: 'Kira',    lname: 'Erickson', dob: '5/2/76'},
      {fname: 'Joelle',  lname: 'Asoau',    dob: '7/12/93'},
      {fname: 'Brayden', lname: 'Erickson', dob: '2/28/95'},
      {fname: 'Bailey',  lname: 'Erickson', dob: '3/19/96'},
      {fname: 'Trevor',  lname: 'Erickson', dob: '4/7/97'},
      {fname: 'Nate',    lname: 'Asoau',    dob: '11/21/74'},
      {fname: 'Alaya',   lname: 'Asoau',    dob: '11/21/13'}
    ];

  });
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

  it('should verify family object', function() {
    familyObj[0].should.have.property('fname');
  });

  it('should have family members', function() {
    var joelle = familyObj[2];
    joelle.should.have.property('lname', 'Asoau');
    var alaya = familyObj[7];
    alaya.should.have.property('lname', 'Asoau');
  });
  
  it('should successfully find family member (Kira Erickson)', function(){
    _.findKey(familyObj, function(o) { return o.fname === 'Kira'; }).should.be.ok;
    _.findKey(familyObj, function(o) { return o.lname === 'Erickson'; }).should.be.ok;
  });

  it('should successfully find family member (Alaya Asoau)', function(){
    _.findKey(familyObj, function(o) { return o.fname === 'Alaya'; }).should.be.ok;
    _.findKey(familyObj, function(o) { return o.lname === 'Asoau'; }).should.be.ok;
  });

});
