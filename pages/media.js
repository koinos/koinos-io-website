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
                  src="/images/logo/png/koinos-logo-standard-purple-white.png"
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
                <p className="text-uppercase mt-2">Koinos Deep Purple</p>
                <p className="small mt-2">#25174E</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#25174E",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">Koinos Purple</p>
                <p className="small mt-2">#6F00F6</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#6F00F6",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">Accent Yellow</p>
                <p className="small mt-2">#FFCF21</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#FFCF21",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">Almost Black</p>
                <p className="small mt-2">#090221</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#090221",
                    height: "50px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <p className="text-uppercase mt-2">Almost White</p>
                <p className="small mt-2">#F5F5F5</p>
                <div
                  className="mt-6"
                  style={{
                    backgroundColor: "#F5F5F5",
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
                        src="/images/logo/png/koinos-logo-standard-purple-white.png"
                        alt="Main Logotype"
                        className="img-fluid w-50"
                      />
                      <div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/png/koinos-logo-standard-purple-white.png"
                            download
                          >
                            PNG
                          </a>
                        </div>
                        <div className="dl-button">
                          <a
                            href="/images/logo/svg/koinos-logo-standard.svg"
                            download
                          >
                            SVG
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        href="/images/logo/png/koinos-logo-standard.zip"
                        className="gray-txt"
                        download
                      >
                        Download variations
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
                            href="/images/logo/png/koinos-logotype-white.png"
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
                        href="/images/logo/png/koinos-logotype.zip"
                        className="gray-txt"
                        download
                      >
                        Download variations
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
                {/* koinos mark */}
                <div className="logo-section">
                  <div>
                    <h4 className="mb-4">Koinos Mark</h4>
                  </div>
                  <div className="download-box">
                    <svg
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 3024.9 975.45"
                      className="koinos-mark img-fluid h-8em"
                    >
                      <path
                        class="cls-1"
                        d="M1005.85,335.51l-401-231.52c-3.81-2.2-8.83-3.3-13.86-3.3s-10.05,1.1-13.86,3.3l-401,231.52c-7.62,4.4-13.86,15.2-13.86,24v463.03c0,8.8,6.24,19.6,13.86,24l401,231.52c3.81,2.2,8.83,3.3,13.86,3.3s10.05-1.1,13.86-3.3l401-231.52c7.62-4.4,13.86-15.2,13.86-24v-463.03c0-8.8-6.24-19.6-13.86-24ZM591,151.42l357.1,206.17-186.54,107.7-156.16-90.16c-3.81-2.2-8.83-3.3-13.86-3.3s-10.05,1.1-13.86,3.3l-156.84,90.55-187.44-107.81,357.59-206.45ZM445.34,535.13l119.83,68.92c.91.52,1.85.94,2.81,1.26-.1.73-.18,1.47-.18,2.23v138.96l-108.61-62.7c-7.62-4.4-13.86-15.2-13.86-24v-124.68ZM591.21,590.87l.4.69h-.79l.4-.69ZM593.28,562.45c-.75.43-1.44.93-2.09,1.46-.65-.53-1.34-1.03-2.09-1.46l-120.15-69.11,122.61-70.79,122.01,70.44-120.29,69.45ZM615.55,604.87c.59-.25,1.16-.52,1.73-.85l120.49-69.57v125.36c0,8.8-6.24,19.6-13.86,24l-108.12,62.42v-138.68c0-.92-.1-1.81-.25-2.69ZM210.29,794.82v-394.88l187.05,107.58v180c0,8.8,6.24,19.6,13.86,24l156.61,90.42v215.29l-343.65-198.41c-7.62-4.4-13.86-15.2-13.86-24ZM957.85,818.82l-342.05,197.48v-214.65l156.12-90.13c7.62-4.4,13.86-15.2,13.86-24v-180.79l185.94-107.35v395.44c0,8.8-6.24,19.6-13.86,24Z"
                      />
                    </svg>

                    <div>
                      <div className="dl-button">
                        <a href="/images/logo/png/koinos-mark.png" download>
                          PNG
                        </a>
                      </div>
                      <div className="dl-button">
                        <a href="/images/logo/svg/koinos-mark.svg" download>
                          SVG
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <br />
                    <p>The SVG colors can be changed with CSS by modifying the fill of the `.koinos-mark` class. </p>
                    <a
                      href="/images/logo/png/koinos-mark.zip"
                      className="gray-txt"
                      download
                    >
                      Download variations
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
