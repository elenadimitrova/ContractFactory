pragma solidity ^0.4.8;

import "./EternalStorage.sol";

library ProposalsLibrary {
  event ProposalAdded(bytes32 key, uint256 count, uint256 when);
  event ProposalUpdated(bytes32 key, uint256 when);

	function getProposalCount(address _storageContract) constant returns(uint256) {
		return EternalStorage(_storageContract).getUIntValue(sha3("ProposalCount"));
	}

  function getProposal(address _storageContract, uint256 _id) constant returns (bytes32 proposalName, uint256 proposalEth)
  {
    proposalName = EternalStorage(_storageContract).getBytes32Value(sha3("proposal_name", _id));
    proposalEth = EternalStorage(_storageContract).getUIntValue(sha3("proposal_eth", _id));
  }

  function addProposal(address _storageContract, bytes32 _name)
  {
    var idx = getProposalCount(_storageContract);
    EternalStorage(_storageContract).setBytes32Value(sha3("proposal_name", idx), _name);
    EternalStorage(_storageContract).setUIntValue(sha3("proposal_eth", idx), 0);
    EternalStorage(_storageContract).setUIntValue(sha3("ProposalCount"), idx + 1);
		ProposalAdded(sha3("proposal_name", idx), idx, now);
  }

  function updateProposal(address _storageContract, uint256 _id, bytes32 _name)
  {
    EternalStorage(_storageContract).setBytes32Value(sha3("proposal_name", _id), _name);

    ProposalUpdated(sha3("proposal_name", _id), now);
  }

  function fundProposal(address _storageContract, uint256 _id)
  {
    EternalStorage(_storageContract).setUIntValue(sha3("proposal_eth", _id), msg.value);
  }

  function setProposalFund(address _storageContract, uint256 _id, uint256 _eth)
  {
    EternalStorage(_storageContract).setUIntValue(sha3("proposal_eth", _id), _eth);
  }
}
