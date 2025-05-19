import { create } from "zustand"
import Link from "next/link"

export const useProgramStore = create(() => ({
  programs: {
    earnOnKoinos: {
      url: "/programs/earn-on-koinos",
      title: "Earn on Koinos",
      subtitle: "Earn up to 16% APY on Koinos!",
      shortDescription:
        "Earn high yields by bridging and holding BTC, ETH, or USDT on Koinos.",
      description:
        "Koinos interoperability with over 20 blockchains and low cost swaps in all of crypto. High yields and low fees are a powerful flywheel and the Earn on Koinos program kicks it into high gear!",
      keyPoints: [],
      website: "",
      details: [
        <>
          <strong>USDT</strong>: 8.12% APY, Matching Total: 16.24% with $KOIN
          rewards
        </>,
        <>
          <strong>ETH</strong>: 5.2% APY, Matching Total: 10.4% with $KOIN
          rewards
        </>,
        <>
          <strong>BTC</strong>: 4.1% APY, Matching Total: 8.2% with $KOIN
          rewards
        </>,
      ],
      images: {
        banner: "/images/programs/earn-on-koinos.png",
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
      description:
        "KoinDX is launching their native token, KOINDX. The native DEX token allows users to share in the revenue from swap fees as wall as participate in KOINDX governance. To participate in the airdrop, users can simply provide liquidity to qualifying pools on KoinDX.",
      keyPoints: [
        "Earn KOINDX token by providing liquidity",
        "Earn KOINDX token by swapping assets on the DEX",
      ],
      website:
        "https://medium.com/@koindx/koindx-airdrop-your-guide-to-participation-3b12bdeffb73",
      details: [
        <>
          <strong>Liquidity Provision</strong>: Earn KOINDX by providing
          liquidity to KOIN-ETH, KOIN-BTC, KOIN-USDT, or KOIN-VHP pools
        </>,
        <>
          <strong>Trading Activity</strong>: By perform trades on KoinDX, users
          are qualified to receive KOINDX airdrops
        </>,
      ],
      images: {
        banner: "/images/programs/koindx-farm.png",
      },
      featured: false,
      active: false,
    },
    taskonQuest: {
      url: "/programs/taskon-launch",
      title: "TaskOn Launch",
      subtitle: "Earn rewards for participating!",
      shortDescription:
        "Don't miss out on the launch of the Koinos TaskOn Community. A few simple steps that help drive engagement to Koinos makes you eligible for lucrative rewards!",
      description:
        "Every month users can participate in the Koinos ecosystem to earn rewards in USDT, KOIN, and various project tokens.",
      keyPoints: [
        "Earn your share of $1,250 USDT for joining",
        "Check back daily for additional quests and rewards",
        "Refer your friends for a prestigious Discord role",
      ],
      website: "https://taskon.xyz/quest/333189736",
      details: [
        <>
          <strong>TaskOn Community Launch</strong>: Participate in the welcome
          campaign and earn your share of the $1,250 USDT prize pool
        </>,
        <>
          <strong>Monthly Quests</strong>: Return to the TaskOn Community page
          for monthly quests and opportunities to continue earning
        </>,
        <>
          <strong>Join the TaskOn Community</strong>: Visit our{" "}
          <Link
            href="https://taskon.xyz/Koinos"
            className="underline"
            target="_blank"
          >
            TaskOn Community
          </Link>{" "}
          and stay up-to-date with the latest incentives
        </>,
        <>
          <strong>Referral Rewards</strong>: Refer two friends to the quest and
          earn a prestigious Discord role,{" "}
          <Link
            href="https://taskon.xyz/referral/837"
            className="underline"
            target="_blank"
          >
            learn more
          </Link>
        </>,
      ],
      images: {
        banner: "/images/programs/taskon-launch.png",
      },
      featured: false,
      active: false,
    },
    lordsForsakenQuest: {
      url: "/programs/lords-forsaken-quest",
      title: "Lord's Forsaken Quest",
      subtitle: "Earn rewards for playing!",
      shortDescription:
        "Koinos' premiere Web3 Play-to-Earn card game launch quest. Have fun playing while earning valuable rewards!",
      description:
        "Lord's Forsaken is about to launch on Koinos and to celebrate this event we are offering lucrative rewards for participating. A few simple steps could net you some valuable KOIN and FAITH!",
      keyPoints: [
        "Earn your share of 1500 KOIN for having fun!",
        "Get your hands on your share of 18000 FAITH",
        "Play-to-Earn on Lord's Forsaken to earn even more FAITH",
      ],
      website: "https://taskon.xyz/quest/6984752",
      details: [
        <>
          <strong>Free-to-Play</strong>: Thanks to feeless transactions on
          Koinos you can play Lord's Forsaken and earn FAITH with no cost to you
        </>,
        <>
          <strong>Play-to-Earn</strong>: Earn the in-game currency, FAITH,
          giving you access to upgraded card decks
        </>,
      ],
      images: {
        banner: "/images/programs/lords-forsaken-quest.png",
      },
      featured: false,
      active: false,
    },
  },
}))
