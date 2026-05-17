// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin Imports
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TaskCompletionToken is ERC20, ERC20Burnable, Ownable {

    // Constructor
    constructor()
        ERC20("Task Completion Token", "TCT")
        Ownable(msg.sender)
    {

        // Initial Supply
        _mint(msg.sender, 1000 * 10 ** decimals());

    }

    // Mint New Tokens
    function mint(address to, uint256 amount)
        public
        onlyOwner
    {

        _mint(to, amount);

    }
}