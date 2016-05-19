/* eslint-env node, mocha */
// These globals are added by Truffle:
/* globals contract, Organisation, TaskDB, TokenLedger, Parent, ParentResolver, web3, assert
*/

var testHelper = require('./test-helper.js');
contract('Organisation', function (accounts) {
  var _MAIN_ACCOUNT_ = accounts[0];
  var _OTHER_ACCOUNT_ = accounts[1];
  var _Organisation_KEY_ = 'Organisation_TEST';
  var parent;
  var ifUsingTestRPC = testHelper.ifUsingTestRPC;
  var organisation;

  describe('when created', function () {
    it('deployed user should be admin', function (done) {
      parent = Parent.deployed();
      console.log('Parent contract deployed at: ', parent.address);
      parent.createOrganisation(_Organisation_KEY_, {from: _MAIN_ACCOUNT_})
      .then(function(){
        return parent.getOrganisation(_Organisation_KEY_);
      })
      .then(function(organisation_){
        console.log('Organisation address: ', organisation_);
        organisation = Organisation.at(organisation_);
        return organisation.taskDB.call();
      })
      .then(function(organisationTaskDbAddress_){
        console.log('TaskDb address:', organisationTaskDbAddress_);
        return organisation.shareLedger.call();
      })
      .then(function(shareLedger){
        console.log('ShareLedger address: ', shareLedger);
        return organisation.getUserInfo.call(_MAIN_ACCOUNT_);
      })
      .then(function (admin) {
        assert.equal(admin, true, 'Deployed user isn\'t an admin');
      })
      .then(done)
      .catch(done);
    });
  });
});
