// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"taskDB","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"admin","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"ParentResolverAddress_","type":"address"}],"name":"registerParentResolver","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"parentResolver","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"admin","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"shareLedger","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_tasksDBAddress","type":"address"}],"name":"registerTaskDB","outputs":[],"type":"function"},{"inputs":[{"name":"ParentResolverAddress_","type":"address"},{"name":"_shareLedgerAddress","type":"address"},{"name":"_tasksDBAddress","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_ethValue","type":"uint256"},{"indexed":true,"name":"_sharesValue","type":"uint256"}],"name":"TaskCompletedAndPaid","type":"event"}],
    binary: "60606040526040516060806101b583395060c06040525160805160a051600160a060020a0332166000908152600360205260408120805460ff191660019081179091558154600160a060020a031990811686179092558054821684179055600280549091168217905550505061013c806100796000396000f3606060405236156100615760e060020a60003504634f6765d781146100635780636386c1c71461007557806371f5a54c1461009e5780638f4182f7146100c4578063a87430ba146100d6578063d97b94e9146100f1578063f08762e214610103575b005b610129600254600160a060020a031681565b600160a060020a036004351660009081526003602052604090205460ff165b6060908152602090f35b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610061565b610129600054600160a060020a031681565b61009460043560036020526000908152604090205460ff1681565b610129600154600160a060020a031681565b6002805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610061565b600160a060020a03166060908152602090f3",
    unlinked_binary: "60606040526040516060806101b583395060c06040525160805160a051600160a060020a0332166000908152600360205260408120805460ff191660019081179091558154600160a060020a031990811686179092558054821684179055600280549091168217905550505061013c806100796000396000f3606060405236156100615760e060020a60003504634f6765d781146100635780636386c1c71461007557806371f5a54c1461009e5780638f4182f7146100c4578063a87430ba146100d6578063d97b94e9146100f1578063f08762e214610103575b005b610129600254600160a060020a031681565b600160a060020a036004351660009081526003602052604090205460ff165b6060908152602090f35b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610061565b610129600054600160a060020a031681565b61009460043560036020526000908152604090205460ff1681565b610129600154600160a060020a031681565b6002805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610061565b600160a060020a03166060908152602090f3",
    address: "",
    generated_with: "2.0.6",
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
      throw new Error("Organisation error: lease call load() first before calling at().");
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
