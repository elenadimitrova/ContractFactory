import "Organisation.sol";
import "TaskDB.sol";
import "TokenLedger.sol";

contract Parent {

  event OrganisationCreated(address OrganisationAddress, address OrganisationOwner, uint now);
  event OrganisationDeleted(bytes32 OrganisationKey, address OrganisationOwner, uint now);
  event OrganisationUpgraded(address OrganisationAddress, address OrganisationOwner, uint now);

  mapping(bytes32 => address) public organisations;
  address public ParentResolverAddress;

  /// @notice creates a Organisation
  /// @param key_ the key to be used to keep track of the Organisation
  function createOrganisation(bytes32 key_)
  {
    if(organisations[key_] != 0x0) throw;

    TokenLedger shareLedger = new TokenLedger();
    TaskDB taskdb = new TaskDB();

    var organisation = new Organisation(this, shareLedger, taskdb);

    organisations[key_] = organisation;
    OrganisationCreated(organisation, tx.origin, now);
  }

  function removeOrganisation(bytes32 key_)
  {
    delete organisations[key_];
    OrganisationDeleted(key_, tx.origin, now);
  }

  /// @notice this function can be used to fetch the address of a Organisation by a key.
  /// @param key_ the key of the Organisation created
  /// @return the address for the given key.
  function getOrganisation(bytes32 key_)
  constant returns (address)
  {
    return organisations[key_];
  }

/* Comment the method below to shorten the contract and make the test pass */

  function upgradeOrganisation(bytes32 key_, address OrganisationTemplateAddress_)
  {
    address organisationAddress = organisations[key_];
    // Get the current Organisation and its taskDb
    Organisation organisation = Organisation(organisationAddress);
    TaskDB taskDb = organisation.taskDB();
    TokenLedger shareLedger = organisation.shareLedger();
    // Create a new Organisation and attach existing TaskDB and ShareLedger to it.
    Organisation organisationNew = new Organisation(this, shareLedger, taskDb);

    // Switch the Organisationren entry for key_ with the new Organisation
    organisations[key_] = organisationNew;

    OrganisationUpgraded(organisationNew, tx.origin, now);
  }
}
