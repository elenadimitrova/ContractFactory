/* eslint-env node, mocha */
// These globals are added by Truffle:
/* globals contract, Organisation, OrganisationFactory, TaskDB, TokenLedger, Parent, ParentResolver, web3, assert
*/

var testHelper = require('./test-helper.js');
contract('Organisation', function (accounts) {
  var _MAIN_ACCOUNT_ = accounts[0];
  var _OTHER_ACCOUNT_ = accounts[1];
  var _Organisation_KEY_ = 'Organisation_TEST';
  var parent;
  var parentResolver;
  var ifUsingTestRPC = testHelper.ifUsingTestRPC;
  var organisation;
  var organisationTaskDb;

  before(function(done){
    Parent.new()
    .then(function(_parent){
      parent = _parent;
      console.log('Parent created: ', parent.address);
    })
    .then(done)
    .catch(done);
    });

  beforeEach(function(done){
    parent.createOrganisation(_Organisation_KEY_,
      {
        from: _MAIN_ACCOUNT_,
        value: 1,
        gas: 1e6,
        gasPrice: 20e9
      })
    .then(function(t){
      console.log("Maybe something useful", t);
      return parent.getOrganisation.call(_Organisation_KEY_);
    })
    .then(function(organisation_){
      console.log('Organisation address: ', organisation_);
      organisation = Organisation.at(organisation_);
      return organisation.taskDB.call();
    })
    .then(function(organisationTaskDbAddress_){
      console.log('TaskDb address:', organisationTaskDbAddress_);
      organisationTaskDb = TaskDB.at(organisationTaskDbAddress_);
      done();
    });
  });

  afterEach(function(done){
    parent.removeOrganisation(_Organisation_KEY_);
    done();
  });

  describe('when created', function () {
    it('deployed user should be admin', function (done) {
      organisation.getUserInfo.call(_MAIN_ACCOUNT_)
      .then(function (admin) {
        assert.equal(admin, true, 'Deployed user isn\'t an admin');
      })
      .then(done)
      .catch(done);
    });
  });
});
