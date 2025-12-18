import Layout from "@/components/layout/Layout";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function EcosystemPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const dapps = [
    {
      "name": "KoinDX",
      "description": "KoinDX is a decentralized exchange designed to facilitate seamless token swaps, providing users with a fast, and user-friendly trading experience.",
      "icon": "/images/pages/ecosystem/koindx.png",
      "url": "https://koindx.com/"
    },
    {
      "name": "KAP",
      "description": "KAP provides easy access to dApps with a free or premium username, serving as the backbone for free-to-use applications on the Koinos blockchain",
      "icon": "/images/pages/ecosystem/kap.png",
      "url": "https://kap.domains/"
    },
    {
      "name": "Kollection",
      "description": "Kollection is an innovative NFT marketplace where users can buy, sell, and create unique digital assets, fostering a vibrant community of creators and collectors.",
      "icon": "/images/pages/ecosystem/kollection.png",
      "url": "https://kollection.app/"
    },
    {
      "name": "Fogata",
      "description": "Fogata is a robust mining pool specifically designed for Koinos enthusiasts, where users can run their own pools or join those of the community.",
      "icon": "/images/pages/ecosystem/fogata.png",
      "url": "https://fogata.io/"
    },
    {
      "name": "Koincity",
      "description": "Koincity is an innovative launchpad platform that supports the development and launch of new projects on the Koinos blockchain, helping creators bring their ideas to life.",
      "icon": "/images/pages/ecosystem/koincity.png",
      "url": "https://koincity.com/"
    },
    {
      "name": "BurnKoin",
      "description": "BurnKoin is a dedicated mining pool focused on optimizing mining rewards for its users, providing a reliable and efficient environment for Koinos miners.",
      "icon": "/images/pages/ecosystem/burnkoin.png",
      "url": "https://burnkoin.com/"
    },
    {
      "name": "Koinos Blocks",
      "description": "Koinos Blocks is a detailed block explorer for the Koinos blockchain, offering comprehensive data and analytics for users to explore.",
      "icon": "/images/pages/ecosystem/koinosblocks.png",
      "url": "https://koinosblocks.com/"
    },
    {
      "name": "Koinosbox Polls",
      "description": "Koinosbox Polls is a decentralized application that allows users to create, participate in, and manage polls, making community decision-making more transparent and democratic.",
      "icon": "/images/pages/ecosystem/polls.png",
      "url": "https://koinosbox.com/polls"
    },
    {
      "name": "Atomic Swaps",
      "description": "Atomic Swaps is a platform for peer-to-peer cryptocurrency swaps, enabling users to exchange digital assets directly without the need for intermediaries.",
      "icon": "/images/pages/ecosystem/atomic-swap.png",
      "url": "https://swap.fbslo.net/"
    },
    {
      "name": "Crypto Bulls",
      "description": "Crypto Bulls is an action-packed first-person shooter game that combines fast-paced combat with strategic gameplay, offering an exciting experience for gamers.",
      "icon": "/images/pages/ecosystem/crypto-bulls.png",
      "url": "https://kryptobulls.io/"
    },
    {
      "name": "Serfdom & Sorcery",
      "description": "Serfdom & Sorcery is a captivating game set in a fantastical world, where players can immerse themselves in a rich narrative and magical adventures.",
      "icon": "/images/pages/ecosystem/serfdorm-scorcery.png",
      "url": "https://twitter.com/SerfdomSorcery"
    },
    {
      "name": "Nicknames",
      "description": "Nicknames is a service on the Koinos blockchain that allows users to register and resolve unique usernames, making it easier to identify and interact with others.",
      "icon": "/images/pages/ecosystem/nicknames.png",
      "url": "https://koinosbox.com/nicknames"
    },
    {
      "name": "Koin Crew",
      "description": "Koin Crew offers a suite of utilities designed to enhance the Koinos ecosystem, providing users with a range of tools and services to optimize their blockchain experience.",
      "icon": "/images/pages/ecosystem/koincrew.png",
      "url": "https://koincrew.com/"
    },
    {
      "name": "Koinos Garden",
      "description": "Koinos Garden is an investment DAO that brings together a community of investors to collaborate on and fund promising projects within the Koinos ecosystem.",
      "icon": "/images/pages/ecosystem/koinos-garden.png",
      "url": "https://dapp.koinosgarden.com/"
    },
    {
      "name": "Koinosscan",
      "description": "Explore Koinos Blockchain - Search for wallet addresses to view token transfers and balances and NFTs.",
      "icon": "/images/pages/ecosystem/koinosscan.png",
      "url": "https://koinosscan.com/"
    },
    {
      "name": "Sovrano",
      "description": "Web3 for everyone - A user-friendly Koinos wallet accessible from any browser, making blockchain interaction simple and secure.",
      "icon": "/images/pages/ecosystem/sovrano.svg",
      "url": "https://sovrano.io/"
    },
    {
      "name": "VortexBridge",
      "description": "Cross-chain bridge enabling seamless asset transfers between Koinos and other blockchain networks, providing liquidity and interoperability.",
      "icon": "/images/pages/ecosystem/vortexbridge.png",
      "url": "https://vortexbridge.io/bridge"
    },
    {
      "name": "Koinscan",
      "description": "A comprehensive block explorer for the Koinos blockchain, providing detailed transaction data, block information, and network analytics.",
      "icon": "/images/pages/ecosystem/koinscan.png",
      "url": "https://www.koinscan.io/"
    }
  ]


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

                      <a href="https://koindx.com/" className="btn btn-success border border-success btn-round-md">Visit KoinDX</a>

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
                  {dapps.map((dapp, index) => (
                    <div className="col-12 d-flex flex-column flex-md-row align-items-center mb-60 mt-30 gap-4" key={index}>
                      <img src={dapp.icon} alt={dapp.name} style={{ width: "150px" }} className="mb-3 mb-md-0" />
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">{dapp.name}</h6>
                        <p>{dapp.description}</p>
                        <a href={dapp.url} className="btn-link mt-8">Learn more</a>
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