var EternalStorage = artifacts.require("./EternalStorage.sol");
var SecurityLibrary = artifacts.require("./SecurityLibrary.sol");
var TokenLedger = artifacts.require("./TokenLedger.sol");
var Parent = artifacts.require("./Parent.sol");

module.exports = function(deployer) {
  deployer.deploy(EternalStorage);
  deployer.deploy(SecurityLibrary);
  deployer.deploy(TokenLedger);

  deployer.link(SecurityLibrary, Parent);
  deployer.deploy(Parent);
};
