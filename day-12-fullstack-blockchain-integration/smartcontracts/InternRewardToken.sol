// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract InternRewardToken is ERC20 {

    constructor() ERC20("Intern Reward Token", "IRT") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}