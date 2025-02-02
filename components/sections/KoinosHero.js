import Link from "next/link";

export default function KoinosHero() {
  const title1 = "Web3 for Everyone";
  const title2 = "Feeless, Frictionless, Familiar";

  return (
    <>
      {/*<section id="hero-27" className="gr--whitesmoke hero-section">*/}
      <section id="hero-27">
        <div className="hero-overlay bg--fixed">
          <div className="container text-center">
            {/* HERO TEXT */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="hero-27-txt wow" data-aos='fade-down'>
                  {/* Title */}
                  <div className="hero-titles">
                    <h2 className="s-50 w-700 mb-2">{title1}</h2>
                    <h2 className="s-40 w-700 mb-4">{title2}</h2>
                  </div>
                  {/* Buttons */}
                  <div className="btns-group hero-btns mt-4">
                    <Link
                      href="https://telegram.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--primary"
                    >
                      Join Telegram{" "}<i className="fa-brands fa-telegram fa-lg" />
                    </Link>
                    <Link
                      href="https://docs.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--secondary"
                    >
                      Build on Koinos{" "}<i className="fa-solid fa-code fa-lg" />
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
        <div className="arrow">
          <span></span>
        </div>
      </section>
    </>
  );
}
