// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AttendanceToken is ERC20 {

    // Store last attendance time
    mapping(address => uint256) public lastAttendance;

    constructor()
        ERC20("Attendance Token", "ATK")
    {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    // Mark attendance once every 24 hours
    function markAttendance() public {

        require(
            block.timestamp >= lastAttendance[msg.sender] + 1 days,
            "Attendance already marked today"
        );

        lastAttendance[msg.sender] = block.timestamp;

        // Reward 5 tokens
        _mint(msg.sender, 5 * 10 ** decimals());
    }
}