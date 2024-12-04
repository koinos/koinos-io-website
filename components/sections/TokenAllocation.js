import { useTranslations } from 'next-intl';

export default function TokenAllocation() {
  const t = useTranslations('TokenAllocation');

  return (
    <>
      <section className="pt-100 ct-01 content-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow" data-aos='fade-left'>
                {/* Section ID */}
                <span className="section-id">{t('sectionId')}</span>
                
                {/* Title */}
                <h2 className="s-46 w-700">{t('title')}</h2>
                
                {/* Text */}
                <p>{t('description')}</p>
                
                {/* CONTENT BOX #1 */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p>{t('features.fairLaunch')}</p>
                  </div>
                </div>

                {/* CONTENT BOX #2 */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p>{t('features.noLocked')}</p>
                  </div>
                </div>

                {/* CONTENT BOX #3 */}
                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p className="mb-0">{t('features.publicAllocation')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block right-column wow" data-aos='fade-right'>
                <img className="img-fluid" src="/images/sections/token-allocation/tokenomics.png" alt={t('sectionId')} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
