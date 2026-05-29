import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
function App() {

    const [wallet, setWallet] = useState("");

    // Connect Wallet
    const connectWallet = async () => {

        if (!window.ethereum) {

            alert("Install MetaMask");

            return;

        }

        const accounts =
            await window.ethereum.request({
                method: "eth_requestAccounts"
            });

        setWallet(accounts[0]);

    };

    return (

        <div style={{
            textAlign: "center",
            marginTop: "100px"
        }}>

            <h1>
                Internship Reward DApp
            </h1>

            <button
                onClick={connectWallet}
            >
                Connect Wallet
            </button>

            <h3>
                {wallet}
            </h3>

        </div>

    );

}

export default App;