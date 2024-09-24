import { useRef, useEffect } from "react";

export default function FeatureCommunity() {
    return (
        <>
            <section id="feature-community" className="shape--bg shape--white-500 pt-100 features-section division">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-5">
                            <div className="txt-block left-column wow" data-aos='fade-left'>
                                {/* Section ID */}
                                <span className="section-id">Community</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Building the Future of Web3</h2>
                                {/* Text */}
                                <p>Koinos is a decentralized project governed by the community. Exciting new community projects emerge regularly, reflecting the diversity of thought and creativity of the Koinos community.
                                </p>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Built for Developers</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Built for Entrepreneurs
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">Built for Users</p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* FEATURES-12 WRAPPER */}
                        <div className="col-md-7">
                            <div className="fbox-12-wrapper wow" data-aos='fade-right'>
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* FEATURE BOX #1 */}
                                        <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="fa-brands fa-telegram fa-3x" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div> {/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Telegram</h5>
                                                <p>Shape the future of the protocol by joining us on <a href="https://telegram.koinos.io">Telegram</a>.
                                                </p>
                                            </div>
                                        </div>
                                        {/* FEATURE BOX #2 */}
                                        <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="fa-brands fa-discord fa-3x" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div> {/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">Discord</h5>
                                                <p>Collaborate with Web3 engineers and validators on <a href="https://discord.koinos.io">Discord</a>.
                                                </p>
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
                                                    <span className="fa-brands fa-x-twitter fa-3x" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div> {/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">X</h5>
                                                <p>Stay up-to-date with the latest developments by following us on <a href="https://x.com/koinosnetwork">X</a>.
                                                </p>
                                            </div>
                                        </div>
                                        {/* FEATURE BOX #4 */}
                                        <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                                            {/* Icon */}
                                            <div className="fbox-ico ico-50">
                                                <div className="shape-ico color--theme">
                                                    {/* Vector Icon */}
                                                    <span className="fa-solid fa-angles-right fa-3x" />
                                                    {/* Shape */}
                                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                    </svg>
                                                </div>
                                            </div> {/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-19 w-700">More</h5>
                                                <p>Visit the <a href="/community">community page</a> to discover Koinos international and dApp groups.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End row */}
                        </div> {/* END FEATURES-12 WRAPPER */}
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
