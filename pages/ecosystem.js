import Layout from "@/components/layout/Layout";
import styles from "@/styles/Ecosystem.module.css";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const recentProjects = [
  {
    name: "Koinos AI",
    category: "AI & compute",
    description: "A local-first desktop AI app and experimental compute network. Run private models on your own hardware, expose an OpenAI-compatible API, and optionally contribute idle compute for testnet KAI rewards.",
    icon: "/images/pages/ecosystem/koinos-ai.svg",
    badges: ["Alpha", "Testnet"],
    tone: "alpha",
    links: [
      { label: "Website", url: "https://koinosai.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/kaiapp" },
    ],
  },
  {
    name: "Discover Koinos",
    category: "Interactive onboarding",
    description: "An interactive onboarding gateway where newcomers can create a Koinos account, mint an NFT, and launch a token in minutes, with sponsored mana and no wallet extension required.",
    icon: "/images/pages/ecosystem/discover-koinos.svg",
    badges: ["Preview"],
    tone: "preview",
    links: [
      { label: "Website", url: "https://usekoinos.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/discover-koinos" },
    ],
  },
  {
    name: "Trade Koinos",
    category: "Decentralized exchange",
    description: "A non-custodial, fully on-chain orderbook DEX for Koinos. Place limit or market orders, inspect live depth and trade history, and list new pairs directly from the app.",
    icon: "/images/pages/ecosystem/trade-koinos.svg",
    badges: ["Live", "Mainnet"],
    tone: "live",
    links: [
      { label: "Website", url: "https://tradekoinos.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/Token-Trading" },
    ],
  },
  {
    name: "OURO",
    category: "NFT marketplace",
    description: "A Koinos NFT marketplace for discovering, creating, listing, and trading KCS-2 assets in KOIN, with non-custodial listings, creator royalties, and sponsored mana.",
    icon: "/images/pages/ecosystem/ouro.svg",
    badges: ["Live", "Mainnet"],
    tone: "live",
    links: [
      { label: "Website", url: "https://ouro.lifestyle/" },
      { label: "GitHub", url: "https://github.com/therexdev/marketplace" },
    ],
  },
  {
    name: "Aurvania",
    category: "On-chain game",
    description: "A free-to-play, play-to-own dungeon crawler on Koinos. Catch and evolve creatures, explore dungeons, and own in-game relics as NFTs without needing a wallet or paying gas.",
    icon: "/images/pages/ecosystem/aurvania.svg",
    badges: ["Playable", "Mainnet"],
    tone: "live",
    links: [
      { label: "Play", url: "https://aurvania.quest/play" },
      { label: "Docs", url: "https://aurvania.quest/docs.html" },
    ],
  },
  {
    name: "KoinosKit",
    category: "Node operations",
    description: "An open-source desktop app for running and monitoring a Koinos block-producing node, with guided setup, wallet and VHP management, quick sync, and reward tracking.",
    icon: "/images/pages/ecosystem/koinoskit.svg",
    badges: ["Experimental", "Open source"],
    tone: "experimental",
    links: [
      { label: "Website", url: "https://koinoskit.site/" },
      { label: "GitHub", url: "https://github.com/therexdev/Koinos-Node" },
    ],
  },
];

const ecosystemProjects = [
  {
    name: "KoinDX",
    description: "KoinDX is a decentralized exchange designed to facilitate seamless token swaps, providing users with a fast, and user-friendly trading experience.",
    icon: "/images/pages/ecosystem/koindx.png",
    url: "https://koindx.com/",
  },
  {
    name: "Kollection",
    description: "Kollection is an open-source NFT marketplace for creating, discovering, and trading digital assets on Koinos.",
    icon: "/images/pages/ecosystem/kollection.png",
    url: "https://github.com/kollection-nft",
  },
  {
    name: "Fogata",
    description: "Fogata is a robust mining pool specifically designed for Koinos enthusiasts, where users can run their own pools or join those of the community.",
    icon: "/images/pages/ecosystem/fogata.png",
    url: "https://fogata.io/",
  },
  {
    name: "BurnKoin",
    description: "BurnKoin is a dedicated mining pool focused on optimizing mining rewards for its users, providing a reliable and efficient environment for Koinos miners.",
    icon: "/images/pages/ecosystem/burnkoin.png",
    url: "https://burnkoin.com/",
  },
  {
    name: "Koinos Blocks",
    description: "Koinos Blocks is a detailed block explorer for the Koinos blockchain, offering comprehensive data and analytics for users to explore.",
    icon: "/images/pages/ecosystem/koinosblocks.png",
    url: "https://koinosblocks.com/",
  },
  {
    name: "Koinos One",
    description: "Koinos One is a community-driven experimental desktop app for running, restoring, backing up, and producing with a native Koinos node.",
    icon: "/images/pages/ecosystem/koinos-one.png",
    url: "https://github.com/koinos/koinos-one",
  },
  {
    name: "Teleno",
    description: "Teleno is an experimental monolithic, Koinos-compatible blockchain node developed as a single native binary. The official Koinos reference implementation remains the microservices architecture.",
    icon: "/images/pages/ecosystem/teleno.png",
    url: "https://github.com/koinos/teleno",
  },
  {
    name: "Koin Crew",
    description: "Koin Crew offers a suite of utilities designed to enhance the Koinos ecosystem, providing users with a range of tools and services to optimize their blockchain experience.",
    icon: "/images/pages/ecosystem/koincrew.png",
    url: "https://koincrew.com/",
  },
  {
    name: "Koinosscan",
    description: "Explore Koinos Blockchain - Search for wallet addresses to view token transfers and balances and NFTs.",
    icon: "/images/pages/ecosystem/koinosscan.png",
    url: "https://koinosscan.com/",
  },
  {
    name: "VortexBridge",
    description: "Cross-chain bridge enabling seamless asset transfers between Koinos and other blockchain networks, providing liquidity and interoperability.",
    icon: "/images/pages/ecosystem/vortexbridge.png",
    url: "https://vortexbridge.io/bridge",
  },
  {
    name: "Koinscan",
    description: "A comprehensive block explorer for the Koinos blockchain, providing detailed transaction data, block information, and network analytics.",
    icon: "/images/pages/ecosystem/koinscan.png",
    url: "https://www.koinscan.com/",
  },
];

export default function EcosystemPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle="Ecosystem | Koinos"
      >
        <div>
          <section className="page-hero-section">
            <div className="page-hero-section-overlay bg--01 bg--scroll">
              <div className="container">
                <div className="row d-flex align-items-center">
                  {/* TEXT BLOCK */}
                  <div className="col-md-6">
                    <div className="txt-block left-column color--white wow" data-aos='fade-left'>
                      {/* Section ID */}
                      <span className="section-id rounded-id bg--tra-white color--white">
                        Featured
                      </span>
                      {/* Title */}
                      <h2 className="s-56 w-700">KoinDX</h2>
                      {/* Text */}
                      <p className="p-lg w-400">
                        KoinDX is a decentralized exchange platform that facilitates seamless and efficient trading of digital assets within the Koinos ecosystem, offering users a user-friendly UX with a modern design.
                      </p>

                      <a href="https://koindx.com/" target="_blank" rel="noreferrer" className="btn btn-success border border-success btn-round-md">Visit KoinDX</a>

                    </div>
                  </div>	{/* END TEXT BLOCK */}
                  {/* IMAGE BLOCK */}
                  <div className="col-md-6">
                    <div className="img-block right-column wow" data-aos='fade-right'>
                      <img className="img-fluid btn color--theme" src="/images/pages/ecosystem/koindx-swap.png" alt="KoinDX" />
                    </div>
                  </div>
                </div>   {/* End row */}
              </div>    {/* End container */}
            </div>     {/* End Page Hero Section Overlay */}
            {/* WAVE SHAPE BOTTOM */}
            <div className="wave-shape-bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#fff" fillOpacity={1} d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
            </div>
          </section>	{/* END PAGE HERO SECTION */}

          <section id="recent-projects" className={`${styles.recentSection} py-100 division`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-60">
                    <span className={styles.eyebrow}>Recently added</span>
                    <h2 className="s-52 w-700">New &amp; Active Community Projects</h2>
                    <p className="s-18 mt-4 color--grey">
                      Explore recent apps, tools, and experiments created by independent Koinos community builders, from live mainnet products to early testnet releases.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.projectGrid}>
                {recentProjects.map((project) => (
                  <article className={styles.projectCard} key={project.name}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconFrame}>
                        <img src={project.icon} alt={`${project.name} icon`} />
                      </div>
                      <div>
                        <p className={styles.category}>{project.category}</p>
                        <h3 className={styles.projectName}>{project.name}</h3>
                      </div>
                    </div>

                    <div className={styles.badges} aria-label={`${project.name} status`}>
                      {project.badges.map((badge) => (
                        <span className={`${styles.badge} ${styles[project.tone]}`} key={badge}>{badge}</span>
                      ))}
                    </div>

                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.links}>
                      {project.links.map((link, index) => (
                        <a
                          className={index === 0 ? styles.primaryLink : styles.secondaryLink}
                          href={link.url}
                          key={link.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}<span aria-hidden="true"> ↗</span>
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <p className={styles.disclaimer}>
                Community projects are independently operated. Status labels reflect the latest publicly available project information; review each project&apos;s documentation and source before using experimental software or connecting assets.
              </p>
            </div>
          </section>

          <section id="features-11" className="py-100 features-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">Explore the Koinos Ecosystem</h2>
                    {/* Text */}
                    <p className="s-14 mt-4 color--grey">The Koinos ecosystem is rapidly evolving into a dynamic and inclusive environment for decentralized applications and blockchain innovation. Leveraging the power of a feeless and infinitely upgradeable blockchain, Koinos offers developers and users unparalleled flexibility and accessibility.</p>
                  </div>
                </div>
              </div>
              {/* FEATURES-11 WRAPPER */}
              <div className="fbox-wrapper">
                <div className="row row-cols-1 row-cols-md-2 rows-3">
                  {/* FEATURE BOX #1 */}
                  {ecosystemProjects.map((dapp) => (
                    <div className="col-12 d-flex flex-column flex-md-row align-items-center mb-60 mt-30 gap-4" key={dapp.name}>
                      <img src={dapp.icon} alt={dapp.name} style={{ width: "150px" }} className="mb-3 mb-md-0" />
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">{dapp.name}</h6>
                        <p>{dapp.description}</p>
                        <a href={dapp.url} target="_blank" rel="noreferrer" className="btn-link mt-8">Learn more</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>	{/* END FEATURES-11 WRAPPER */}
            </div>     {/* End container */}
          </section>	{/* END FEATURES-11 */}
        </div>

      </Layout>
    </>
  )
}
