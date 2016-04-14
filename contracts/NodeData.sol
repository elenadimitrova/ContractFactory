contract NodeData {

  function NodeData() {
  }

	struct Data
	{
		string name; //Short name
		string summary; //a summary
		bool accepted; //Whether the work has been accepted
		uint256 contributed; //Amount of ETH contributed to the data
	}

	Data[] public data;

  function makeData(
    string _name,
    string _summary
  )
  {
    var dataId = data.length++;
    data[dataId] = Data({
      name         : _name,
    	summary       : _summary,
    	accepted      : false,
    	contributed   : 0
    });
  }

  /// @notice this function returns the number of data
  /// @return the number of data in DB
  function count() constant returns(uint256) {
    return data.length;
  }

  /// @notice this data is useful when we need to know if a data exists
  /// @param _id the data id
  /// @return true - if the data if is valid, false - if the data id is invalid.
  function hasData(uint256 _id) constant returns(bool) {
    return (!(_id >= data.length));
  }

  /// @notice this function returns if a data was accepted
  /// @param _id the data id
  /// @return a flag indicating if the data was accepted or not
  function isDataAccepted(uint256 _id)
  constant returns(bool)
  {
    return (data[_id].accepted);
  }

  /// @notice this function updates the 'accepted' flag in the data
  /// @param _id the data id
  function acceptData(uint256 _id)
  {
    if(data[_id].accepted) throw;
    data[_id].accepted = true;
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
    if(data[_id].accepted) throw;

    data[_id].name = _name;
    data[_id].summary = _summary;
  }

  function getData(uint256 _id)
  constant returns (
      string _name,
      string _summary,
      bool _accepted,
      uint256 _contributed
  )
  {
    var _data = data[_id];
    return (
      _data.name,
      _data.summary,
      _data.accepted,
      _data.contributed
    );
  }


    function getDataBalance(uint256 _id)
    constant returns (
        uint256 _contributed
    )
    {
      return data[_id].contributed;
    }

  function contribute(uint256 _id, uint256 _amount)
  {
    if(data[_id].contributed + _amount <= data[_id].contributed) throw;
    if(data[_id].accepted) throw;

    data[_id].contributed += _amount;
  }
}
