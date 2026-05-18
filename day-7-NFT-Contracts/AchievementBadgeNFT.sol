// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin Imports
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AchievementBadgeNFT is ERC721, Ownable {

    // NFT Counter
    uint256 public nextTokenId;

    // Store badge titles
    mapping(uint256 => string) public badgeTitle;

    // Store achievement level
    mapping(uint256 => string) public achievementLevel;

    // Constructor
    constructor()
        ERC721("Achievement Badge NFT", "ABNFT")
        Ownable(msg.sender)
    {}

    // Mint Achievement Badge
    function mintBadge(
        address user,
        string memory _badgeTitle,
        string memory _achievementLevel
    )
        public
        onlyOwner
    {

        _safeMint(user, nextTokenId);

        badgeTitle[nextTokenId] = _badgeTitle;

        achievementLevel[nextTokenId] = _achievementLevel;

        nextTokenId++;

    }
}