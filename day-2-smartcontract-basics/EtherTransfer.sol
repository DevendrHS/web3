// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EtherTransfer{

address public owner;

constructor(){
    owner= msg.sender;
}

receive() external payable {}

function checkBalance()public view returns(uint256){
    return address(this). balance;
}

function sendEther (address payable _to,uint256 _amount)public {
    require(msg.sender == owner,"this is not owner");
    require(address(this).balance >= _amount,"insufficent balance");
    _to.transfer(_amount);

}

}


