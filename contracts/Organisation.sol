pragma solidity ^0.4.8;

import "./ITokenLedger.sol";
import "./ProposalsLibrary.sol";
import "./SecurityLibrary.sol";
import "./DataVerifiable.sol";

contract Organisation is DataVerifiable
{
  ITokenLedger public tokenLedger;
  using ProposalsLibrary for address;
  using SecurityLibrary for address;
  address public eternalStorage;

  function Organisation(address _tokenLedger, address _eternalStorage) {
    tokenLedger = ITokenLedger(_tokenLedger);
    eternalStorage = _eternalStorage;
  }

  modifier onlyAdmins {
    if (!eternalStorage.isUserAdmin(msg.sender)) throw;
    _;
  }

  function addProposal(bytes32 _name)
  onlyAdmins
  refundEtherSentByAccident
  throwIfIsEmptyBytes32(_name)
  {
    eternalStorage.addProposal(_name);
  }

  function proposalsCount() constant returns (uint256)
  {
    return eternalStorage.getProposalCount();
  }

  function getProposal(uint256 _id) constant returns (bytes32 _name, uint256 _eth)
  {
    return eternalStorage.getProposal(_id);
  }

  function updateProposal(uint256 _id, bytes32 _name)
  {
    eternalStorage.updateProposal(_id, _name);
  }

  function fundProposal(uint256 _id) payable
  {
    eternalStorage.fundProposal(_id);
  }

  function setProposalFund(uint256 _id, uint256 _eth)
  {
    eternalStorage.setProposalFund(_id, _eth);
  }

  function generateTokens(uint256 _amount)
  {
    tokenLedger.generateTokens(_amount);
  }

  function getBalance(address _account) constant returns (uint256)
  {
    return tokenLedger.balanceOf(_account);
  }

  function setTokenLedgerAddress(address _tokenLedger)
  {
    tokenLedger = ITokenLedger(_tokenLedger);
  }

  function kill(address upgradedOrganisation_)
  {
    var tokenBalance = tokenLedger.balanceOf(this);
    tokenLedger.transfer(upgradedOrganisation_, tokenBalance);
    selfdestruct(upgradedOrganisation_);
  }
}
