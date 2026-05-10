// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld{

    string public message = "Hello Securechain AI";


    function setmessage(string memory _message)public {
        message=_message;

    }
        function getmessage()public view returns(string memory){
        return message;
    }}
