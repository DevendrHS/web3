// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MiniDEX {
    IERC20 public tokenA;
    IERC20 public tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(
        uint256 amountA,
        uint256 amountB
    ) external {
        require(amountA > 0 && amountB > 0, "Invalid amount");

        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transferFrom(msg.sender, address(this), amountB);

        reserveA += amountA;
        reserveB += amountB;
    }

    function removeLiquidity(
        uint256 amountA,
        uint256 amountB
    ) external {
        require(amountA <= reserveA, "Insufficient reserve A");
        require(amountB <= reserveB, "Insufficient reserve B");

        reserveA -= amountA;
        reserveB -= amountB;

        tokenA.transfer(msg.sender, amountA);
        tokenB.transfer(msg.sender, amountB);
    }

    function swapAForB(uint256 amountA) external {
        require(amountA > 0, "Invalid amount");
        require(reserveB >= amountA, "Insufficient liquidity");

        tokenA.transferFrom(msg.sender, address(this), amountA);
        tokenB.transfer(msg.sender, amountA);

        reserveA += amountA;
        reserveB -= amountA;
    }

    function swapBForA(uint256 amountB) external {
        require(amountB > 0, "Invalid amount");
        require(reserveA >= amountB, "Insufficient liquidity");

        tokenB.transferFrom(msg.sender, address(this), amountB);
        tokenA.transfer(msg.sender, amountB);

        reserveB += amountB;
        reserveA -= amountB;
    }

    function getReserves()
        external
        view
        returns (
            uint256,
            uint256
        )
    {
        return (reserveA, reserveB);
    }
}