import { create } from "zustand"

export const useExchangeStore = create(() => ({
  exchanges: [
    {
      name: "DeFiLlama",
      icon: "/images/exchanges/defillama.svg",
      url: "https://swap.defillama.com/?chain=ethereum&from=0x0000000000000000000000000000000000000000&tab=swap&to=0xa50ad3a559A10f384a5bB2e27516f63E0B937b1A",
      type: "DEX (vKOIN on Ethereum)",
    },
    {
      name: "MEXC",
      icon: "/images/exchanges/mexc-logo.png",
      url: "https://www.mexc.com/exchange/KOIN_USDT",
      type: "CEX",
    },
    {
      name: "BingX",
      icon: "/images/exchanges/bingx-logo.png",
      url: "https://bingx.com/en/spot/KOINUSDT/",
      type: "CEX",
    },
    {
      name: "LCX",
      icon: "/images/exchanges/lcx-logo.png",
      url: "https://exchange.lcx.com/trade/KOIN-EUR",
      type: "CEX",
    },
    {
      name: "KoinDX",
      icon: "/images/exchanges/koindx-logo.png",
      url: "https://app.koindx.com/swap",
      type: "DEX",
    },
  ],
}))
