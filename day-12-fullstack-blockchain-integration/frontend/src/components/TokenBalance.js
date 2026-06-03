import { useState } from "react";
import { ethers } from "ethers";
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
} from "../contract";

function TokenBalance() {

  const [balance, setBalance] =
    useState("");

  const getBalance = async () => {

    const provider =
      new ethers.BrowserProvider(
        window.ethereum
      );

    const contract =
      new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        provider
      );

    const accounts =
      await window.ethereum.request({
        method: "eth_accounts",
      });

    const result =
      await contract.balanceOf(
        accounts[0]
      );

    setBalance(
      ethers.formatUnits(
        result,
        18
      )
    );
  };

  return (
    <div>

      <button onClick={getBalance}>
        Check Balance
      </button>

      <p>
        Balance: {balance} IRT
      </p>

    </div>
  );
}

export default TokenBalance;