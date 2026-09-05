// Single source of truth for the vKOIN token identities and the swap links that
// point at them.
//
// These values are money-critical: a reader who trusts a wrong address here can
// lose funds. They are imported by store/exchangeStore.js (the homepage "Where to
// get KOIN" section) and by data/getKoin.js (the /get-koin guide) so the two can
// never drift apart.
//
// Symbol, name and decimals below were read from each chain directly.
// Last checked: 24 August 2026.

export const VKOIN_CONTRACTS = [
  {
    chain: "Ethereum",
    address: "0xa50ad3a559A10f384a5bB2e27516f63E0B937b1A",
    explorer:
      "https://etherscan.io/token/0xa50ad3a559A10f384a5bB2e27516f63E0B937b1A",
    explorerName: "Etherscan",
    name: "Vortex Koin",
    symbol: "vKOIN",
    decimals: 8,
  },
  {
    chain: "Base",
    address: "0x9b61660Cb1a6920E9c912570cD210020B956F34E",
    explorer:
      "https://basescan.org/token/0x9b61660Cb1a6920E9c912570cD210020B956F34E",
    explorerName: "BaseScan",
    name: "Vortex Koin",
    symbol: "vKOIN",
    decimals: 8,
  },
  {
    chain: "Solana",
    address: "8AUxdPqYU4FBy5rZDhMJxTniPs7gtEfdHjP3UKM71m6G",
    explorer:
      "https://solscan.io/token/8AUxdPqYU4FBy5rZDhMJxTniPs7gtEfdHjP3UKM71m6G",
    explorerName: "Solscan",
    name: "Vortex Koin",
    symbol: "vKOIN",
    decimals: 8,
  },
];

export function contractFor(chain) {
  return VKOIN_CONTRACTS.find((contract) => contract.chain === chain);
}

const NATIVE_PLACEHOLDER = "0x0000000000000000000000000000000000000000";
const WRAPPED_SOL = "So11111111111111111111111111111111111111112";

export const SWAP_LINKS = {
  ethereum: `https://swap.defillama.com/?chain=ethereum&from=${NATIVE_PLACEHOLDER}&tab=swap&to=${
    contractFor("Ethereum").address
  }`,
  base: `https://swap.defillama.com/?chain=base&from=${NATIVE_PLACEHOLDER}&tab=swap&to=${
    contractFor("Base").address
  }`,
  solana: `https://jup.ag/swap?sell=${WRAPPED_SOL}&buy=${
    contractFor("Solana").address
  }`,
  koindx: "https://app.koindx.com/swap",
};
