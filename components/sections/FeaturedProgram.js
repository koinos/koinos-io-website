import { useProgramStore } from "@/store/programStore";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function FeaturedProgram() {
    const programs = useProgramStore((state) => state.programs);
    const featuredProgram = Object.values(programs).find((program) => program.featured);
    const t = useTranslations('Programs.earnOnKoinos.featured');
    const commonT = useTranslations('Programs.common');

    if (!featuredProgram) {
      return <p>No featured program at this time.</p>;
    }
  
    return (
      <>
        <section id="featured-program" className="pt-100 ct-01 content-section features-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 order-last order-md-2">
                <div className="txt-block left-column wow" data-aos='fade-left'>
                  <span className="section-id">{commonT('sectionId')}</span>
                  <h2 className="s-46 w-700">{t('title')}</h2>
                  <p>{t('shortDescription')} <a target="_self" href={featuredProgram.url}>{commonT('learnMore')}</a></p>
                  <h5 className="s-24 w-700">{t('subtitle')}</h5>
                  <ul>
                    {[
                      t('keyPoints.first'),
                      t('keyPoints.second'),
                      t('keyPoints.third')
                    ].map((point, index) => (
                      <li key={index}>
                        <div className="cbox-1 ico-15">
                          <div className="ico-wrap color--theme">
                            <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                          </div>
                          <div className="cbox-1-txt">
                            <p>{point}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                    <Link
                      href={featuredProgram.website}
                      className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                    >
                      {commonT('getStarted')}
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 order-first order-md-2">
                <div className="img-block right-column wow" data-aos='fade-right'>
                  <img className="img-fluid rounded" src={featuredProgram.images.banner} alt="content-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}