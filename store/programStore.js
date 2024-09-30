import { create } from "zustand";
import Link from "next/link";

export const useProgramStore = create((set) => ({
  programs: {
    earnOnKoinos: {
      url: "/featured-programs/earn-on-koinos",
      title: "Earn on Koinos",
      subtitle: "Earn up to 16% APY on Koinos!",
      shortDescription:
        "For the first time ever, Chainge is offering yield on a new chain—Koinos—and thanks to a partnership with Koinos Group, you could earn up to 16.24% yield for simply bridging and holding BTC, ETH, or USDT on Koinos through the Chainge app.",
      description: `Chainge is helping to connect Koinos to the broader DeFi ecosystem while at the same time leveraging its fee-less design and their novel DEX aggregation technology to deliver some of the lowest cost swaps in all of crypto. This is a powerful flywheel all on its own but the Earn on Koinos program will help kick it into high gear!`,
      keyPoints: [
        "Earn up to 16% on bridged assets",
        "Rewards in both your bridged asset and KOIN",
      ],
      website: "http://dapp.chainge.finance/earn?chain=KOIN",
      details: [
        <><strong>USDT</strong>: 8.12% APY, Matching Total: 16.24% with $KOIN rewards</>,
        <><strong>ETH</strong>: 5.2% APY, Matching Total: 10.4% with $KOIN rewards</>,
        <><strong>BTC</strong>: 4.1% APY, Matching Total: 8.2% with $KOIN rewards</>,
      ],
      guide: [
        <>Visit the <Link href="https://telegram.koinos.io/" className="underline" target="_blank">Chainge bridge</Link>.</>,
        <>Connect your wallet (MetaMask or other supported wallets).</>,
        <>Select the 'Earn' tab and choose 'Koinos' as the chain.</>,
        <>Bridge your BTC, ETH, or USDT to Koinos.</>,
        <>Once completed, you'll start earning APY on Koinos!</>,
      ],
      images: {
        banner: "/images/eok-image.png",
      },
      featured: true,
      active: true,
    },
    // Generic program template
    genericProgramTemplate: {
      url: "/featured-programs/generic-program",
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
