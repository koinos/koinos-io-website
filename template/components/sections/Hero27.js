

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero27() {
    return (
        <>
            <section id="hero-27" className="gr--whitesmoke hero-section">
                <div className="hero-overlay bg--fixed">
                    <div className="container text-center">
                        {/* HERO TEXT */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="hero-27-txt wow fadeInUp">
                                    {/* Title */}
                                    <h2 className="s-60 w-700">The complete toolkit to engage your business</h2>
                                    {/* Text */}
                                    <p className="s-20">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute
                                        gravida and aliquet tortor aliquet egestas magna
                                    </p>
                                    {/* Buttons */}
                                    <div className="btns-group">
                                        <Link href="#banner-3" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                                        <VideoPopup style={5}/>
                                    </div>
                                    {/* Advantages List */}
                                    <ul className="advantages ico-15 mt-25 clearfix">
                                        <li><p>No credit card required</p></li>
                                        <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                        <li><p>Cancel at anytime</p></li>
                                        <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                        <li><p>Free 14 days trial</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>	   {/* End container */}
                </div>	   {/* End hero-overlay */}
            </section>
        </>
    )
}
