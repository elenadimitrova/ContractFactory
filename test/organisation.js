/* eslint-env node, mocha */
// These globals are added by Truffle:
/* globals contract, Organisation, OrganisationNewVersion, Parent, web3, assert */

const Parent = artifacts.require('../contracts/Parent.sol');
const Organisation = artifacts.require('../contracts/Organisation.sol');
const OrganisationUpdated = artifacts.require('../contracts/OrganisationUpdated.sol');
const EternalStorage = artifacts.require('../contracts/EternalStorage.sol');

contract('Organisation', function (accounts) {
  var parent;
  var organisation;
  var eternalStorage;
  var organisationUpgraded;
  var orgEtherBalanceOriginal;
  var orgEtherBalanceUpgraded;

  beforeEach(function(done)
  {
    Parent.deployed().then(function(instance) {
      parent = instance
      console.log('Parent contract deployed at: ', parent.address);

  //  parent.createOrganisation.estimateGas('Antz', {from: accounts[0]})
  //  .then(function(_cost){
  //    console.log("createOrganisation gas cost estimate: ", _cost);

      return parent.createOrganisation('Antz', {from: accounts[0]})
    })
    .then(function(){
      return parent.getOrganisation('Antz');
    })
    .then(function(_organisation){
      console.log('Organisation created at address: ', _organisation);
      organisation = Organisation.at(_organisation);
      return;
    })
    .then(done)
    .catch(done);
  });

  describe('when created', function () {
    it('should allow upgrades of an organisation', function (done) {
      organisation.addProposal.estimateGas("Bring nectar", {})
      .then(function(_cost){
        console.log('addProposal gas cost estimate : ', _cost);
        return organisation.addProposal("Bring pollen");
      })
      .then(function(){
        return organisation.addProposal("Bring nectar");
      })
      .then(function(){
        return organisation.updateProposal.estimateGas(1, "Bring acacia nectar", {});
      })
      .then(function(_cost){
        console.log('updateProposal gas cost estimate: ', _cost);
        return organisation.updateProposal(1, "Bring acacia nectar");
      })
      .then(function(){
        return organisation.fundProposal.estimateGas(1);
      })
      .then(function(_cost){
        console.log('fundProposal gas cost estimate: ', _cost);
        return organisation.fundProposal(1, {from: accounts[0], value: 100});
      })
      .then(function(){
        return organisation.getProposal.call(1);
      })
      .then(function(value){
        assert.equal(value[0], '0x4272696e6720616361636961206e656374617200000000000000000000000000', 'Proposal name is incorrect');
        assert.equal(value[1].toNumber(), 100, 'Proposal ether value is incorrect');
        return organisation.generateTokens(1000);
      })
      .then(function(){
        // Begin upgrade testing
        return parent.upgradeOrganisation.estimateGas('Antz', {});
      })
      .then(function(_cost){
        console.log('upgradeOrganisation gas cost estimate: ', _cost);
        orgEtherBalanceOriginal = web3.eth.getBalance(organisation.address);
        return parent.upgradeOrganisation('Antz');
      })
      .then(function(){
        return parent.getOrganisation('Antz');
      })
      .then(function(_organisation){
        //console.log('OrganisationUpdated created at address: ', _organisation);
        organisationUpgraded = OrganisationUpdated.at(_organisation);
        return organisationUpgraded.coolLogic.call();
      })
      .then(function(hasUpgradedCorrectly){
        assert.equal(hasUpgradedCorrectly, true, 'Contract not upgraded');
        return organisationUpgraded.proposalsCount.call();
      })
      .then(function(count){
        assert.equal(2, count, 'There should be 2 proposals in the upgraded Organisation')
        return organisationUpgraded.getProposal.call(1);
      })
      .then(function(value){
        assert.equal(value[0], '0x4272696e6720616361636961206e656374617200000000000000000000000000', 'Proposal name is incorrect');
        assert.equal(value[1].toNumber(), 100, 'Proposal ether value is incorrect');
        orgEtherBalanceUpgraded = web3.eth.getBalance(organisationUpgraded.address);
        return;
      })
      .then(function(){
        assert.equal(orgEtherBalanceOriginal.toNumber(), orgEtherBalanceUpgraded.toNumber(), 'The ether balance is not the same after upgrade');
        return organisationUpgraded.getBalance(organisationUpgraded.address);
      })
      .then(function(orgBalance){
        assert.equal(1000, orgBalance.toNumber(), 'TokenLedger is not correctly upgraded with the Colony');
      })
      .then(done)
      .catch(done);
    });

    it('should implement contract ownership', function(done) {
      organisation.eternalStorage()
      .then(function(storageAddress){
        console.log('EternalStorage is at ', storageAddress);
        eternalStorage = EternalStorage.at(storageAddress);
        return eternalStorage.owner.call();
      })
      .then(function(ownerAddress){
        console.log('EternalStorage owner is ', ownerAddress);
        return;
      })
      .then(done)
      .catch(done);
    })
  });
});
