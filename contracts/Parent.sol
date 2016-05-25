import "Organisation.sol";
import "OrganisationUpdated.sol";

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
    OrganisationUpdated organisationNew = new OrganisationUpdated();

    for (var i = 0; i < organisation.proposalsCount(); i++)
    {
      var (proposalName, proposalEther) = organisation.getProposal(i);
      organisationNew.addProposal(proposalName);
      organisationNew.setProposalFund(i, proposalEther);
    }

    organisation.kill(organisationNew);

    organisations[key_] = organisationNew;
    OrganisationUpgraded(organisationNew, now);
  }
}
