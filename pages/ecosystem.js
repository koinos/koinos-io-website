import Layout from "@/components/layout/Layout";
import { useTranslations } from 'next-intl';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function EcosystemPage() {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const dapps = [
    {
      name: "koindx",
      icon: "/images/pages/ecosystem/koindx.png",
      url: "https://koindx.com/",
      featured: true,
      featuredImage: "/images/pages/ecosystem/koindx-swap.png"
    },
    {
      name: "kap",
      icon: "/images/pages/ecosystem/kap.png",
      url: "https://kap.domains/"
    },
    {
      name: "kollection",
      icon: "/images/pages/ecosystem/kollection.png",
      url: "https://kollection.app/"
    },
    {
      name: "kanvas",
      icon: "/images/pages/ecosystem/kanvas.png",
      url: "https://kanvas.app/"
    },
    {
      name: "koiner",
      icon: "/images/pages/ecosystem/koiner.png",
      url: "https://koiner.app/"
    },
    {
      name: "fogata",
      icon: "/images/pages/ecosystem/fogata.png",
      url: "https://fogata.io/"
    },
    {
      name: "koincity",
      icon: "/images/pages/ecosystem/koincity.png",
      url: "https://koincity.com/"
    },
    {
      name: "burnkoin",
      icon: "/images/pages/ecosystem/burnkoin.png",
      url: "https://burnkoin.com/"
    },
    {
      name: "koinosblocks",
      icon: "/images/pages/ecosystem/koinosblocks.png",
      url: "https://koinosblocks.com/"
    },
    {
      name: "koinosboxpolls",
      icon: "/images/pages/ecosystem/polls.png",
      url: "https://koinosbox.com/polls"
    },
    {
      name: "atomicswaps",
      icon: "/images/pages/ecosystem/atomic-swap.png",
      url: "https://swap.fbslo.net/"
    },
    {
      name: "spacestriker",
      icon: "/images/pages/ecosystem/space-striker.png",
      url: "https://kanvas-app.com/space_striker/"
    },
    {
      name: "cryptobulls",
      icon: "/images/pages/ecosystem/crypto-bulls.png",
      url: "https://kryptobulls.io/"
    },
    {
      name: "serfdomsorcery",
      icon: "/images/pages/ecosystem/serfdorm-scorcery.png",
      url: "https://twitter.com/SerfdomSorcery"
    },
    {
      name: "nicknames",
      icon: "/images/pages/ecosystem/nicknames.png",
      url: "https://koinosbox.com/nicknames"
    },
    {
      name: "koincrew",
      icon: "/images/pages/ecosystem/koincrew.png",
      url: "https://koincrew.com/"
    },
    {
      name: "koinosgarden",
      icon: "/images/pages/ecosystem/koinos-garden.png",
      url: "https://dapp.koinosgarden.com/"
    },
    {
      name: "lordsforsaken",
      icon: "/images/pages/ecosystem/lords-forsaken.png",
      url: "https://lordsforsaken.com/"
    }
  ]

  // Get the featured project
  const featuredProject = dapps.find(dapp => dapp.featured);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle={t('Ecosystem.pageTitle')}
      >
        <div>
          {featuredProject && (
            <section className="page-hero-section">
              <div className="page-hero-section-overlay bg--01 bg--scroll">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="txt-block left-column color--white wow" data-aos='fade-left'>
                        <span className="section-id rounded-id bg--tra-white color--white">
                          {t('Ecosystem.featured')}
                        </span>
                        <h2 className="s-56 w-700">{t(`Ecosystem.dapps.${featuredProject.name}.title`)}</h2>
                        <p className="p-lg w-400">
                          {t(`Ecosystem.dapps.${featuredProject.name}.description`)}
                        </p>
                        <a href={featuredProject.url} className="btn btn-success border border-success btn-round-md">
                          {t(`Ecosystem.dapps.${featuredProject.name}.visitProject`)}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-block right-column wow" data-aos='fade-right'>
                        <img 
                          className="img-fluid btn color--theme" 
                          src={featuredProject.featuredImage || featuredProject.icon} 
                          alt={t(`Ecosystem.dapps.${featuredProject.name}.title`)} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wave-shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170">
                  <path fill="#fff" fillOpacity={1} d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
                </svg>
              </div>
            </section>
          )}

          <section id="features-11" className="py-100 features-section division">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title mb-70">
                    <h2 className="s-52 w-700">{t('Ecosystem.title')}</h2>
                    <p className="s-14 mt-4 color--grey">{t('Ecosystem.description')}</p>
                  </div>
                </div>
              </div>
              <div className="fbox-wrapper">
                <div className="row row-cols-1 row-cols-md-2 rows-3">
                  {dapps.map((dapp, index) => (
                    <div className="col-12 d-flex flex-column flex-md-row align-items-center mb-60 mt-30 gap-4" key={index}>
                      <img src={dapp.icon} alt={dapp.name} style={{ width: "150px" }} className="mb-3 mb-md-0" />
                      <div className="fbox-txt">
                        <h6 className="s-22 w-700">{dapp.name}</h6>
                        <p>{t(`Ecosystem.dapps.${dapp.name.toLowerCase()}.description`)}</p>
                        <a href={dapp.url} className="btn-link mt-8">{t('Ecosystem.learnMore')}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}