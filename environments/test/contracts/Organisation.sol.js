// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addProposal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"proposalsCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"setProposalFund","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"updateProposal","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getProposal","outputs":[{"name":"_name","type":"bytes32"},{"name":"_eth","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"upgradedOrganisation_","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"fundProposal","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"when","type":"uint256"}],"name":"ProposalAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"when","type":"uint256"}],"name":"ProposalUpdated","type":"event"}],
    binary: "6060604052610304806100126000396000f3606060405236156100615760e060020a600035046306efe3b081146100635780630a9f46ad146100b1578063460a7050146100be5780635ba2177114610105578063c7f758a81461017e578063cbf0b0c0146101f2578063e210f4b514610211575b005b610061600435600080546001810180835582908280158290116102615760020281600202836000526020600020918201910161026191905b808211156103005784815560010184815561009b565b6000546060908152602090f35b610061600435602435806000600050838154811015610002575080525060029091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5640155565b6100616004356024358060006000508381548110156100025750808052600284027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019050556060828152426080527fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a90604090a15050565b6102546004356000600060006000600050848154811015610002575050508052507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636002909102908101547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564909101549091565b6100616004358073ffffffffffffffffffffffffffffffffffffffff16ff5b6100616004353460006000508281548110156100025750805260029091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5640155565b6060918252608052604090f35b50505090506040604051908101604052808381526020016000815260200150600060005082815481101561000257906000526020600020906002020160005060008201518160000160005055602082015181600101600050559050507fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad8142604051808381526020018281526020019250505060405180910390a15050565b509056",
    unlinked_binary: "6060604052610304806100126000396000f3606060405236156100615760e060020a600035046306efe3b081146100635780630a9f46ad146100b1578063460a7050146100be5780635ba2177114610105578063c7f758a81461017e578063cbf0b0c0146101f2578063e210f4b514610211575b005b610061600435600080546001810180835582908280158290116102615760020281600202836000526020600020918201910161026191905b808211156103005784815560010184815561009b565b6000546060908152602090f35b610061600435602435806000600050838154811015610002575080525060029091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5640155565b6100616004356024358060006000508381548110156100025750808052600284027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019050556060828152426080527fd0d48d54a7ebcfcfd76018524c8d822767ac6f81ca7171b01511c2b53b35971a90604090a15050565b6102546004356000600060006000600050848154811015610002575050508052507f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636002909102908101547f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564909101549091565b6100616004358073ffffffffffffffffffffffffffffffffffffffff16ff5b6100616004353460006000508281548110156100025750805260029091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5640155565b6060918252608052604090f35b50505090506040604051908101604052808381526020016000815260200150600060005082815481101561000257906000526020600020906002020160005060008201518160000160005055602082015181600101600050559050507fcf9af864fe793f8ab30e13cdc3475afd6ccb7896eef43ce2aaecaa97711310ad8142604051808381526020018281526020019250505060405180910390a15050565b509056",
    address: "0xab6663d141b6e5d53b38ccc4e1aef7b60d5d217e",
    generated_with: "2.0.9",
    contract_name: "Organisation"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Organisation error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Organisation error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Organisation error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Organisation error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Organisation = Contract;
  }

})();
