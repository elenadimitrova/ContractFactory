import "Organisation.sol";
import "OrganisationUpdated.sol";
import "TokenLedger.sol";
import "EternalStorage.sol";

contract Parent {

  event OrganisationCreated(address organisation, uint now);
  event OrganisationUpgraded(address organisation, uint now);

  mapping(bytes32 => address) public organisations;

  function createOrganisation(bytes32 key_)
  {
    var tokenLedger = new TokenLedger();
    var eternalStorage = new EternalStorage();

    var organisation = new Organisation(tokenLedger, eternalStorage);

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
