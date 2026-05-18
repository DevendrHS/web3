// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin Imports
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMintingContract is ERC721URIStorage, Ownable {

    // NFT Counter
    uint256 public nextTokenId;

    // Constructor
    constructor()
        ERC721("NFT Minting Contract", "NFTM")
        Ownable(msg.sender)
    {}

    // Mint NFT
    function mintNFT(
        address recipient,
        string memory tokenURI
    )
        public
        onlyOwner
    {

        _safeMint(recipient, nextTokenId);

        _setTokenURI(nextTokenId, tokenURI);

        nextTokenId++;

    }
}