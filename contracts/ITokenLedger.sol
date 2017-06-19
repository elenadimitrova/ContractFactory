pragma solidity ^0.4.8;

contract ITokenLedger {

    function setTokensSymbol(bytes4 _symbol);

    function setTokensTitle(bytes32 _title);

    function totalSupply() constant returns (uint256 supply) {}

    function balanceOf(address _owner) constant returns (uint256 balance) {}

    function transfer(address _to, uint256 _value)  {}

    function transferFrom(address _from, address _to, uint256 _value) {}

    function approve(address _spender, uint256 _value) {}

    function allowance(address _owner, address _spender) constant returns (uint256 remaining) {}

    function generateTokens(uint256 _amount) {}

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
