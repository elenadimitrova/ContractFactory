
contract ReplicatorB {

    address creator;
    uint blockCreatedOn;

    function Replicator()
    {
        creator = msg.sender;
       // next = new ReplicatorA();    // Replicator B can't instantiate A because it doesn't yet know about A
       								   // At the time of this writing (Sept 2015), It's impossible to create cyclical relationships
       								   // either with self-replicating contracts or A-B-A-B
        blockCreatedOn = block.number;
    }

	function getBlockCreatedOn() constant returns (uint)
	{
		return blockCreatedOn;
	}

    /**********
     Standard kill() function to recover funds
     **********/

    function kill()
    {
        if (msg.sender == creator)
        {
            suicide(creator);  // kills this contract and sends remaining funds back to creator
        }
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
