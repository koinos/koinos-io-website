import { useEffect, useRef } from "react";
import Link from "next/link";

export default function KoinosHero() {
  const title1 = "The World's First";
  const title2 = "Feeless Smart Contract Platform";
  const subtle = "Fair Launched, No Locked Coins, 100% Public Allocation";
  

  return (
    <>
      {/*<section id="hero-27" className="gr--whitesmoke hero-section">*/}
      <section id="hero-27" data-aos='fade-down'>
        <div className="hero-overlay bg--fixed">
          <div className="container text-center">
            {/* HERO TEXT */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="hero-27-txt wow fadeInUp">
                  {/* Title */}
                  <div className="hero-titles">
                    {/*<img src="/images/logo-white-white.png" alt="Koinos Logo" style={{width: '75%', minWidth: '300px', maxWidth: '488px'}} />*/}
                    <h2 className="s-50 w-700">{title1}</h2>
                    <h2 className="s-40 w-700">{title2}</h2>
                  </div>
                  {/* Text */}
                  <p className="s-20">{subtle}</p>
                  {/* Buttons */}
                  <div className="btns-group hero-btns">
                    <Link
                      href="https://docs.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme hover--tra-black"
                    >
                      Build on Koinos <i className="fa-solid fa-code fa-lg" />
                    </Link>
                    <Link
                      href="https://telegram.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme hover--tra-black"
                    >
                      Join Telegram{" "}
                      <i className="fa-brands fa-telegram fa-lg" />
                    </Link>
                  </div>
                  {/* 
                                    <ul className="advantages ico-15 mt-25 clearfix">
                                        <li><p>No credit card required</p></li>
                                        <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                        <li><p>Cancel at anytime</p></li>
                                        <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                        <li><p>Free 14 days trial</p></li>
                                    </ul>
                                     */}
                </div>
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End hero-overlay */}
      </section>
    </>
  );
}
