import Layout from "@/components/layout/Layout";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useRouter } from "next/router";
import LocalizedHead from "@/components/i18n/LocalizedHead";

const ecosystemProjects = [
  {
    name: "KoinDX",
    description: "KoinDX is a decentralized exchange designed to facilitate seamless token swaps, providing users with a fast, and user-friendly trading experience.",
    icon: "/images/pages/ecosystem/koindx.png",
    url: "https://koindx.com/",
  },
  {
    name: "Trade Koinos",
    description: "Trade Koinos is a live, non-custodial mainnet DEX built around a fully on-chain order book, with limit and market orders, live depth, trade history, and permissionless pair listings.",
    icon: "/images/pages/ecosystem/trade-koinos.svg",
    links: [
      { label: "Website", url: "https://tradekoinos.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/Token-Trading" },
    ],
  },
  {
    name: "Kollection",
    description: "Kollection is an open-source NFT marketplace for creating, discovering, and trading digital assets on Koinos.",
    icon: "/images/pages/ecosystem/kollection.png",
    url: "https://github.com/kollection-nft",
  },
  {
    name: "OURO",
    description: "OURO is a live Koinos mainnet marketplace for discovering, creating, listing, and trading KCS-2 assets in KOIN, with non-custodial listings, creator royalties, and sponsored mana.",
    icon: "/images/pages/ecosystem/ouro.svg",
    links: [
      { label: "Website", url: "https://ouro.lifestyle/" },
      { label: "GitHub", url: "https://github.com/therexdev/marketplace" },
    ],
  },
  {
    name: "Aurvania",
    description: "Aurvania is a live, free-to-play and play-to-own dungeon crawler on Koinos mainnet where players catch and evolve creatures, explore dungeons, and own in-game relics as NFTs.",
    icon: "/images/pages/ecosystem/aurvania.svg",
    links: [
      { label: "Website", url: "https://aurvania.quest/" },
      { label: "Documentation", url: "https://aurvania.quest/docs.html" },
    ],
  },
  {
    name: "Discover Koinos",
    description: "Discover Koinos is an interactive onboarding preview where newcomers can create a Koinos account, mint an NFT, and launch a token with sponsored mana and no wallet extension required.",
    icon: "/images/pages/ecosystem/discover-koinos.svg",
    links: [
      { label: "Website", url: "https://usekoinos.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/discover-koinos" },
    ],
  },
  {
    name: "Use Koinos Wallet",
    description: "Use Koinos Wallet is a browser-based wallet for creating or importing a Koinos account, viewing balances and mana, and exporting a local backup of its private key.",
    icon: "/images/pages/ecosystem/use-koinos-wallet.svg",
    links: [
      { label: "Website", url: "https://usekoinos.com/wallet" },
      { label: "GitHub", url: "https://github.com/therexdev/discover-koinos" },
    ],
  },
  {
    name: "NFT Studio",
    description: "NFT Studio is a browser-based creative tool for drawing or uploading artwork, minting it as a Koinos NFT through a sponsored flow, and sending it to another account.",
    icon: "/images/pages/ecosystem/nft-studio.svg",
    links: [
      { label: "Website", url: "https://usekoinos.com/nft" },
      { label: "GitHub", url: "https://github.com/therexdev/discover-koinos" },
    ],
  },
  {
    name: "Token Lab",
    description: "Token Lab is a guided browser tool for deploying a Koinos token contract with a chosen name, symbol, supply, logo, and minting policy, then transferring, minting, or burning its tokens.",
    icon: "/images/pages/ecosystem/token-lab.svg",
    links: [
      { label: "Website", url: "https://usekoinos.com/token" },
      { label: "GitHub", url: "https://github.com/therexdev/discover-koinos" },
    ],
  },
  {
    name: "Koinos AI",
    description: "Koinos AI is an alpha local-first desktop AI app and experimental compute network for running private models, exposing an OpenAI-compatible API, and contributing idle compute for testnet KAI rewards.",
    icon: "/images/pages/ecosystem/koinos-ai.svg",
    links: [
      { label: "Website", url: "https://koinosai.com/" },
      { label: "GitHub", url: "https://github.com/therexdev/kaiapp" },
    ],
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
    name: "KoinosKit",
    description: "KoinosKit is an experimental open-source desktop app for running and monitoring a Koinos block-producing node, with guided setup, wallet and VHP management, quick sync, and reward tracking.",
    icon: "/images/pages/ecosystem/koinoskit.svg",
    links: [
      { label: "Website", url: "https://koinoskit.site/" },
      { label: "GitHub", url: "https://github.com/therexdev/Koinos-Node" },
    ],
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
  const router = useRouter();
  const isSpanish = router.locale === "es";
  const headTitle = isSpanish ? "Ecosistema | Koinos" : "Ecosystem | Koinos";
  const description = isSpanish
    ? "Descubre aplicaciones, herramientas, exploradores, carteras y proyectos de la comunidad que forman el ecosistema de Koinos."
    : "Discover the applications, tools, explorers, wallets, and community projects that make up the Koinos ecosystem.";
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
        headTitle={headTitle}
      >
        <LocalizedHead pathname="/ecosystem" title={headTitle} description={description} />
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
                      <h2 className="s-56 w-700">Koinos AI</h2>
                      {/* Text */}
                      <p className="p-lg w-400">
                        Run private AI on your own hardware, connect applications through an OpenAI-compatible API, and contribute idle compute to the Koinos AI network.
                      </p>

                      <a href="https://www.koinosai.com/" target="_blank" rel="noreferrer" className="btn btn-success border border-success btn-round-md">Visit Koinos AI</a>

                    </div>
                  </div>	{/* END TEXT BLOCK */}
                  {/* IMAGE BLOCK */}
                  <div className="col-md-6">
                    <div className="img-block right-column wow" data-aos='fade-right'>
                      <img className="img-fluid btn color--theme" src="/images/programs/koinos-ai.svg" alt="Koinos AI" />
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

          <section id="features-11" className="py-100 features-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    {/* Title */}
                    <h2 className="s-52 w-700">An Ever-Evolving Ecosystem</h2>
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
                        <div className="d-flex flex-wrap gap-3 mt-8">
                          {(dapp.links || [{ label: "Learn more", url: dapp.url }]).map((link) => (
                            <a href={link.url} target="_blank" rel="noreferrer" className="btn-link" key={link.url}>{link.label}</a>
                          ))}
                        </div>
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
