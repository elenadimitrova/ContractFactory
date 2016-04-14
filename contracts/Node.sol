import "NodeData.sol";
import "ParentResolver.sol";
import "TokenLedger.sol";

contract Node {

  modifier onlyOwner {
    if ( !this.getUserInfo(msg.sender)) throw;
    _
  }

	struct User
	{
		bool admin;  // if true, that person is an admin
	}

  ParentResolver public parentResolver;
  TokenLedger public ledger;
  NodeData public nodeData;

 	// This declares a state variable that
	// stores a `User` struct for each possible address.
 	mapping(address => User) public users;

  function Node(
    address parentResolverAddress_,
    address _ledgerAddress,
    address _nodeDataAddress)
  {
    users[tx.origin].admin = true;
    parentResolver = ParentResolver(parentResolverAddress_);
    ledger = TokenLedger(_ledgerAddress);
    nodeData = NodeData(_nodeDataAddress);
  }

  /// @notice registers a new ParentResolver contract.
  /// Used to keep the reference of the Parent.
  /// @param ParentResolverAddress_ the ParentResolver address
  function registerParentResolver(address ParentResolverAddress_)
  {
    parentResolver = ParentResolver(ParentResolverAddress_);
  }

  /// @notice registers a new nodeData contract
  /// @param _nodeDataDBAddress the address of the NodeData contract
  function registerNodeData(address _nodeDataDBAddress)
  {
    nodeData = NodeData(_nodeDataDBAddress);
  }

  /// @notice contribute to a data
  /// @param dataId the data ID
	function contribute(uint256 dataId) {
    var isDataAccepted = nodeData.isDataAccepted(dataId);
		if (isDataAccepted)
			throw;

    nodeData.contribute(dataId, msg.value);
	}

  function getParent()
  constant returns(address)
  {
    return parentResolver.parentAddress();
  }

  /// @notice this function adds a data to the data DB.
  /// @param _name the data name
  /// @param _summary a summary
  function makeData(
    string _name,
    string _summary
  )
  {
      nodeData.makeData(_name, _summary);
  }

  /// @notice this function updates the 'accepted' flag in the data
  /// @param _id the data id
  function acceptData(uint256 _id)
  {
    nodeData.acceptData(_id);
  }

  /// @notice this function is used to update data data.
  /// @param _id the data id
  /// @param _name the data name
  /// @param _summary a summary
  function updateData(
    uint256 _id,
    string _name,
    string _summary
  )
  {
    nodeData.updateData(_id, _name, _summary);
  }

	function getUserInfo(address userAddress)
  constant returns (bool admin)
  {
		return users[userAddress].admin;
	}

  //Mark a data as completed, pay a user, pay root Node fee
  function pay(uint256 dataId, address paymentAddress)
  {
    var dataEth = nodeData.getDataBalance(dataId);
    nodeData.acceptData(dataId);
  }

  function randomFunctionOne(){
      var x = 1;
  }

  function randomFunctionTwo(){
    var x = 1;

  }

  function randomFunctionThree(){
    var x = 1;

  }

  function randomFunctionFour(){
    var x = 1;

  }

  function randomFunctionFifth(){
    var x = 1;

  }
}
