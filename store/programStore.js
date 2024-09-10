import { create } from "zustand"

export const useProgramStore = create((set) => ({
  programs: {
    earnOnKoinos: {
      title: "Earn on Koinos",
      subtitle: "Earn up to 16% APY on Koinos!",
      shortDescription:
        "Join the KOINOS X Chainge Bridge Contest to be part of a community shaping the future of finance. Bridge, share, and you could win part of the 7,000 $KOIN and 30,000 $XCHNG prize pool.",
      description: `For the first time ever, Chainge is offering yield on a new chain—Koinos—and thanks to a partnership with Koinos Group, you could earn up to 16.24% yield for simply bridging and holding BTC, ETH, or USDT on Koinos through the Chainge app. Best of all, your tokens remain in your wallet and fully liquid at all times so you are free to move your tokens off Koinos at any time!`,
      keyPoints: [
        "Earn up to 16% on bridged assets",
        "Earn KoinDX points by providing liquidity to select pools",
      ],
      category: "DeFi",
      startDate: "August 21st 2024",
      owner: "Koinos Group & Chainge",
      website: "http://dapp.chainge.finance/earn?chain=KOIN",
      details: [
        {
          asset: "USDT",
          apy: "8.12%",
          matching: "16.24%",
          rewards: "$KOIN rewards",
        },
        {
          asset: "ETH",
          apy: "5.2%",
          matching: "10.4%",
          rewards: "$KOIN rewards",
        },
        {
          asset: "BTC",
          apy: "4.1%",
          matching: "8.2%",
          rewards: "$KOIN rewards",
        },
      ],
      cta: "Go to http://dapp.chainge.finance/earn?chain=KOIN to start earning now!",
      guide: [
        "Visit the Chainge website at http://dapp.chainge.finance.",
        "Connect your wallet (MetaMask or other supported wallets).",
        "Select the 'Earn' tab and choose 'Koinos' as the chain.",
        "Bridge your BTC, ETH, or USDT to Koinos.",
        "Once completed, you'll start earning APY on Koinos!",
      ],
      images: {
        banner: "/images/eok-image.png",
        otherImages: [
          "/images/projects/chainge.png",
          "/images/projects/chart.png",
        ],
      },
      featured: true,
    },
    koinosXChaingeContest: {
      title: "Koinos X Chainge",
      shortDescription:
        "Earn big with the KOINOS X Chainge contest and win a share of 7,000 $KOIN & 30,000 $XCHNG!",
      description:
        "Koinos, the world’s first feeless smart contract platform, has partnered with Chainge to bring you a chance to win your share of 7,000 $KOIN and 30,000 $XCHNG!",
      keyPoints: [
        "Bridge $10+ USDT to Koinos blockchain",
        "Follow @FinanceChainge & @KoinosNetwork",
        "10 lucky winners will be randomly selected",
      ],
      guide: [
        ,
        ,
        "Bridge: Transfer $10+ USDT to the Koinos blockchain",
        "Follow: Follow @FinanceChainge & @KoinosNe,twor",
        "Share: Spread the word with #KOINOSXChaing",
        "Engage: Join our communities and stay in the loop!",
      ],
      category: "Contest",
      startDate: "August 30th 2024",
      owner: "Koinos Group & Chainge",
      details: [],
      website: "https://taskon.xyz/campaign/detail/238778750",
      images: {
        banner: "/images/contest-image.png",
        otherImages: [],
      },
      featured: false,
    },
    // Generic program template
    genericProgramTemplate: {
      title: "Generic Program Title",
      subtitle: "Optional Subtitle",
      shortDescription: "A brief description of the program.",
      description: "A more detailed description of the program goes here.",
      keyPoints: ["Key point 1", "Key point 2", "Key point 3"],
      category: "Generic Category",
      startDate: "January 1st 2025",
      owner: "Program Owner",
      website: "https://example.com",
      details: [
        {
          asset: "Generic Asset",
          apy: "X%",
          matching: "Y%",
          rewards: "Generic rewards",
        },
        {
          asset: "Generic Asset",
          apy: "X%",
          matching: "Y%",
          rewards: "Generic rewards",
        },
        {
          asset: "Generic Asset",
          apy: "X%",
          matching: "Y%",
          rewards: "Generic rewards",
        },
      ],
      cta: "Call to action text goes here",
      guide: [
        "Step 1 of the guide",
        "Step 2 of the guide",
        "Step 3 of the guide",
      ],
      images: {
        banner: "/images/placeholder.png",
        otherImages: [], // Add optional images here
      },
      featured: false,
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
