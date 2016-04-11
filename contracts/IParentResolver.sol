
import "Destructible.sol";
contract IParentResolver is Destructible {

  address public ParentAddress;
  
  /// @notice this function takes an address (Supposedly, the Parent address)
  /// @param _ParentAddress the Parent address
  function registerParent(address _ParentAddress);
}
