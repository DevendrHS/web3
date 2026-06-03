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

    try {

      const provider =
        new ethers.BrowserProvider(
          window.ethereum
        );

      const accounts =
        await window.ethereum.request({
          method: "eth_accounts",
        });

      const contract =
        new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          provider
        );

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

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <button onClick={getBalance}>
        Check Token Balance
      </button>

      <h3>
        Balance: {balance} IRT
      </h3>

    </div>
  );
}

export default TokenBalance;