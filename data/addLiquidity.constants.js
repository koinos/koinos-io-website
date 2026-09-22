import { contractFor } from "@/data/koinTokens";

// Money-critical identifiers live outside the translated copy so every locale
// renders the same pools and token contracts. Revalidate these values before a
// public release. Last checked against the linked pool pages and Raydium API on
// 13 September 2026.
export const LIQUIDITY_ROUTES = [
  {
    id: "ethereum",
    chain: "Ethereum",
    venue: "Uniswap v4",
    pair: "vKOIN / USDT",
    model: "Concentrated liquidity",
    poolFee: "1%",
    feeAsset: "ETH on Ethereum",
    poolId:
      "0xd833a3afa936ca389966a9ed3a3d9abf7ec45c11b0d575aaaf6ca4d354687da6",
    poolUrl:
      "https://app.uniswap.org/explore/pools/ethereum/0xd833a3afa936ca389966a9ed3a3d9abf7ec45c11b0d575aaaf6ca4d354687da6",
    tokenA: contractFor("Ethereum"),
    tokenB: {
      symbol: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      explorer:
        "https://etherscan.io/token/0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    screenshots: [
      {
        src: "/images/pages/liquidity-guide/uniswap-ethereum-vkoin-usdt-pool.jpg",
        altKey: "poolScreenshotAlt",
        captionKey: "poolScreenshotCaption",
      },
    ],
  },
  {
    id: "base",
    chain: "Base",
    venue: "Uniswap v4",
    pair: "vKOIN / USDC",
    model: "Concentrated liquidity",
    poolFee: "1%",
    feeAsset: "ETH on Base",
    poolId:
      "0x67e2b4bf9917e1ab76bff55dbe125d27858c04bfe77da71b8721d526059859c3",
    poolUrl:
      "https://app.uniswap.org/explore/pools/base/0x67e2b4bf9917e1ab76bff55dbe125d27858c04bfe77da71b8721d526059859c3",
    tokenA: contractFor("Base"),
    tokenB: {
      symbol: "USDC",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      explorer:
        "https://basescan.org/token/0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
    screenshots: [
      {
        src: "/images/pages/liquidity-guide/uniswap-base-vkoin-usdc-pool.jpg",
        altKey: "poolScreenshotAlt",
        captionKey: "poolScreenshotCaption",
      },
      {
        src: "/images/pages/liquidity-guide/uniswap-base-add-liquidity-form.jpg",
        altKey: "formScreenshotAlt",
        captionKey: "formScreenshotCaption",
      },
      {
        src: "/images/pages/liquidity-guide/uniswap-base-price-range-and-deposit.jpg",
        altKey: "rangeScreenshotAlt",
        captionKey: "rangeScreenshotCaption",
      },
    ],
  },
  {
    id: "solana",
    chain: "Solana",
    venue: "Raydium CLMM",
    pair: "vKOIN / WSOL",
    model: "Concentrated liquidity",
    poolFee: "1%",
    feeAsset: "SOL",
    poolId: "2kbZSkxa3M7VAWMnZDqBNarkFFBYUyskeavXnq1oK3gT",
    poolUrl:
      "https://raydium.io/clmm/create-position/?pool_id=2kbZSkxa3M7VAWMnZDqBNarkFFBYUyskeavXnq1oK3gT",
    tokenA: contractFor("Solana"),
    tokenB: {
      symbol: "WSOL",
      address: "So11111111111111111111111111111111111111112",
      explorer:
        "https://solscan.io/token/So11111111111111111111111111111111111111112",
    },
    screenshots: [],
  },
];

export const routeFor = (id) =>
  LIQUIDITY_ROUTES.find((route) => route.id === id) || LIQUIDITY_ROUTES[0];
