import "TokenLedger.sol";

contract OrganisationUpdated
{
  event ProposalAdded(uint256 id, uint256 when);
  event ProposalUpdated(uint256 id, uint256 when);

  struct Proposal
  {
    bytes32 name;
    uint256 eth;
  }

  Proposal[] proposals;
  TokenLedger tokenLedger;

  function OrganisationUpdated(address _tokenLedger) {
    tokenLedger = TokenLedger(_tokenLedger);
  }

  function addProposal(bytes32 _name)
  {
    uint256 newId = proposals.length++;
    proposals[newId] = Proposal({
      name : _name,
      eth  : 0
    });

    ProposalAdded(newId, now);
  }

  function proposalsCount() constant returns (uint256)
  {
    return proposals.length;
  }

  function getProposal(uint256 _id) constant returns (bytes32 _name, uint256 _eth)
  {
    var proposal = proposals[_id];
    return (proposal.name, proposal.eth);
  }

  function updateProposal(uint256 _id, bytes32 _name)
  {
    proposals[_id].name = _name;
    ProposalUpdated(_id, now);
  }

  function fundProposal(uint256 _id)
  {
    proposals[_id].eth = msg.value;
	}

  function setProposalFund(uint256 _id, uint256 _eth)
  {
    proposals[_id].eth = _eth;
  }

  function kill(address upgradedOrganisation_)
  {
      selfdestruct(upgradedOrganisation_);
  }

  function generateTokens(uint256 _amount)
  {
    tokenLedger.generateTokens(_amount);
  }

  function getBalance(address _account) constant returns (uint256)
  {
    return tokenLedger.balanceOf(_account);
  }

  function coolLogic() constant returns (bool)
  {
    return true;
  }
}
