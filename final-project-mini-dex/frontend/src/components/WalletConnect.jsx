import { useConnect, useDisconnect, useAccount } from "wagmi";

export default function WalletConnect() {
  const { address, isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  const { disconnect } = useDisconnect();

  return (
    <div>
      <h2>Wallet Connection</h2>

      {!isConnected ? (
        connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
          >
            Connect {connector.name}
          </button>
        ))
      ) : (
        <>
          <p>Connected:</p>
          <p>{address}</p>

          <button onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      )}
    </div>
  );
}