import "TaskDB.sol";
import "TokenLedger.sol";

contract Organisation {

  event TaskCompletedAndPaid (address _from, address indexed _to, uint256 indexed _ethValue, uint256 indexed _sharesValue);

  modifier onlyOwner {
    if ( !this.getUserInfo(msg.sender)) throw;
    _
  }

	struct User
	{
		bool admin;  // if true, that person is an admin
	}

  address public parentResolver;
  TokenLedger public shareLedger;
  TaskDB public taskDB;

 	// This declares a state variable that
	// stores a `User` struct for each possible address.
 	mapping(address => User) public users;

  function Organisation(
    address ParentResolverAddress_,
    address _shareLedgerAddress,
    address _tasksDBAddress)
  {
    users[tx.origin].admin = true;
    parentResolver = ParentResolverAddress_;
    shareLedger = TokenLedger(_shareLedgerAddress);
    taskDB = TaskDB(_tasksDBAddress);
  }

  /// @notice registers a new ITaskDB contract
  /// @param _tasksDBAddress the address of the ITaskDB
  function registerTaskDB(address _tasksDBAddress)
  {
    taskDB = TaskDB(_tasksDBAddress);
  }

  /// @notice contribute ETH to a task
  /// @param taskId the task ID
	function contributeEth(uint256 taskId) {
    var isTaskAccepted = taskDB.isTaskAccepted(taskId);
		if (isTaskAccepted)
			throw;

    taskDB.contributeEth(taskId, msg.value);
	}

	//Contribute Shares to a task
	function contributeShares(uint256 taskId, uint256 shares) {
    var isTaskAccepted = taskDB.isTaskAccepted(taskId);
    if (isTaskAccepted)
      throw;

    taskDB.contributeShares(taskId, shares);
		shareLedger.transfer(this, shares);
	}

  /// @notice this function adds a task to the task DB.
  /// @param _name the task name
  /// @param _summary an IPFS hash
  function makeTask(
    string _name,
    string _summary
  )
  {
      taskDB.makeTask(_name, _summary);
  }

  /// @notice this function updates the 'accepted' flag in the task
  /// @param _id the task id
  function acceptTask(uint256 _id)
  {
    taskDB.acceptTask(_id);
  }

  /// @notice this function is used to update task data.
  /// @param _id the task id
  /// @param _name the task name
  /// @param _summary an IPFS hash
  function updateTask(
    uint256 _id,
    string _name,
    string _summary
  )
  {
    taskDB.updateTask(_id, _name, _summary);
  }

	function getUserInfo(address userAddress)
  constant returns (bool admin)
  {
		return users[userAddress].admin;
	}
}
