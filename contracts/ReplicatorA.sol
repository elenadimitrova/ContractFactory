import "ReplicatorB.sol";

contract ReplicatorA {

    address creator;
	address baddress;
	uint blockCreatedOn;

    function Replicator()
    {
        creator = msg.sender;
        baddress = new ReplicatorB();		 // This works just fine because A already knows about B
        blockCreatedOn = block.number;
    }

	function getBAddress() constant returns (address)
	{
		return baddress;
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
