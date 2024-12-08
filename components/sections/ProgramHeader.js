import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function ProgramHeader({ program }) {
  const commonT = useTranslations('Programs.common');
  const programT = useTranslations(`Programs.${program.id}`);

  return (
    <>
      <section id="featured-program-header" className="inner-page-hero single-project">
        <div className="project-description txt-block">
          <div className="project-preview-img mb-50">
            <section className="mb-100 ct-01 content-section features-section division">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6 order-last order-md-2">
                    <div className="txt-block left-column wow" data-aos='fade-left'>
                      {/* Title and Program Overview */}
                      <h2 className="s-46 w-700">
                        {programT('featured.title')}
                      </h2>
                      {/* Render the short description here */}
                      <p>
                        {programT('featured.shortDescription')}{" "}
                      </p>
                      <h5 className="s-24 w-700">
                        {programT('featured.subtitle')}
                      </h5>
                      {/* Key Points */}
                      <ul>
                        {program?.keyPoints && Object.values(program.keyPoints).map((point, index) => (
                          <li key={index}>
                            <div className="cbox-1 ico-15">
                              <div className="ico-wrap color--theme">
                                <span className="flaticon-check"></span>
                              </div>
                              <p>{point}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={program.website} target="_blank"
                        className="btn r-04 btn--theme btn--primary mt-20"
                      >
                        {commonT('getStarted')}
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-2">
                    <div className="img-block right-column wow" data-aos='fade-right'>
                      {/* Image */}
                      <img
                        className="img-fluid rounded"
                        src={program.images.banner}
                        alt="content-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Program Description */}
          <div className="project-txt mt-5">
            <p>{programT('featured.description')}</p>

            {/* List of features */}
            {program.details && (
              <ul className="simple-list">
                {program.details.map((item, index) => (
                  <li key={index} className="list-item">
                    <p>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
