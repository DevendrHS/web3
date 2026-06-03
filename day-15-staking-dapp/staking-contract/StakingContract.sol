// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StakingContract {

    mapping(address => uint256) public stakes;

    event Staked(
        address indexed user,
        uint256 amount
    );

    event Withdrawn(
        address indexed user,
        uint256 amount
    );

    function stake() public payable {

        require(
            msg.value > 0,
            "Stake amount must be greater than zero"
        );

        stakes[msg.sender] += msg.value;

        emit Staked(
            msg.sender,
            msg.value
        );
    }

    function withdraw() public {

        uint256 amount =
            stakes[msg.sender];

        require(
            amount > 0,
            "No stake found"
        );

        stakes[msg.sender] = 0;

        payable(msg.sender)
            .transfer(amount);

        emit Withdrawn(
            msg.sender,
            amount
        );
    }

    function getStake(
        address user
    )
        public
        view
        returns(uint256)
    {
        return stakes[user];
    }
}