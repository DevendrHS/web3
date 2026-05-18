// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CourseCompletionNFT is ERC721, Ownable {


    uint256 public nextTokenId;
    mapping(uint256 => string) public courseNames;

    constructor ()ERC721("Course Completion Certificate", "CCC")
    Ownable(msg.sender)
    {}

    function mintCertificate(address to, string memory _courseName)
    public
    onlyOwner
    {

    _safeMint(to, nextTokenId);
    courseNames[nextTokenId] = _courseName;

    nextTokenId++;

}}