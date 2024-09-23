import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function MediaKit() {
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
      footerStyle={3}
      headerCls="navbar-dark inner-page-header"
    >
      <div className="mt-5 text-light py-5 header-section">
        <div className="container mt-5">
          <h1 className="mb-4 display-1 fw-bold">Koinos Media Kit</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 order-lg-2 mb-4">
            <div className="sidebar" ref={sidebarRef}>
              <nav className="nav flex-column">
                <Link href="#logotype" legacyBehavior>
                  <a className="nav-link">Logotype</a>
                </Link>
                <Link href="#clearspace" legacyBehavior>
                  <a className="nav-link">Clearspace</a>
                </Link>
                <Link href="#colors" legacyBehavior>
                  <a className="nav-link">Colors</a>
                </Link>
                <Link href="#assets" legacyBehavior>
                  <a className="nav-link">Assets</a>
                </Link>
                <Link href="#press-inquiries" legacyBehavior>
                  <a className="nav-link">Press Inquiries</a>
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-8 order-lg-1">
            <section id="logotype" className="mb-5 pt-5">
              <h2>Welcome to the Koinos Media Kit Page</h2>
              <p>
                Official visual assets to help promote Koinos in marketing
                communications, including logos, logo marks, and logotypes.
              </p>
            </section>
            <section id="logotype" className="mb-5 pt-5">
              <h2>Logotype</h2>
              <p>
                The Koinos logotype is designed with modern and clean lines,
                reflecting the innovative and forward-thinking nature of the
                platform. Please use the provided versions without alterations.
              </p>
              <div>
                <img
                  src="/images/logo/png/koinos-logotype.png"
                  alt="logo image"
                  className="img-fluid w-75"
                />
              </div>
            </section>
            <section id="clearspace" className="mb-5 pt-5">
              <h2>Clearspace</h2>
              <p>
                Ensure there is sufficient space around the Koinos logomark to
                prevent clutter. Below are the minimum spacings for both
                logomark and wordmark.
              </p>
              <div className="images">
                <img
                  src="/images/logo/spacing/standard.png"
                  alt="logo spacing image"
                  className="img-fluid"
                />
              </div>
            </section>
            <section id="colors" className="mb-5 pt-5">
              <h2>Colors</h2>
              <div className="mt-4">
                <p className="text-uppercase mt-2">Koinos Purple</p>
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
                <p className="text-uppercase mt-2">Accent Purple</p>
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
                <p className="text-uppercase mt-2">Koinos Black</p>
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
                <p className="text-uppercase mt-2">White</p>
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
              <h2 className="mb-5">Assets</h2>
              <p>
                <div className="btn">
                  <a href="/images/logo/koinos-media-kit.zip" download>
                    All Assets
                  </a>{" "}
                  (ZIP, 786KB)
                </div>{" "}
                <div>
                  Download the Koinos logotype and mark in various formats and
                  colors. Please use the provided versions without alterations.
                </div>
              </p>
              <hr />
              <div>
                {/* koinos logo */}
                <div className="logo-section">
                  <div>
                    <div>
                      <h4 className="mb-4">Koinos Logo</h4>
                    </div>
                    <div className="download-box">
                      <img
                        src="/images/logo/png/koinos-logo-light.png"
                        alt="Main Logotype"
                        className="img-fluid w-50"
                      />
                      <div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/png/koinos-logo-light.png"
                            download
                          >
                            PNG
                          </a>
                        </div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/svg/koinos-logo-light.svg"
                            download
                          >
                            SVG
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="/images/logo/koinos-logo-set.zip"
                        className="gray-txt"
                        download
                      >
                        Download all variations
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                {/* koinos logotype */}
                <div className="logo-section">
                  <div>
                    <div>
                      <h4 className="mb-4">Koinos Logotype</h4>
                    </div>
                    <div className="download-box">
                      <img
                        src="/images/logo/png/koinos-logotype-white.png"
                        alt="Koinos Logotype"
                        className="img-fluid w-50"
                      />
                      <div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/png/koinos-logotype.png"
                            download
                          >
                            PNG
                          </a>
                        </div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/svg/koinos-logotype.svg"
                            download
                          >
                            SVG
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="/images/logo/koinos-logotype-set.zip"
                        className="gray-txt"
                        download
                      >
                        Download all variations
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                {/* koinos mark */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">Koinos Logomark</h4>
                  </div>
                  <div className="download-box">
                    <img src="/images/logo/png/koinos-logomark.png" alt="Koinos Mark" className="img-fluid w-25" />
                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-logomark.png" download>
                          PNG
                        </a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-logomark.svg" download>
                          SVG
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="/images/logo/png/koinos-mark.zip"
                      className="gray-txt"
                      download
                    >
                      Download all variations
                    </a>
                  </div>
                </div>
                <hr />
                {/* koinos icon */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">Koinos Icon</h4>
                  </div>
                  <div className="download-box">
                    <img src="/images/logo/png/koinos-icon.png" alt="Koinos Mark" className="img-fluid w-25" />
                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-icon.png" download>
                          PNG
                        </a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-icon.svg" download>
                          SVG
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a
                      href="/images/logo/png/koinos-icon-set.zip"
                      className="gray-txt"
                      download
                    >
                      Download all variations
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </section>
            <section id="press-inquiries" className="mb-5 pt-5">
              <h2>Press Inquiries</h2>
              <p>
                Please direct press inquiries to{" "}
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
          color: #ffcf21; /* Change this to your desired color */
          outline: none; /* Remove outline */
        }
        .sidebar {
          margin-top: 4em;
          z-index: 10;
          background: #13151b;
          transition: top 0.5s ease; /* Add transition for smooth movement */
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
