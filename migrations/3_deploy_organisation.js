var DataVerifiable = artifacts.require("./DataVerifiable.sol");
var EternalStorage = artifacts.require("./EternalStorage.sol");
var Organisation = artifacts.require("./Organisation.sol");
var ProposalsLibrary = artifacts.require("./ProposalsLibrary.sol");
var SecurityLibrary = artifacts.require("./SecurityLibrary.sol");

module.exports = function(deployer) {
  deployer.deploy(DataVerifiable);
  deployer.deploy(ProposalsLibrary);
  deployer.deploy(SecurityLibrary);

  deployer.link(ProposalsLibrary, Organisation);
  deployer.link(SecurityLibrary, Organisation);
  deployer.deploy(Organisation);
};
