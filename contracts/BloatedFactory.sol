import "BigNodeContract.sol";
import "NodeData.sol";
import "Node.sol";
import "TokenLedger.sol";
import "Token.sol";
import "AnotherTokenLedger.sol";
import "ReplicatorA.sol";
import "ReplicatorB.sol";
import "Greeter.sol";
import "ParentResolver.sol";

contract BloatedFactory {

  event NodeCreated(address NodeAddress, address NodeOwner, uint now);
  event NodeDeleted(bytes32 NodeKey, address NodeOwner, uint now);

  mapping(bytes32 => address) public nodes;
  address public parentResolverAddress;

  function BloatedFactory()
  {

  }

  /// @notice this function registers the address of the ParentResolver
  /// @param parentResolverAddress_ the default root Node resolver address
  function registerParentResolver(address parentResolverAddress_)
  {
    parentResolverAddress = parentResolverAddress_;
  }

  /// @notice creates a BigNodeContract
  /// @param key_ the key to be used to keep track of the Node
  function createNode(bytes32 key_)
  {
    if(nodes[key_] != 0x0) throw;

    TokenLedger ledger = new TokenLedger(100);
    NodeData data = new NodeData();
    var replicatorA = new ReplicatorA();
    var replicatorB = new ReplicatorB();
    var greeter = new Greeter("Ahoy");
    var node = new Node(parentResolverAddress, ledger, data);
    AnotherTokenLedger anotherTokenLedger = new AnotherTokenLedger(100);
    BigNodeContract bigNode = new BigNodeContract(parentResolverAddress, ledger, data);
    bigNode.registerNodeData(data);

    nodes[key_] = node;
    NodeCreated(node, tx.origin, now);
  }

  function removeNode(bytes32 key_)
  {
    delete nodes[key_];
    NodeDeleted(key_, tx.origin, now);
  }

  function getNode(bytes32 key_) constant returns(address)
  {
    return nodes[key_];
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
