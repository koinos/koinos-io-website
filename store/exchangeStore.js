import { create } from "zustand"
import { SWAP_LINKS, VKOIN_CONTRACTS } from "@/data/koinTokens"

export const useExchangeStore = create(() => ({
  exchanges: [
    {
      name: "DeFiLlama",
      icon: "/images/exchanges/defillama.svg",
      url: SWAP_LINKS.ethereum,
      type: "DEX (vKOIN on Ethereum)",
    },
    {
      name: "DeFiLlama",
      icon: "/images/exchanges/defillama.svg",
      url: SWAP_LINKS.base,
      type: "DEX (vKOIN on Base)",
    },
    {
      name: "Jupiter",
      icon: "/images/exchanges/jupiter-logo.png",
      url: SWAP_LINKS.solana,
      type: "DEX (Solana)",
    },
    {
      name: "KoinDX",
      icon: "/images/exchanges/koindx-logo.png",
      url: SWAP_LINKS.koindx,
      type: "DEX",
    },
  ],
  // Addresses and explorer links live in data/koinTokens.js so the homepage and
  // the /get-koin guide can never show different contracts.
  contracts: VKOIN_CONTRACTS.map(({ chain, address, explorer }) => ({
    chain,
    address,
    explorer,
  })),
}))
