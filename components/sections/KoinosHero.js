import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function KoinosHero() {
  const t = useTranslations('Hero');
  

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
                    <h2 className="s-50 w-700 mb-2">{t('title1')}</h2>
                    <h2 className="s-30 fw-light w-700 mb-4">{t('title2')}</h2>
                  </div>
                  {/* Buttons */}
                  <div className="btns-group hero-btns mt-4">
                    <Link
                      href="https://telegram.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--primary"
                    >
                      {t('buttons.telegram')}{" "}<i className="fa-brands fa-telegram fa-lg" />
                    </Link>
                    <Link
                      href="https://docs.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--secondary"
                    >
                      {t('buttons.build')}{" "}<i className="fa-solid fa-code fa-lg" />
                    </Link>
                  </div>
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
