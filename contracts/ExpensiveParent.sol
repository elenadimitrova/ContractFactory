import "ExpensiveFactory.sol";
import "NodeData.sol";

contract ExpensiveParent {

  ExpensiveFactory public nodeFactory;

  /// @notice registers a Node factory using an address
  /// @param _factoryAddress address used to locate the Node factory contract
  function registerFactory(address _factoryAddress)
  {
    nodeFactory = ExpensiveFactory(_factoryAddress);
  }

  /// @notice creates a Node
  /// @param key_ the key to be used to keep track of the Node
  function createNode(bytes32 key_)
  {
    var data = new NodeData();
    nodeFactory.createNode(key_);
  }

  function removeNode(bytes32 key_)
  {
    nodeFactory.removeNode(key_);
  }

  /// @notice this function can be used to fetch the address of a Node by a key.
  /// @param _key the key of the Node created
  /// @return the address for the given key.
  function getNode(bytes32 _key)
  constant returns (address)
  {
    return nodeFactory.getNode(_key);
  }
}
