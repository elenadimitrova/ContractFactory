var DataVerifiable = artifacts.require("./DataVerifiable.sol");
var EternalStorage = artifacts.require("./EternalStorage.sol");
var Organisation = artifacts.require("./Organisation.sol");
var OrganisationUpdated = artifacts.require("./OrganisationUpdated.sol");
var Ownable = artifacts.require("./Ownable.sol");
var Parent = artifacts.require("./Parent.sol");
var ProposalsLibrary = artifacts.require("./ProposalsLibrary.sol");
var SecurityLibrary = artifacts.require("./SecurityLibrary.sol");
var TokenLedger = artifacts.require("./TokenLedger.sol");

module.exports = function(deployer) {
  deployer.deploy(DataVerifiable);
  deployer.deploy(EternalStorage);
  deployer.deploy(OrganisationUpdated);
  deployer.deploy(Ownable);
  deployer.deploy(TokenLedger);

  deployer.deploy(ProposalsLibrary);
  deployer.deploy(SecurityLibrary);
  deployer.link(ProposalsLibrary, Organisation);
  deployer.link(SecurityLibrary, Organisation);
  deployer.deploy(Organisation);

  deployer.link(ProposalsLibrary, Parent);
  deployer.link(SecurityLibrary, Parent);
  deployer.deploy(Parent);
};
