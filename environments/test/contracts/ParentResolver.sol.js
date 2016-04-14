// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"parentAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ParentAddress","type":"address"}],"name":"registerParent","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260788060106000396000f36060604052361560265760e060020a6000350462821de38114602c578063baa0ad1114604a575b606c6002565b606e60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b6060908152602090f3",
    unlinked_binary: "606060405260788060106000396000f36060604052361560265760e060020a6000350462821de38114602c578063baa0ad1114604a575b606c6002565b606e60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b6060908152602090f3",
    address: "0x75e96fb4ccd53f70d29b892ce30ae30076cc7657",
    generated_with: "2.0.6",
    contract_name: "ParentResolver"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ParentResolver error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("ParentResolver error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ParentResolver error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ParentResolver error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ParentResolver = Contract;
  }

})();
