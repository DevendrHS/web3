import { formatUnits } from "ethers";
import { getContracts } from "../utils/contract";

// Get DVT Balance
export async function getDVTBalance(address) {
  const { dvt } = await getContracts();

  const balance = await dvt.balanceOf(address);

  return formatUnits(balance, 18);
}

// Get RWT Balance
export async function getRWTBalance(address) {
  const { rwt } = await getContracts();

  const balance = await rwt.balanceOf(address);

  return formatUnits(balance, 18);
}

// Get Pool Reserves
export async function getReserves() {
  const { dex } = await getContracts();

  const reserves = await dex.getReserves();

  return {
    reserveA: formatUnits(reserves[0], 18),
    reserveB: formatUnits(reserves[1], 18),
  };
}