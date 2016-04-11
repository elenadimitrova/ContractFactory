// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"ParentAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_ParentAddress","type":"address"}],"name":"registerParent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"newContract","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"},{"indexed":false,"name":"_now","type":"uint256"}],"name":"OwnerChanged","type":"event"}],
    binary: "606060405260008054600160a060020a0319163317905560003411156022576002565b6101a0806100306000396000f36060604052361561004b5760e060020a60003504635beb8a3181146100535780638da5cb5b14610065578063a6f9dae114610077578063baa0ad1114610098578063cbf0b0c0146100ac575b6100cd610002565b6100cf600154600160a060020a031681565b6100cf600054600160a060020a031681565b6100cd60043560005433600160a060020a0390811691161461014c57610002565b6100cd600435600034111561018557610002565b6100cd60043560005433600160a060020a039081169116146100e257610002565b005b600160a060020a03166060908152602090f35b80600160a060020a0316ff5b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b80600160a060020a0316600014156100ee57610002565b6001805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b60005433600160a060020a039081169116146101635761000256",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560003411156022576002565b6101a0806100306000396000f36060604052361561004b5760e060020a60003504635beb8a3181146100535780638da5cb5b14610065578063a6f9dae114610077578063baa0ad1114610098578063cbf0b0c0146100ac575b6100cd610002565b6100cf600154600160a060020a031681565b6100cf600054600160a060020a031681565b6100cd60043560005433600160a060020a0390811691161461014c57610002565b6100cd600435600034111561018557610002565b6100cd60043560005433600160a060020a039081169116146100e257610002565b005b600160a060020a03166060908152602090f35b80600160a060020a0316ff5b600054426060908152600160a060020a038084169216907f4c37b24b600916176446859ec41fb06842ec1dfaeeb0bee28784b51f24b8c30890602090a380600060006101000a815481600160a060020a030219169083021790555050565b80600160a060020a0316600014156100ee57610002565b6001805473ffffffffffffffffffffffffffffffffffffffff19168217905550565b60005433600160a060020a039081169116146101635761000256",
    address: "0xb9e228825a6c6baa9dc4cd911bd649b949e12c33",
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
