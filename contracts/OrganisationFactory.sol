import "Organisation.sol";
import "TaskDB.sol";
import "TokenLedger.sol";

contract OrganisationFactory {

  event OrganisationCreated(address OrganisationAddress, address OrganisationOwner, uint now);
  event OrganisationDeleted(bytes32 OrganisationKey, address OrganisationOwner, uint now);
  event OrganisationUpgraded(address OrganisationAddress, address OrganisationOwner, uint now);

  mapping(bytes32 => address) public organisations;
  address public ParentResolverAddress;

  function OrganisationFactory()
  {

  }

  /// @notice this function registers the address of the ParentResolver
  /// @param ParentResolverAddress_ the default root Organisation resolver address
  function registerParentResolver(address ParentResolverAddress_)
  {
    ParentResolverAddress = ParentResolverAddress_;
  }

  /// @notice creates a Organisation
  /// @param key_ the key to be used to keep track of the Organisation
  function createOrganisation(bytes32 key_)
  {
    if(organisations[key_] != 0x0) throw;

    TokenLedger shareLedger = new TokenLedger();
    TaskDB taskdb = new TaskDB();

    Organisation organisation = new Organisation(ParentResolverAddress, shareLedger, taskdb);

    organisations[key_] = organisation;
    OrganisationCreated(organisation, tx.origin, now);
  }

  function removeOrganisation(bytes32 key_)
  {
    delete organisations[key_];
    OrganisationDeleted(key_, tx.origin, now);
  }

  function getOrganisation(bytes32 key_) constant returns(address)
  {
    return organisations[key_];
  }

  function upgradeOrganisation(bytes32 key_, address OrganisationTemplateAddress_)
  {
    address organisationAddress = organisations[key_];
    // Get the current Organisation and its taskDb
    Organisation organisation = Organisation(organisationAddress);
    TaskDB taskDb = organisation.taskDB();
    TokenLedger shareLedger = organisation.shareLedger();

    // Create a new Organisation and attach existing TaskDB and ShareLedger to it.
    Organisation organisationNew = new Organisation(ParentResolverAddress, shareLedger, taskDb);

    // Switch the Organisationren entry for key_ with the new Organisation
    organisations[key_] = organisationNew;

    OrganisationUpgraded(organisationNew, tx.origin, now);
  }

	function () {
			// This function gets executed if a
			// transaction with invalid data is sent to
			// the contract or just ether without data.
			// We revert the send so that no-one
			// accidentally loses money when using the
			// contract.
			throw;
	}
}
