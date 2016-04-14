import "OrganisationFactory.sol";
import "TaskDB.sol";

contract Parent {

  OrganisationFactory public organisationFactory;

  /// @notice registers a Organisation factory using an address
  /// @param _OrganisationFactoryAddress address used to locate the Organisation factory contract
  function registerOrganisationFactory(address _OrganisationFactoryAddress)
  {
    organisationFactory = OrganisationFactory(_OrganisationFactoryAddress);
  }

  /// @notice creates a Organisation
  /// @param key_ the key to be used to keep track of the Organisation
  function createOrganisation(bytes32 key_)
  {
    organisationFactory.createOrganisation(key_);
  }

  function removeOrganisation(bytes32 key_)
  {
    organisationFactory.removeOrganisation(key_);
  }

  /// @notice this function can be used to fetch the address of a Organisation by a key.
  /// @param _key the key of the Organisation created
  /// @return the address for the given key.
  function getOrganisation(bytes32 _key)
  constant returns (address)
  {
    return organisationFactory.getOrganisation(_key);
  }

  function upgradeOrganisation(bytes32 _key, address OrganisationTemplateAddress_)
  {
    return organisationFactory.upgradeOrganisation(_key, OrganisationTemplateAddress_);
  }
}
