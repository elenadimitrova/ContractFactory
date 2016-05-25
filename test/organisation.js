/* eslint-env node, mocha */
// These globals are added by Truffle:
/* globals contract, Organisation, Parent, web3, assert */

contract('Organisation', function (accounts) {
  var parent;
  var organisation;

  describe('when created', function () {
    it('should allow management of proposals', function (done) {
      parent = Parent.deployed();
      console.log('Parent contract deployed at: ', parent.address);

      parent.createOrganisation.estimateGas('Antz', {})
      .then(function(_cost){
        console.log("createOrganisation gas cost estimate: ", _cost);
        return parent.createOrganisation('Antz', {from: accounts[0]});
      })
      .then(function(){
        return parent.getOrganisation('Antz');
      })
      .then(function(_organisation){
        console.log('Organisation created at address: ', _organisation);
        organisation = Organisation.at(_organisation);
        return organisation.makeProposal.estimateGas("Bring nectar", {});
      })
      .then(function(_cost){
        console.log('makeProposal gas cost estimate : ', _cost);
        return organisation.makeProposal("Bring acacia nectar");
      })
      .then(function(){
        return organisation.updateProposal.estimateGas(0, "Bring acacia nectar", {});
      })
      .then(function(_cost){
        console.log('updateProposal gas cost estimate: ', _cost);
        return organisation.updateProposal(0, "Bring acacia nectar");
      })
      .then(function(){
        return organisation.fundProposal.estimateGas(0, {from: accounts[0], value: 100});
      })
      .then(function(_cost){
        console.log('fundProposal gas cost estimate: ', _cost);
        return organisation.fundProposal(0, {from: accounts[0], value: 100});
      })
      .then(function(){
        return organisation.getProposal.call(0);
      })
      .then(function(value){
        assert.equal(value[0], "Bring acacia nectar", 'Proposal name is incorrect');
        assert.equal(value[1], 100, 'Proposal ether value is incorrect');
      })
      .then(done)
      .catch(done);
    });
  });
});
