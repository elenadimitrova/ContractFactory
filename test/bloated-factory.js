/* eslint-env node, mocha */
// These globals are added by Truffle:
/* globals contract, BigNodeContract, BloatedFactory, NodeData, TokenLedger, BloatedParent, ParentResolver, web3, assert
*/

var testHelper = require('./test-helper.js');
contract('BloatedFactory', function (accounts) {
  var _MAIN_ACCOUNT_ = accounts[0];
  var _OTHER_ACCOUNT_ = accounts[1];
  var _KEY_ = 'ddddddddddddddddd';
  var nodeFactory;
  var parent;
  var parentResolver;
  var ifUsingTestRPC = testHelper.ifUsingTestRPC;
  var node;
  var nodeData;

  before(function(done){
    parent = BloatedParent.deployed();
    console.log('Parent deployed: ', parent.address);

    parentResolver = ParentResolver.deployed();
    console.log('ParentResolver deployed: ', parentResolver.address);

    nodeFactory = BloatedFactory.deployed();
    console.log('Factory: ', nodeFactory.address);

    parentResolver.registerParent(parent.address)
    .then(function(){
      return nodeFactory.registerParentResolver(parentResolver.address);
    })
    .then(function(){
      return parent.registerFactory(nodeFactory.address);
    })
    .then(function(){
      done();
    })
    .catch(done);
  });

  beforeEach(function(done){
    parent.createNode(_KEY_, {from: _MAIN_ACCOUNT_})
    .then(function(){
      return parent.getNode(_KEY_);
    })
    .then(function(node_){
      console.log('BigNodeContract address: ', node_);
      node = BigNodeContract.at(node_);
      return node.nodeData.call();
    })
    .then(function(nodeDataAddress_){
      console.log('Data address:', nodeDataAddress_);
      nodeData = NodeData.at(nodeDataAddress_);
    })
    .then(done)
    .catch(done);
  });

  afterEach(function(done){
    parent.removeNode(_KEY_).then(function(){
      done();
    })
    .catch(done);
  });

  describe('when created', function () {
    it('deployed user should be admin', function (done) {
      node.getUserInfo.call(_MAIN_ACCOUNT_)
      .then(function (admin) {
        assert.equal(admin, true, 'Deployed user isn\'t an admin');
      })
      .then(done)
      .catch(done);
    });
  });
});
