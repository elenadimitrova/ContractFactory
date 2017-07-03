pragma solidity ^0.4.8;

import "./TokenLedger.sol";
import "./EternalStorage.sol";

contract OrganisationUpdated
{
  event ProposalAdded(uint256 id, uint256 when);
  event ProposalUpdated(uint256 id, uint256 when);

  TokenLedger public tokenLedger;
  EternalStorage public eternalStorage;

  function OrganisationUpdated(address _tokenLedger, address _eternalStorage) {
    tokenLedger = TokenLedger(_tokenLedger);
    eternalStorage = EternalStorage(_eternalStorage);
  }

  function addProposal(bytes32 _name)
  {
    var newId = proposalsCount();
    eternalStorage.setBytes32Value(sha3("proposal_name", newId), _name);
    eternalStorage.setUIntValue(sha3("proposal_eth", newId), 0);
    eternalStorage.setUIntValue(sha3("ProposalCount"), newId+1);

    ProposalAdded(newId, now);
  }

  function proposalsCount() constant returns (uint256)
  {
    return eternalStorage.getUIntValue(sha3("ProposalCount"));
  }

  function getProposal(uint256 _id) constant returns (bytes32 _name, uint256 _eth)
  {
    var proposalName = eternalStorage.getBytes32Value(sha3("proposal_name", _id));
    var proposalEth = eternalStorage.getUIntValue(sha3("proposal_eth", _id));

    return (proposalName, proposalEth);
  }

  function updateProposal(uint256 _id, bytes32 _name)
  {
    eternalStorage.setBytes32Value(sha3("proposal_name", _id), _name);
    ProposalUpdated(_id, now);
  }

  function fundProposal(uint256 _id) payable
  {
    eternalStorage.setUIntValue(sha3("proposal_eth", _id), msg.value);
  }

  function setProposalFund(uint256 _id, uint256 _eth)
  {
    eternalStorage.setUIntValue(sha3("proposal_eth", _id), _eth);
  }

  function generateTokens(uint256 _amount)
  {
    tokenLedger.generateTokens(_amount);
  }

  function getBalance(address _account) constant returns (uint256)
  {
    return tokenLedger.balanceOf(_account);
  }

  function kill(address upgradedOrganisation_)
  {
    var tokenBalance = tokenLedger.balanceOf(this);
    tokenLedger.transfer(upgradedOrganisation_, tokenBalance);
    selfdestruct(upgradedOrganisation_);
  }

  function coolLogic() constant returns (bool)
  {
    return true;
  }
}
