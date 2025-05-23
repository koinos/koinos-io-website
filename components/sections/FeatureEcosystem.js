import { useRef, useEffect } from "react";

export default function FeatureEcosystem() {

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
                        <h5 className="s-19 w-700">Kollection</h5>
                        <p><a href="https://kollection.app">Kollection</a> is a full featured NFT marketplace that allows creators to launch and sell their products.</p>
                      </div>
                    </div>
                    {/* FEATURE BOX #2 */}
                    <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                      {/* Icon */}
                      <div className="fbox-ico ico-50">
                        <div className="shape-ico color--theme">
                          {/* Vector Icon */}
                          {/*<span className="flaticon-tutorial" />*/}
                          <img src="images/pages/ecosystem/koindx.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">KoinDX</h5>
                        <p><a href="https://koindx.com">KoinDX</a> is the world's first decentralized exchange built on the Koinos blockchain.</p>
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
                          <img src="images/pages/ecosystem/koinosblocks.png" />
                          {/* Shape */}
                          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                          </svg>
                        </div>
                      </div>	{/* End Icon */}
                      {/* Text */}
                      <div className="fbox-txt">
                        <h5 className="s-19 w-700">Koinos Blocks</h5>
                        <p><a href="https://koinosblocks.com">Koinos Blocks</a> is a detailed block explorer for the Koinos blockchain, offering comprehensive data and analytics for users to explore.</p>
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
                        <h5 className="s-19 w-700">KoinCity</h5>
                        <p><a href="https://koincity.com">KoinCity</a> is a token launchpad with features including staking and social interaction.</p>
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
                <span className="section-id">Ecosystem Highlights</span>
                {/* Title */}
                <h2 className="s-44 w-700">An Ever-Evolving Ecosystem</h2>
                {/* Text */}
                <p>With new and innovative dApps popping up every week, Koinos facilitates a bright future for Web3. Check out the <a href="/ecosystem">ecosystem</a> page to learn about more great projects.
                </p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p>Onboard new users with free accounts and allow them to interact with your dApp without cryptocurrency
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="mb-0">Tap into the community to bootstrap your ideas and bring them to fruition
                    </p>
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
