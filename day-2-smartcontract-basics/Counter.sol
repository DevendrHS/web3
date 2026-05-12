// SPDX-License-Identifier:MIT

pragma solidity ^0.8.20;

contract counter{

    uint256 public count=10;

    function increament()public{
        
        count+=1;
    }
    function decrement()public{
         require(count>0,"never less than 0");
         count-=1;
    }
    function reset()public {
        count=0;
    }
    function getcount()public view returns(uint256){
        return count;
    }

}