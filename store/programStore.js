import { create } from "zustand";

export const useProgramStore = create((set) => ({
  programs: {
    earnOnKoinos: {
      url: "/programs/earn-on-koinos",
      title: "Earn on Koinos",
      subtitle: "Earn up to 16% APY on Koinos!",
      shortDescription:
        "Chainge Finance and Koinos Group have partnered to offer up to 16.24% yield for simply bridging and holding BTC, ETH, or USDT on Koinos through the Chainge app.",
      description: "Chainge makes Koinos interoperable with over 20 blockchains and their novel DEX aggregation technology delivers some of the lowest cost swaps in all of crypto. High yields and low fees are a powerful flywheel and the Earn on Koinos program kicks it into high gear!",
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
      featured: false,
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
        <><strong>Trading Activity</strong>: By perform trades on KoinDX, users are qualified to receive KOINDX airdrops</>,
      ],
      images: {
        banner: "/images/koindx-airdrop.png",
      },
      featured: false,
      active: false,
    },
    taskonQuest: {
      url: "/programs/taskon-launch",
      title: "TaskOn Launch",
      subtitle: "Earn rewards for participating!",
      shortDescription:
        "Don't miss out on the launch Koinos' TaskOn Community. A few simple steps that help drive engagement to Koinos makes you eligible for lucrative rewards!",
      description: "Koinos is launching their TaskOn Community. Every month users can participate in the Koinos ecosystem to earn rewards in USDT, KOIN, and various project tokens. Participating in tasks helps Koinos reach new heights!",
      keyPoints: [
        "Earn your share of $1,250 USDT for joining",
        "Check back daily for additional quests and rewards",
      ],
      website: "https://taskon.xyz/Koinos",
      details: [
        <><strong>TaskOn Community Launch</strong>: Participate in the welcome campaign and earn your share of the $1,250 USDT prize pool</>,
        <><strong>Monthly Quests</strong>: Return to the TaskOn Community page for monthly quests and opportunities to continue earning</>,
      ],
      images: {
        banner: "/images/quest-taskon-launch.png",
      },
      featured: true,
      active: true,
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
