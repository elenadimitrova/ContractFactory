// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"a","type":"uint256"}],"name":"functionOne","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"functionEight","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"one","type":"address"},{"name":"two","type":"address"}],"name":"functionSix","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bytes32"}],"name":"functionTwo","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getBlockCreatedOn","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"b","type":"bytes32"}],"name":"functionFour","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"uint256"}],"name":"functionThree","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"Replicator","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"c","type":"string"},{"name":"d","type":"uint256"}],"name":"functionFive","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"","type":"uint256"}],"type":"function"}],
    binary: "6060604052610172806100126000396000f36060604052361561008d5760e060020a60003504630e7e817e811461008f57806333e712fe1461008f57806340c93c3c1461009457806341c0e1b5146100a257806368bdd8d31461008f57806370961774146100e35780637b32e10f1461008f57806388cb8b551461008f578063a15afb48146100ed578063bb9d26bf14610116578063f2c9ecd81461015e575b005b61008d565b61008d6004356024355b5050565b61008d60005473ffffffffffffffffffffffffffffffffffffffff338116911614156101145760005473ffffffffffffffffffffffffffffffffffffffff16ff5b6101686001545b90565b61008d6000805473ffffffffffffffffffffffffffffffffffffffff191633179055436001555b565b608060206004803580820135601f81018490049093028401604052606083815261008d9492936024939192840191819083828082843750949650509335935061009e92505050565b61016860016100ea565b6060908152602090f3",
    unlinked_binary: "6060604052610172806100126000396000f36060604052361561008d5760e060020a60003504630e7e817e811461008f57806333e712fe1461008f57806340c93c3c1461009457806341c0e1b5146100a257806368bdd8d31461008f57806370961774146100e35780637b32e10f1461008f57806388cb8b551461008f578063a15afb48146100ed578063bb9d26bf14610116578063f2c9ecd81461015e575b005b61008d565b61008d6004356024355b5050565b61008d60005473ffffffffffffffffffffffffffffffffffffffff338116911614156101145760005473ffffffffffffffffffffffffffffffffffffffff16ff5b6101686001545b90565b61008d6000805473ffffffffffffffffffffffffffffffffffffffff191633179055436001555b565b608060206004803580820135601f81018490049093028401604052606083815261008d9492936024939192840191819083828082843750949650509335935061009e92505050565b61016860016100ea565b6060908152602090f3",
    address: "",
    generated_with: "2.0.6",
    contract_name: "ReplicatorB"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ReplicatorB error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("ReplicatorB error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ReplicatorB error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ReplicatorB error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ReplicatorB = Contract;
  }

})();
