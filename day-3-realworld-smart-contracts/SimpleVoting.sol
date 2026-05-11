// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleVoting {

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;

    uint256 public candidateCount;

    mapping(address => bool) public hasVoted;

    function addCandidate(string memory _name) public {
        candidateCount++;

        candidates[candidateCount] = Candidate(_name, 0);
    }

    function vote(uint256 _candidateId) public {

        require(!hasVoted[msg.sender], "You already voted");

        require(
            _candidateId > 0 &&
            _candidateId <= candidateCount,
            "Invalid candidate"
        );

        candidates[_candidateId].voteCount++;

        hasVoted[msg.sender] = true;
    }

    function getVotes(uint256 _candidateId)
        public
        view
        returns(uint256)
    {
        return candidates[_candidateId].voteCount;
    }
}