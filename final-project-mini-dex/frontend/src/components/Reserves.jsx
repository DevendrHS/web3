import { useState } from "react";
import { getReserves } from "../services/blockchainService";

export default function Reserves() {
  const [reserveA, setReserveA] = useState("");
  const [reserveB, setReserveB] = useState("");

  async function loadReserves() {
    try {
      const reserves = await getReserves();

      setReserveA(reserves.reserveA);
      setReserveB(reserves.reserveB);
    } catch (error) {
      console.error(error);
      alert("Failed to load reserves");
    }
  }

  return (
    <div>
      <h2>Pool Reserves</h2>

      <button onClick={loadReserves}>
        Load Reserves
      </button>

      <p>DVT Reserve: {reserveA}</p>

      <p>RWT Reserve: {reserveB}</p>
    </div>
  );
}