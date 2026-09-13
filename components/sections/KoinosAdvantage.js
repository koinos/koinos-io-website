import { useRouter } from "next/router";
import { FEATURES_COPY } from "@/data/features";

export default function KoinosAdvantage() {
  const router = useRouter();
  const content = FEATURES_COPY[router.locale === "es" ? "es" : "en"];

  return (
    <>
      <section id="features" className="py-100 features-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-80 py-4">
                {/* Title */}
                <h2 className="s-50 w-700">{content.title}</h2>
                {/* Text */}
                <p className="s-21 color--grey">{content.subtitle}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-11 WRAPPER */}
          <div className="fbox-wrapper">
            <div className="row row-cols-1 row-cols-md-2 rows-3">
              {content.items.map((item) => (
                <div key={item.title} className="col">
                  <div className="fbox-11 fb-1 wow"  data-aos='fade-up'>
                    {/* Icon */}
                    <div className="fbox-ico-wrap">
                      <div className="fbox-ico ico-60">
                        <div className="shape-ico color--theme">
                          <img src={item.icon} alt={content.imageAlt} />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">{item.title}</h6>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-11 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
