import ConnectWallet from "./components/ConnectWallet";
import NetworkStatus from "./components/NetworkStatus";
import Balances from "./components/Balances";
import Reserves from "./components/Reserves";

function App() {
  return (
    <div>
      <h1>Mini DEX</h1>

      <ConnectWallet />

      <NetworkStatus />

      <Balances />

      <Reserves />
    </div>
  );
}

export default App;