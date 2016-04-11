
import "Destructible.sol";
contract IOrganisationFactory is Destructible {

  mapping(bytes32 => address) public organisations;
  address public ParentResolverAddress;

  function createOrganisation(bytes32 key_);

  function removeOrganisation(bytes32 key_);

  function getOrganisation(bytes32 key_) constant returns(address);

  function upgradeOrganisation(bytes32 OrganisationKey_, address OrganisationTemplateAddress_);

  function registerParentResolver(address ParentResolverAddress_);
}
