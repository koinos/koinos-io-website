import Link from "next/link";
import { useTranslations } from "next-intl";

export default function JoinTheCommunity() {
  const t = useTranslations("JoinTheCommunity");
  
  return (
    <>
      <section id="join-the-community" className="mb-100 mt-100 ct-01 content-section features-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow" data-aos='fade-left'>
                <span className="section-id">{t("sectionId")}</span>
                <h2 className="s-39 w-700">{t("title")}</h2>
                <p>{t("description")}</p>
                <div className="btns-group">
                  <Link
                    href="https://telegram.koinos.io/" target="_blank"
                    className="btn r-04 btn--theme btn--primary mt-20"
                  >
                    {t("buttons.telegram")}{" "}<i className="fa-brands fa-telegram fa-lg" />
                  </Link>
                  <Link
                    href="https://discord.koinos.io/"
                    target="_blank"
                    className="btn r-04 btn--theme btn--secondary"
                  >
                    {t("buttons.discord")}{" "}<i className="fa-brands fa-discord fa-lg" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block right-column wow" data-aos='fade-right'>
                <img
                  className="img-fluid rounded"
                  src="/images/sections/join-the-community/koinos-community.png"
                  alt="Join the community!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
