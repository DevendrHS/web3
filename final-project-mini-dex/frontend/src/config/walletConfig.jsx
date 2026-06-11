import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [sepolia],

  connectors: [
    injected(),
    walletConnect({
      projectId: "YOUR_WALLETCONNECT_PROJECT_ID",
    }),
    coinbaseWallet({
      appName: "MiniDEX",
    }),
  ],

  transports: {
    [sepolia.id]: http(),
  },
});