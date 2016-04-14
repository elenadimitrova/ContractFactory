import "NodeData.sol";
import "ParentResolver.sol";
import "TokenLedger.sol";

contract BigNodeContract {

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
  
  modifier onlyOwner {
    if ( !this.getUserInfo(msg.sender)) throw;
    _
  }

  mapping (address => uint256) public balances;
  mapping (address => mapping (address => uint256)) public allowed;
  uint256 public totalSupply;

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

  function BigNodeContract(
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

  function transfer(address _to, uint256 _value) returns (bool success) {
    //Default assumes totalSupply can't be over max (2^256 - 1).
    //If your token leaves out totalSupply and can issue more tokens as time goes on, you need to check if it doesn't wrap.
    //Replace the if with this one instead.
    //if (balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]) {
    if (balances[msg.sender] >= _value && _value > 0) {
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        Transfer(msg.sender, _to, _value);
        return true;
    } else { return false; }
  }

  //NOTE: This function will throw errors wrt changing storage where it should not, due to the optimizer errors, IF not careful.
  //As it is now, it works for both earlier and newer solc versions. (NO need to change anything)
  //In the future, the TransferFrom event will be moved to just before "return true;" in order to make it more elegant (once the new solc version is out of develop).
  //If you want to move parts of this function around and it breaks, you'll need at least:
  //Over commit: https://github.com/ethereum/solidity/commit/67c855c583042ddee6261a9921239a3afd086c14 (last successfully working commit)
  //See issue for details: https://github.com/ethereum/solidity/issues/333 & issue: https://github.com/ethereum/solidity/issues/281
  function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
      //same as above. Replace this line with the following if you want to protect against wrapping uints.
      //if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && balances[_to] + _value > balances[_to]) {
      if (balances[_from] >= _value && allowed[_from][msg.sender] >= _value && _value > 0) {
          balances[_to] += _value;
          Transfer(_from, _to, _value);
          balances[_from] -= _value;
          allowed[_from][msg.sender] -= _value;
          return true;
      } else { return false; }
  }

  function balanceOf(address _owner) constant returns (uint256 balance) {
      return balances[_owner];
  }

  function approve(address _spender, uint256 _value) returns (bool success) {
      allowed[msg.sender][_spender] = _value;
      Approval(msg.sender, _spender, _value);
      return true;
  }

  function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
    return allowed[_owner][_spender];
  }

  function functionOne(uint a){
      var x = 1;
  }

  function functionTwo(bytes32 b){
    var x = 1;

  }

  function functionThree(uint a){
      var x = 1;
  }

  function functionFour(bytes32 b){
    var x = 1;
  }

  function functionFive(string c, uint d){
    var x = 1;
  }

  function getNumber()
  constant returns (uint)
  {
    return 1;
  }

  function functionSix(address one, address two){
    var x = 1;
  }

  function functionEight(){
    var x = 1;
    x++;
  }
}
