import { useState } from "react";
import {
  getDVTBalance,
  getRWTBalance
} from "../services/blockchainService";

export default function Balances() {
  const [address, setAddress] = useState("");
  const [dvt, setDvt] = useState("");
  const [rwt, setRwt] = useState("");

  async function loadBalances() {
    const dvtBal = await getDVTBalance(address);
    const rwtBal = await getRWTBalance(address);

    setDvt(dvtBal);
    setRwt(rwtBal);
  }

  return (
    <div>
      <input
        placeholder="Wallet Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <button onClick={loadBalances}>
        Get Balances
      </button>

      <p>DVT: {dvt}</p>
      <p>RWT: {rwt}</p>
    </div>
  );
}