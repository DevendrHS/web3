import { useEffect, useState } from "react";

function Balances() {
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    // fetch balances here
  }, []);

  return (
    <div>
      <h3>Balances</h3>
      <p>{balance}</p>
    </div>
  );
}

export default Balances;