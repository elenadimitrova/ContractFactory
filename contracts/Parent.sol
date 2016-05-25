import "Organisation.sol";

contract Parent {

  event OrganisationCreated(address organisation, uint now);
  event OrganisationUpgraded(address organisation, uint now);

  mapping(bytes32 => address) public organisations;

  function createOrganisation(bytes32 key_)
  {
    var organisation = new Organisation();
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
    Organisation organisationNew = new Organisation();
    organisations[key_] = organisationNew;
    OrganisationUpgraded(organisationNew, now);
  }
}
