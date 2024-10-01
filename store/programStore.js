import { create } from "zustand";

export const useProgramStore = create((set) => ({
  programs: {
    earnOnKoinos: {
      url: "/programs/earn-on-koinos",
      title: "Earn on Koinos",
      subtitle: "Earn up to 16% APY on Koinos!",
      shortDescription:
        "For the first time ever, Chainge is offering yield on a new chain — Koinos — and thanks to a partnership with Koinos Group, you could earn up to 16.24% yield for simply bridging and holding BTC, ETH, or USDT on Koinos through the Chainge app.",
      description: "Chainge is helping to connect Koinos to the broader DeFi ecosystem while at the same time leveraging its fee-less design and their novel DEX aggregation technology to deliver some of the lowest cost swaps in all of crypto. This is a powerful flywheel all on its own but the Earn on Koinos program will help kick it into high gear!",
      keyPoints: [
        "Earn up to 16% on bridged assets",
        "Earn APY on USDT, ETH, and BTC",
        "Earn KOIN with your USDT, ETH, and BTC",
      ],
      website: "http://dapp.chainge.finance/earn?chain=KOIN",
      details: [
        <><strong>USDT</strong>: 8.12% APY, Matching Total: 16.24% with $KOIN rewards</>,
        <><strong>ETH</strong>: 5.2% APY, Matching Total: 10.4% with $KOIN rewards</>,
        <><strong>BTC</strong>: 4.1% APY, Matching Total: 8.2% with $KOIN rewards</>,
      ],
      images: {
        banner: "/images/eok-image.png",
      },
      featured: true,
      active: true,
    },
    koindxFarm: {
      url: "/programs/koindx-farm",
      title: "KoinDX Farm",
      subtitle: "Earn the native DEX token, KOINDX!",
      shortDescription:
        "Don't miss out on the launch of KoinDX's native token, KOINDX! By providing liquidity on qualifying pools you can earn KoinDX's revenue sharing token, KOINDX.",
      description: "KoinDX is launching their native token, KOINDX. The native DEX token allows users to share in the revenue from swap fees as wall as participate in KOINDX governance. To participate in the airdrop, users can simply provide liquidity to qualifying pools on KoinDX.",
      keyPoints: [
        "Earn KOINDX token by providing liquidity",
        "Earn KOINDX token by swapping assets on the DEX",
      ],
      website: "https://medium.com/@koindx/koindx-airdrop-your-guide-to-participation-3b12bdeffb73",
      details: [
        <><strong>Liquidity Provision</strong>: Earn KOINDX by providing liquidity to KOIN-ETH, KOIN-BTC, KOIN-USDT, or KOIN-VHP pools</>,
        <><strong>Trading Activity</strong>: By perform trades on KoinDX, users are qualified to receive KOINDX airdrops.</>,
      ],
      images: {
        banner: "/images/koindx-airdrop.png",
      },
      featured: false,
      active: false,
    },
    // Generic program template
    genericProgramTemplate: {
      url: "/programs/generic-program",
      title: "Generic Program Title",
      subtitle: "Optional Subtitle",
      shortDescription: "A brief description of the program.",
      description: "A more detailed description of the program goes here.",
      keyPoints: ["Key point 1", "Key point 2", "Key point 3"],
      website: "https://example.com",
      details: [
        <>Detail 1</>,
        <>Detail 2</>,
      ],
      guide: [
        <>Step 1</>,
        <>Step 2</>,
      ],
      images: {
        banner: "/images/placeholder.png",
      },
      featured: false,
      active: false,
    },
  },
  setFeaturedProgram: (programKey) =>
    set((state) => {
      const updatedPrograms = {}
      for (const key in state.programs) {
        updatedPrograms[key] = {
          ...state.programs[key],
          featured: key === programKey,
        }
      }
      return { programs: updatedPrograms }
    }),
}))
