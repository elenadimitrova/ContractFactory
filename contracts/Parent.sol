pragma solidity ^0.4.8;

import "./Organisation.sol";
import "./OrganisationUpdated.sol";
import "./TokenLedger.sol";
import "./EternalStorage.sol";
import "./SecurityLibrary.sol";

contract Parent {

  event OrganisationCreated(address organisation, uint now);
  event OrganisationUpgraded(address organisation, uint now);

  using SecurityLibrary for EternalStorage;

  mapping(bytes32 => address) public organisations;

  function createOrganisation(bytes32 key_)
  {
    var tokenLedger = new TokenLedger();
    var eternalStorage = new EternalStorage();
    // Set the calling user as the first colony admin
    eternalStorage.addAdmin(msg.sender);

    var organisation = new Organisation(tokenLedger, eternalStorage);
    // Set the organisation as the storage owner
    eternalStorage.changeOwner(organisation);

    organisations[key_] = organisation;
    OrganisationCreated(organisation, now);
  }

  function getOrganisation(bytes32 key_) constant returns (address)
  {
    return organisations[key_];
  }

  function upgradeOrganisation(bytes32 key_)
  {
    address organisationAddress = organisations[key_];
    var organisation = Organisation(organisationAddress);
    var tokenLedger = organisation.tokenLedger();
    var eternalStorage = organisation.eternalStorage();

    OrganisationUpdated organisationNew = new OrganisationUpdated(tokenLedger, eternalStorage);

    organisation.kill(organisationNew);

    organisations[key_] = organisationNew;
    OrganisationUpgraded(organisationNew, now);
  }
}
