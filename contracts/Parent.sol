import "Organisation.sol";
import "OrganisationUpdated.sol";
import "TokenLedger.sol";

contract Parent {

  event OrganisationCreated(address organisation, uint now);
  event OrganisationUpgraded(address organisation, uint now);

  mapping(bytes32 => address) public organisations;

  function createOrganisation(bytes32 key_)
  {
    var tokenLedger = new TokenLedger();
    var organisation = new Organisation(tokenLedger);
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
    OrganisationUpdated organisationNew = new OrganisationUpdated(tokenLedger);

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
