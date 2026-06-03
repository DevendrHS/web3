import { useState } from "react";

function ConnectWallet() {

  const [wallet, setWallet] = useState("");

  const connectWallet = async () => {

    if (!window.ethereum) {
      alert("Please Install MetaMask");
      return;
    }

    const accounts =
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

    setWallet(accounts[0]);
  };

  return (
    <div>
      <button onClick={connectWallet}>
        Connect MetaMask
      </button>

      <p>
        Wallet: {wallet}
      </p>
    </div>
  );
}

export default ConnectWallet;