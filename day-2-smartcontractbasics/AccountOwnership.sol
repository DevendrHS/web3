// SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

contract AccountOwnership{

    address public owner;

    constructor(){
        owner=msg.sender;
    }
 function getowner()public view returns (adddress){
    return owner;

    
 }
 function verifyowner (addrress _owner)public view returns (bool){
    return owner=_owner;
 }
}