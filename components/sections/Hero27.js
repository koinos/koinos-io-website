import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";

export default function Hero27({ onOpenModal }) {
  const title1 = "The World's First";
  const title2 = "Free-To-Use Blockchain";
  const subtle =
    "Opensource, Free to Use, Modular, Scalable, and Fair Launched";

  return (
    <>
      <section id="hero-27" className="gr--whitesmoke hero-section">
        <div className="hero-overlay bg--fixed">
          <div className="container text-center">
            {/* HERO TEXT */}
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="hero-27-txt wow fadeInUp">
                  {/* Title */}
                  <h2 className="s-60 w-700">{title1}</h2>
                  <h2 className="s-60 w-700">{title2}</h2>
                  {/* Text */}
                  <p className="s-20">{subtle}</p>
                  {/* Buttons */}
                  <div className="btns-group">
                    <VideoPopup
                      style="4"
                      onOpen={onOpenModal}
                    />
                    <Link
                      href="https://docs.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme hover--tra-black"
                    >
                      Build on Koinos
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
