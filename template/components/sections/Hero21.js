

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero21() {
    return (
        <>
            <section id="hero-21" className="hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-21-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">The perfect analytics tool for your online business</h2>
                                {/* Buttons */}
                                <div className="btns-group">
                                    <Link href="#banner-13" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                                    <Link href="#features-5" className="btn r-04 btn--tra-black hover--theme">How it works</Link>
                                </div>
                                {/* Advantages List */}
                                <ul className="advantages ico-15 mt-15 clearfix">
                                    <li><p className="p-sm">No credit card required</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p className="p-sm">Free 30 days trial</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="hero-21-wrapper r-34">
                        <div className="hero-overlay bg--fixed">
                            <div className="row">
                                <div className="col">
                                    <div className="hero-21-img video-preview wow fadeInUp">
                                        {/* Play Icon */}
                                        <VideoPopup style={1}/>
                                        {/* Preview Image */}
                                        <img className="img-fluid" src="/images/tablet-01.png" alt="video-preview" />
                                    </div>
                                </div>
                            </div>
                        </div>   {/* hero overlay */}
                    </div>    {/* End hero-21-wrapper */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
