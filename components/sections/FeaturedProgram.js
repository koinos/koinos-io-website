import { useRef, useEffect } from "react";

export default function FeaturedProgram() {

    const title = "Bridge and Win";
    const text = "Join the KOINOS X Chainge Bridge Contest to be part of a community shaping the future of finance. Bridge, share, and you could win part of the 7,000 $KOIN and 30,000 $XCHNG prize pool.";

    const smallTitle = "Maximize your earnings";
    const bullet1 = "Earn up to 16% on bridged assets";
    const bullet2 = "Earn KoinDX points by providing liquidity to select pools";
    const bullet3 = "Win a piece of the prize pool by participating in the contest";

    return (
        <>
            <section id="featured-program" className="pt-100 ct-01 content-section features-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow" data-aos='fade-left'>
                                {/* Section ID */}
                                <span className="section-id">Featured Program</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">{title}</h2>
                                {/* Text */}
                                <p>{text} <a target="_blank" href="https://taskon.xyz/campaign/detail/238778750">Join the contest now!</a></p>
                                {/* Small Title */}
                                <h5 className="s-24 w-700">{smallTitle}</h5>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>{bullet1}</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>{bullet2}
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                {/*
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">{bullet3}</p>
                                    </div>
                                </div>
                                */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow" data-aos='fade-right'>
                                <img className="img-fluid rounded" src="/images/koinos-chainge-bridge.gif" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
