import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useTranslations } from 'next-intl';

export default function MediaPage() {
  const t = useTranslations('Media');
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const id = window.location.hash.replace("#", "")
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          const yOffset = -150 // Offset for fixed header and additional margin
          const yCoordinate =
            element.getBoundingClientRect().top + window.scrollY + yOffset
          window.scrollTo({ top: yCoordinate, behavior: "smooth" })
        }
      }
    }

    if (window.location.hash) {
      handleScroll()
    }

    window.addEventListener("hashchange", handleScroll)

    return () => {
      window.removeEventListener("hashchange", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleStickySidebar = () => {
      if (sidebarRef.current) {
        const sidebar = sidebarRef.current
        const stickyTop = 20 // Offset from the top
        const scrollTop = window.scrollY

        if (scrollTop > sidebar.offsetTop - stickyTop) {
          sidebar.style.position = "fixed"
          sidebar.style.top = `${stickyTop}px`
        } else {
          sidebar.style.position = "absolute"
          sidebar.style.top = ""
        }
      }
    }

    window.addEventListener("scroll", handleStickySidebar)

    return () => {
      window.removeEventListener("scroll", handleStickySidebar)
    }
  }, [])

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      headerCls="navbar-dark inner-page-header"
      headTitle={t('pageTitle')}
    >
      <div className="mt-5 text-light py-5 header-section">
        <div className="container mt-5">
          <h1 className="mb-4 display-1 fw-bold">{t('mainTitle')}</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 order-lg-2 mb-4">
            <div className="sidebar" ref={sidebarRef}>
              <nav className="nav flex-column">
                <Link href="#logotype" legacyBehavior>
                  <a className="nav-link">{t('navigation.logotype')}</a>
                </Link>
                <Link href="#clearspace" legacyBehavior>
                  <a className="nav-link">{t('navigation.clearspace')}</a>
                </Link>
                <Link href="#colors" legacyBehavior>
                  <a className="nav-link">{t('navigation.colors')}</a>
                </Link>
                <Link href="#assets" legacyBehavior>
                  <a className="nav-link">{t('navigation.assets')}</a>
                </Link>
                <Link href="#press-inquiries" legacyBehavior>
                  <a className="nav-link">{t('navigation.pressInquiries')}</a>
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1">
            <section id="logotype" className="mb-5 pt-5">
              <h2>{t('welcome.title')}</h2>
              <p>{t('welcome.description')}</p>
            </section>
            <section id="logotype" className="mb-5 pt-5">
              <h2>{t('logo.title')}</h2>
              <p>{t('logo.description')}</p>
              <div>
                <img
                  src="/images/logo/png/koinos-logo-white.png"
                  alt="logo image"
                  className="img-fluid w-75"
                />
              </div>
            </section>
            <section id="clearspace" className="mb-5 pt-5">
              <h2>{t('clearspace.title')}</h2>
              <p>{t('clearspace.description')}</p>
              <div className="images">
                <img
                  src="/images/logo/spacing/standard.png"
                  alt="logo spacing image"
                  className="img-fluid"
                />
              </div>
            </section>
            <section id="colors" className="mb-5 pt-5">
              <h2>{t('colors.title')}</h2>
              <div className="mt-4">
                <p className="text-uppercase mt-2">{t('colors.koinosPurple')}</p>
                <p className="small mt-2">#5d00b3</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#5d00b3",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">{t('colors.accentPurple')}</p>
                <p className="small mt-2">#9966FF</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#9966FF",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">{t('colors.koinosBlack')}</p>
                <p className="small mt-2">#121212</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#121212",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">{t('colors.white')}</p>
                <p className="small mt-2">#FFFFFF</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                ></div>
              </div>
            </section>
            <section id="assets" className="mb-5 pt-5">
              <h2 className="mb-5">{t('assets.title')}</h2>
              <div className="d-flex flex-column">
                <a href="/images/logo/koinos-media-kit.zip" download className="btn btn-link text-white p-0">
                  {t('assets.downloadAll')} {t('assets.zipSize')}
                </a>
                <p>{t('assets.description')}</p>
              </div>
              <hr />
              <div>
                {/* koinos logo */}
                <div className="logo-section">
                  <div>
                    <div>
                      <h4 className="mb-4">{t('assets.sections.logo.title')}</h4>
                    </div>
                    <div className="download-box">
                      <img
                        src="/images/logo/png/koinos-logo-white.png"
                        alt="Main Logotype"
                        className="img-fluid w-50"
                      />
                      <div>
                        <div className="dl-button">
                          <a href="/images/logo/png/koinos-logo-white.png" download>PNG</a>
                        </div>
                        <div className="dl-button">
                          <a href="/images/logo/svg/koinos-logo-white.svg" download>SVG</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a href="/images/logo/koinos-logo-set.zip" className="gray-txt" download>
                        {t('assets.downloadVariations')}
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                {/* koinos logotype */}
                <div className="logo-section">
                  <div>
                    <div>
                      <h4 className="mb-4">{t('assets.sections.logotype.title')}</h4>
                    </div>
                    <div className="download-box">
                      <img
                        src="/images/logo/png/koinos-logotype-white.png"
                        alt="Koinos Logotype"
                        className="img-fluid w-50"
                      />
                      <div>
                        <div className="dl-button">
                          <a href="/images/logo/png/koinos-logotype-white.png" download>PNG</a>
                        </div>
                        <div className="dl-button">
                          <a href="/images/logo/svg/koinos-logotype-white.svg" download>SVG</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a href="/images/logo/koinos-logotype-set.zip" className="gray-txt" download>
                        {t('assets.downloadVariations')}
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                {/* koinos mark */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">{t('assets.sections.mark.title')}</h4>
                  </div>
                  <div className="download-box">
                    <img
                      src="/images/logo/png/koinos-logomark-white.png"
                      alt="Koinos Mark"
                      className="img-fluid w-25"
                    />
                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-logomark-white.png" download>PNG</a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-logomark-white.svg" download>SVG</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="/images/logo/koinos-logomark-set.zip" className="gray-txt" download>
                      {t('assets.downloadVariations')}
                    </a>
                  </div>
                </div>
                <hr />
                {/* koinos icon */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">{t('assets.sections.icon.title')}</h4>
                  </div>
                  <div className="download-box">
                    <img
                      src="/images/logo/png/koinos-icon.png"
                      alt="Koinos Mark"
                      className="img-fluid w-25"
                    />
                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-icon.png" download>PNG</a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-icon.svg" download>SVG</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="/images/logo/koinos-icon-set.zip" className="gray-txt" download>
                      {t('assets.downloadVariations')}
                    </a>
                  </div>
                </div>
                <hr />
                {/* koinos icon square */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">{t('assets.sections.iconSquare.title')}</h4>
                  </div>
                  <div className="download-box">
                    <img
                      src="/images/logo/png/koinos-icon-sq.png"
                      alt="Koinos Mark"
                      className="img-fluid w-25"
                    />
                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-icon-sq.png" download>PNG</a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-icon-sq.svg" download>SVG</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="/images/logo/koinos-icon-square-set.zip" className="gray-txt" download>
                      {t('assets.downloadVariations')}
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </section>
            <section id="press-inquiries" className="mb-5 pt-5">
              <h2>{t('pressInquiries.title')}</h2>
              <p>
                {t('pressInquiries.description')}{" "}
                <a href="mailto:press@koinos.io">press@koinos.io</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        h2 {
          margin: 1em 0;
        }
        .nav-link {
          color: white;
          padding: 0.2em 0.5rem;
          text-decoration: none;
        }

        .nav-link:active,
        .nav-link:focus,
        .nav-link:hover {
          color: #9966FF;
          outline: none;
        }
        .sidebar {
          margin-top: 4em;
          z-index: 10;
          transition: top 0.5s ease;
        }
        @media (min-width: 992px) {
          .sidebar {
            position: sticky;
            top: 100px;
          }
        }
        @media (max-width: 991px) {
          .sidebar {
            position: static !important;
            top: auto !important;
            width: auto !important;
          }
        }
        .header-section {
          padding-bottom: 2rem;
        }
        .images {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 1rem 2rem;
        }
        .images img {
          margin-bottom: 1rem;
          width: 100%;
        }
        .logo-section {
          display: flex;
          flex-direction: column;
          margin-top: 2em;
        }
        .download-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          width: 100%;
        }
        .link-list {
          display: flex;
          flex-direction: row;
          gap: 1em;
        }
        .link-list a {
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-align: center;
          text-decoration: none;
          font-size: 0.8rem;
          background: #555;
          display: flex;
          flex-direction: column;
        }
        .link-list a img {
          height: 2rem;
        }
        svg {
          width: 40%;
        }
        .dl-links {
          display: flex;
          flex-direction: row;
          gap: 1em;
        }
        .dl-links img {
          height: 2rem;
        }
        .download-box {
          display: flex;
          flex-direction: row;
          gap: 1em;
          align-items: center;
          justify-content: space-between;
        }
        .dl-button {
          padding: 0.3em 0.7em;
          border-radius: 5px;
          text-align: center;
          text-decoration: none;
          color: white;
          border: 1px solid #555;
          margin-top: 0.5em;
          margin-right: 0.5em;
        }
        .gray-txt {
          color: #555 !important;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-size: 0.8em;
        }
        .h-8em {
          height: 8em;
        }
        .btn {
          padding-left: 0;
        }
        .koinos-mark {
          fill: #6F00F6;
          transition: fill 0.5s;
        }
        .koinos-mark:hover {
          fill: #FFCF21;
          transition: fill 0.5s;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}
