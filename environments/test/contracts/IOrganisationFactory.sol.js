// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"key_","type":"bytes32"}],"name":"getOrganisation","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"OrganisationKey_","type":"bytes32"},{"name":"OrganisationTemplateAddress_","type":"address"}],"name":"upgradeOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"createOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"ParentResolverAddress_","type":"address"}],"name":"registerParentResolver","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"removeOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"newContract","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"organisations","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"ParentResolverAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_previousOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"},{"indexed":false,"name":"_now","type":"uint256"}],"name":"OwnerChanged","type":"event"}],
    binary: "",
    unlinked_binary: "",
    address: "",
    generated_with: "2.0.6",
    contract_name: "IOrganisationFactory"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("IOrganisationFactory error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("IOrganisationFactory error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("IOrganisationFactory error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("IOrganisationFactory error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.IOrganisationFactory = Contract;
  }

})();
