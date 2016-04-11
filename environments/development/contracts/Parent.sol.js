// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getOrganisation","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_key","type":"bytes32"},{"name":"OrganisationTemplateAddress_","type":"address"}],"name":"upgradeOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"createOrganisation","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"removeOrganisation","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"organisationFactory","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_OrganisationFactoryAddress","type":"address"}],"name":"registerOrganisationFactory","outputs":[],"type":"function"}],
    binary: "6060604052610244806100126000396000f3606060405236156100565760e060020a600035046304291e7281146100585780632181a292146100c25780636b46fdc01461012d57806395948c8b1461018e578063c31283fa146101ef578063e197019914610201575b005b610227600435600080547f04291e720000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116906304291e729060849060209060248187876161da5a03f115610002575050604051519392505050565b610056600435602435600080547f2181a2920000000000000000000000000000000000000000000000000000000060609081526064859052600160a060020a0384811660845290911691632181a2929160a4919060448183876161da5a03f115610002575050505050565b610056600435600080547f6b46fdc00000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a0390911691636b46fdc0916084919060248183876161da5a03f1156100025750505050565b610056600435600080547f95948c8b0000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116916395948c8b916084919060248183876161da5a03f1156100025750505050565b610227600054600160a060020a031681565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610056565b60408051600160a060020a03929092168252519081900360200190f3",
    unlinked_binary: "6060604052610244806100126000396000f3606060405236156100565760e060020a600035046304291e7281146100585780632181a292146100c25780636b46fdc01461012d57806395948c8b1461018e578063c31283fa146101ef578063e197019914610201575b005b610227600435600080547f04291e720000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116906304291e729060849060209060248187876161da5a03f115610002575050604051519392505050565b610056600435602435600080547f2181a2920000000000000000000000000000000000000000000000000000000060609081526064859052600160a060020a0384811660845290911691632181a2929160a4919060448183876161da5a03f115610002575050505050565b610056600435600080547f6b46fdc00000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a0390911691636b46fdc0916084919060248183876161da5a03f1156100025750505050565b610056600435600080547f95948c8b0000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116916395948c8b916084919060248183876161da5a03f1156100025750505050565b610227600054600160a060020a031681565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610056565b60408051600160a060020a03929092168252519081900360200190f3",
    address: "",
    generated_with: "2.0.6",
    contract_name: "Parent"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Parent error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Parent error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Parent = Contract;
  }

})();
