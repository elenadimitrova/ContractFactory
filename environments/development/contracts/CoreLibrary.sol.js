// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"_value","type":"string"}],"name":"isEmptyString","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"bytes"}],"name":"isEmptyByteArray","outputs":[{"name":"","type":"bool"}],"type":"function"}],
    binary: "606060405260868060106000396000f365020191a6b35f50606060405260e060020a6000350463a45f379e8114602e578063c84a8b8d14602e575b6007565b60206004803580820135601f8101849004909302608090810160405260608481526074946024939192918401918190838280828437505093516000149695505050505050565b60408051918252519081900360200190f3",
    unlinked_binary: "606060405260868060106000396000f365020191a6b35f50606060405260e060020a6000350463a45f379e8114602e578063c84a8b8d14602e575b6007565b60206004803580820135601f8101849004909302608090810160405260608481526074946024939192918401918190838280828437505093516000149695505050505050565b60408051918252519081900360200190f3",
    address: "",
    generated_with: "2.0.6",
    contract_name: "CoreLibrary"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("CoreLibrary error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("CoreLibrary error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("CoreLibrary error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("CoreLibrary error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.CoreLibrary = Contract;
  }

})();
