import { create } from "zustand"
import Link from "next/link"

export const useProgramStore = create(() => ({
  programs: {
    earnOnKoinos: {
      id: "earnOnKoinos",
      url: "/programs/earn-on-koinos",
      website: "http://dapp.chainge.finance/earn?chain=KOIN",
      images: { banner: "/images/programs/earn-on-koinos.png", },
      featured: true,
      active: true
    },
    koindxFarm: {
      id: "koindxFarm",
      url: "/programs/koindx-farm",
      website:
        "https://medium.com/@koindx/koindx-airdrop-your-guide-to-participation-3b12bdeffb73",
      images: {
        banner: "/images/programs/koindx-farm.png",
      },
      featured: false,
      active: false,
    },
    taskonQuest: {
      id: "taskonLaunch",
      url: "/programs/taskon-launch",
      website: "https://taskon.xyz/quest/333189736",
      images: {
        banner: "/images/programs/taskon-launch.png",
      },
      featured: false,
      active: false,
    },
    lordsForsakenQuest: {
      id: "lordsForsakenQuest",
      url: "/programs/lords-forsaken-quest",
      website: "https://taskon.xyz/quest/6984752",
      images: {
        banner: "/images/programs/lords-forsaken-quest.png",
      },
      featured: false,
      active: true,
    },
  },
}))
