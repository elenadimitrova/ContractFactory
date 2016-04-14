// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"ParentAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_ParentAddress","type":"address"}],"name":"registerParent","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260798060106000396000f36060604052361560275760e060020a60003504635beb8a318114602d578063baa0ad1114604b575b606d6002565b606f60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b6060908152602090f3",
    unlinked_binary: "606060405260798060106000396000f36060604052361560275760e060020a60003504635beb8a318114602d578063baa0ad1114604b575b606d6002565b606f60005473ffffffffffffffffffffffffffffffffffffffff1681565b6000805473ffffffffffffffffffffffffffffffffffffffff19166004351790555b005b6060908152602090f3",
    address: "0x21c6c96152f18119bd393897b1e393c57bc354e8",
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
