// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"acceptTask","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getTask","outputs":[{"name":"_name","type":"string"},{"name":"_summary","type":"string"},{"name":"_accepted","type":"bool"},{"name":"_eth","type":"uint256"},{"name":"_shares","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"contributeEth","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"contributeShares","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_summary","type":"string"}],"name":"makeTask","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"isTaskAccepted","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_name","type":"string"},{"name":"_summary","type":"string"}],"name":"updateTask","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getTaskBalance","outputs":[{"name":"_ether","type":"uint256"},{"name":"_shares","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newContract","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"hasTask","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"},{"indexed":false,"name":"_now","type":"uint256"}],"name":"OwnerChanged","type":"event"}],
    binary: "",
    unlinked_binary: "",
    address: "",
    generated_with: "2.0.6",
    contract_name: "ITaskDB"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ITaskDB error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("ITaskDB error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ITaskDB error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ITaskDB error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ITaskDB = Contract;
  }

})();
