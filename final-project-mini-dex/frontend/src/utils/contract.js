import { BrowserProvider, Contract } from "ethers";

import DVT_ABI from "../abi/DevToken.json";
import RWT_ABI from "../abi/RewardToken.json";
import DEX_ABI from "../abi/MiniDEX.json";

export const DVT_ADDRESS = "PASTE_DVT_ADDRESS";
export const RWT_ADDRESS = "PASTE_RWT_ADDRESS";
export const DEX_ADDRESS = "PASTE_DEX_ADDRESS";

export async function getProvider() {
  return new BrowserProvider(window.ethereum);
}

export async function getSigner() {
  const provider = await getProvider();
  return await provider.getSigner();
}

export async function getContracts() {
  const signer = await getSigner();

  return {
    dvt: new Contract(DVT_ADDRESS, DVT_ABI, signer),
    rwt: new Contract(RWT_ADDRESS, RWT_ABI, signer),
    dex: new Contract(DEX_ADDRESS, DEX_ABI, signer),
  };
}