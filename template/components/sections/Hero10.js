

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero10() {
    return (
        <>
            <section id="hero-10" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-10-txt wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-52 w-700">Keep your files safe with Martex</h2>
                                {/* Text */}
                                <h4 className="s-28 color--grey">Your content is secure and stays private anywhere, anytime</h4>
                                {/* Buttons */}
                                <div className="btns-group">
                                <Link href="#banner-13" className="btn r-04 btn--theme hover--black">Get started</Link>
                                    <VideoPopup style={3}/>
                                </div>
                                {/* Buttons Text */}
                                <p className="p-sm btns-group-txt">
                                    Requires macOS 10.13+ or Windows 10+ 64bit.
                                    <span className="txt-data">Current version 2.18.03 <Link href="/download">What's New?</Link></span>
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-10-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/dashboard-04.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
