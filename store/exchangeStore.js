import { create } from "zustand"

export const useExchangeStore = create(() => ({
  exchanges: [
    {
      name: "Chainge",
      icon: "/images/exchanges/chainge-logo.png",
      url: "https://dapp.chainge.finance/?fromChain=ETH&toChain=ETH&fromToken=USDT&toToken=KOIN",
      type: "Bridge",
    },
    {
      name: "Uniswap",
      icon: "/images/exchanges/uniswap-logo.png",
      url: "https://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae",
      type: "DEX",
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
