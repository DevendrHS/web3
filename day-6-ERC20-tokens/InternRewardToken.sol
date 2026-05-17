// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin Imports
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract InternRewardToken is 
    ERC20,
    Ownable,
    ERC20Burnable,
    Pausable
{

    // Maximum token supply
    uint256 public maxSupply = 1000000 * 10 ** 18;

    // Constructor
    constructor() 
        ERC20("Intern Reward Token", "IRT")
        Ownable(msg.sender)
    {

        // Initial Mint
        _mint(msg.sender, 1000 * 10 ** decimals());

    }

    // Mint New Tokens (Only Owner)
    function mint(address to, uint256 amount) public onlyOwner {

        require(
            totalSupply() + amount <= maxSupply,
            "Max supply exceeded"
        );

        _mint(to, amount);
    }

    // Pause Token Transfers
    function pause() public onlyOwner {
        _pause();
    }

    // Unpause Token Transfers
    function unpause() public onlyOwner {
        _unpause();
    }

    // Hook Before Token Transfer
    function _update(
        address from,
        address to,
        uint256 value
    ) internal override whenNotPaused {

        super._update(from, to, value);
    }
}