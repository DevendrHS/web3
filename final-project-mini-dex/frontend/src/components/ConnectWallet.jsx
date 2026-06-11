import { useState } from "react";

export default function ConnectWallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      {account && <p>{account}</p>}
    </div>
  );
}