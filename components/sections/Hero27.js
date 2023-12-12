import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";
import { useTranslation } from 'react-i18next';

export default function Hero27({ onOpenModal }) {
  const { t } = useTranslation();
  const title1 = t("hero_title1");
  const title2 = t("hero_title2");
  const subtle = t("hero_subtitle");

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
                  <div className="hero-titles">
                    <h2 className="s-60 w-700">{title1}</h2>
                    <h2 className="s-60 w-700">{title2}</h2>
                  </div>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;Build on Koinos&nbsp;&nbsp;&nbsp;&nbsp;
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
