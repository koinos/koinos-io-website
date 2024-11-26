import { useTranslations } from 'next-intl';

export default function FeatureCommunity() {
  const t = useTranslations('FeatureCommunity');

  return (
    <>
      <section id="feature-community" className="shape--bg shape--white-500 pt-100 features-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <div className="txt-block left-column wow" data-aos='fade-left'>
                <span className="section-id">{t('section_id')}</span>
                <h2 className="s-46 w-700">{t('title')}</h2>
                <p>{t('description')}</p>

                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p>{t('built_for.developers')}</p>
                  </div>
                </div>

                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p>{t('built_for.entrepreneurs')}</p>
                  </div>
                </div>

                <div className="cbox-1 ico-15">
                  <div className="ico-wrap color--theme">
                    <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                  </div>
                  <div className="cbox-1-txt">
                    <p className="mb-0">{t('built_for.users')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="fbox-12-wrapper wow" data-aos='fade-right'>
                <div className="row">
                  <div className="col-md-6">
                    <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          <span className="fa-brands fa-telegram fa-3x" />
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">Telegram</h5>
                        <p>{t('telegram_text')} <a href="https://telegram.koinos.io">Telegram</a>.</p>
                      </div>
                    </div>

                    <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          <span className="fa-brands fa-x-twitter fa-3x" />
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">Twitter</h5>
                        <p>{t('twitter_text')} <a href="https://twitter.koinos.io">Twitter</a>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div id="fb-12-3" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          <span className="fa-brands fa-discord fa-3x" />
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">Discord</h5>
                        <p>{t('discord_text')} <a href="https://discord.koinos.io">Discord</a>.</p>
                      </div>
                    </div>

                    <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          <span className="fa-solid fa-angles-right fa-3x" />
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">More</h5>
                        <p>{t('more_text')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
