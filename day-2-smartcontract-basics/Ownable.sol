// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


contract Ownable{

    address public owner;
    string public message;

constructor()  {
    owner=msg.sender;
}
modifier onlyOwner(){
    require(msg.sender==owner,"this not owner");
    _;

}

function setmessage(string memory _message) public onlyOwner{
    message=_message;
}
function getmessage()public view returns(string memory){
    return message;
}


}