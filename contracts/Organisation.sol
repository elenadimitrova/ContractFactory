contract Organisation
{
  event ProposalAdded(uint256 id, uint256 when);
  event ProposalUpdated(uint256 id, uint256 when);

  struct Proposal
  {
    string name;
    uint256 eth;
  }

  Proposal[] proposals;

  function Organisation() {
  }

  function makeProposal(string _name)
  {
    uint256 newId = proposals.length++;
    proposals[newId] = Proposal({
      name : _name,
      eth  : 0
    });

    ProposalAdded(newId, now);
  }

  function getProposal(uint256 _id) constant returns (string _name, uint256 _eth)
  {
    var proposal = proposals[_id];
    return (proposal.name, proposal.eth);
  }

  function updateProposal(uint256 _id, string _name)
  {
    proposals[_id].name = _name;
    ProposalUpdated(_id, now);
  }

  function fundProposal(uint256 _id)
  {
    proposals[_id].eth = msg.value;
	}
}
