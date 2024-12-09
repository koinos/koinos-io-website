import { useRef, useEffect } from "react";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FeatureEcosystem() {
  const t = useTranslations('FeatureEcosystem');

  return (
    <>
      <section id="feature-ecosystem" className="shape--bg shape--white-500 pt-100 features-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* FEATURES-13 WRAPPER */}
            <div className="col-md-7 order-last order-md-2">
              <div className="fbox-13-wrapper wow" data-aos='fade-left'>
                <div className="row">
                  <div className="col-md-6">
                    {/* FEATURE BOX #1 */}
                    <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                      {/* Icon */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/* Vector Icon */}
                          {/*<span className="flaticon-layers-1" />*/}
                          <img src="images/pages/ecosystem/kollection.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">{t('projects.kollection.title')}</h5>
                        <p>{t.rich('projects.kollection.description', {
                          kollectionLink: (chunks) => <a href="https://kollection.app">Kollection</a>
                        })}</p>
                      </div>
                    </div>
                    {/* FEATURE BOX #2 */}
                    <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                      {/* Icon */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/* Vector Icon */}
                          <img src="images/pages/ecosystem/koindx.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">{t('projects.koindx.title')}</h5>
                        <p>{t.rich('projects.koindx.description', {
                          koindxLink: (chunks) => <a href="https://koindx.com">KoinDX</a>
                        })}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* FEATURE BOX #3 */}
                    <div id="fb-12-3" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                      {/* Icon */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/* Vector Icon */}
                          {/*<span className="flaticon-pay-per-click" />*/}
                          <img src="images/pages/ecosystem/koiner-mark.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">{t('projects.koiner.title')}</h5>
                        <p>{t.rich('projects.koiner.description', {
                          koinerLink: (chunks) => <a href="https://koiner.app">{chunks}</a>
                        })}</p>
                      </div>
                    </div>
                    {/* FEATURE BOX #4 */}
                    <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                      {/* Icon */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/* Vector Icon */}
                          {/*<span className="flaticon-taxes" />*/}
                          <img src="images/pages/ecosystem/koincity-mark.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">{t('projects.koincity.title')}</h5>
                        <p>{t.rich('projects.koincity.description', {
                          koincityLink: (chunks) => <a href="https://koincity.com">KoinCity</a>
                        })}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	{/* End row */}
            </div>	{/* END FEATURES-13 WRAPPER */}
            {/* TEXT BLOCK */}
            <div className="col-md-5 order-first order-md-2">
              <div className="txt-block left-column wow" data-aos='fade-right'>
                {/* Section ID */}
                <span className="section-id">{t('sectionId')}</span>
                {/* Title */}
                <h2 className="s-44 w-700">{t('title')}</h2>
                {/* Text */}
                <p>{t.rich('description', {
                  ecosystemLink: (chunk) => <Link href="/ecosystem">ecosystem</Link>
                })}</p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p>{t('benefits.item1')}</p>
                  </li>
                  <li className="list-item">
                    <p className="mb-0">{t('benefits.item2')}</p>
                  </li>
                </ul>
              </div>
            </div>	{/* END TEXT BLOCK */}
          </div>    {/* End row */}
        </div>     {/* End container */}
      </section>
    </>
  )
}
