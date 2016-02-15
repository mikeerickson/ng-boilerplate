// PEOPLE CONTROLLER SPEC
// - Executed via Karma Runner, don't require dependencies
// =============================================================================

describe("People Module", function() {

  var controller;
  var people = mockData.getMockPeople();
  var dogs   = mockData.getMockDogs();

  beforeEach(function() {
    bard.appModule('app');
    bard.inject(this, '$controller', '$httpBackend', '$log', '$q', '$rootScope', 'dataservice', 'peopleService');
  });

  afterEach(function() {

  });

  describe('Test Sanity Check', function(){
      it('should pass',function(done){
          expect(true).to.be.true;
          done();
        });
  });

  describe('Test People Controller and People Service', function(){

    beforeEach(function(){
      controller = $controller('PeopleController');
    });

    it('responds to heartbeat', function() {
      expect(controller.heartbeat('ping')).to.equal('ping pong');
    });

    it('should be created successfully', function(){
      expect(controller).to.be.defined;
    });

    it('should return a value for message count',function(){
      dataservice.getMessageCount()
        .then(function(data){
            expect(data).to.equal(72);
        });
      $rootScope.$apply();
    });

    it('should not be created successfully', function(){
      expect(controller).to.not.be.defined;
    });

    it('should access /people endpoint, returning mock data',function(){
      $httpBackend.when('GET','/people').respond(200, people);
      peopleService.getPeople().then(function(data){
        expect(data).to.exist;
        assert.isArray(data);
        expect(data.length).to.be.at.least(6);
        expect(data[0].fname).to.equal('Mike');
        expect(data[5].fname).to.equal('Trevor');
        });
      $httpBackend.flush();
      });

    it('should access /dogs endpoint, returning mock data', function() {
      $httpBackend.when('GET', '/dogs').respond(200, dogs);
      peopleService.getDogs().then(function(data) {
        expect(data).to.exist;
        expect(data.length).to.be.at.least(3);
        expect(data[2].name).to.equal('Gunner');
        assert.isArray(data);
      });
      $httpBackend.flush();
    });

    it('should report error if server fails access people', function() {
      var mockError = { status: 'error', description: 'Mock Error' };

      $httpBackend.when('GET', '/people').respond(500, mockError);
      peopleService.getPeople().catch(function(data){
        expect(data).to.exist;
        expect(data.status).to.equal('error');
      });
      $httpBackend.flush();
    });

    it('should report error if server fails access dogs', function() {
      var mockError = { status: 'error', description: 'Mock Error' };

      $httpBackend.when('GET', '/dogs').respond(500, mockError);
      peopleService.getDogs().catch(function(data){
        expect(data).to.exist;
        expect(data.status).to.equal('error');
      });
      $httpBackend.flush();
    });

  });

  describe('Test dataservice', function(){

    it('should access /dogs endpoint, returning mock data',function(){
      $httpBackend.when('GET','/dogs').respond(200, dogs);
      dataservice.getDogs().then(function(data){
        expect(data).to.exist;
        assert.isArray(data);
        expect(data.length).to.be.at.least(2);
        expect(data[0].name).to.equal('Shilo');
      });
      $httpBackend.flush();
    });

    it('should report error if server fails access dogs', function(){
      var mockError = { status: 'error', description: 'Mock Error' };

      $httpBackend.when('GET', '/dogs').respond(500, mockError);
      dataservice.getDogs().catch(function(data){
        expect(data).to.exist;
        expect(data.status).to.equal('error');
      });
      $httpBackend.flush();
    });

  });

});
