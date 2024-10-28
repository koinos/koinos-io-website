

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero4() {
    return (
        <>
            <section id="hero-4" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-10">
                            <div className="hero-4-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">Manage all your content in easy way with Martex</h2>
                                {/* Buttons */}
                                <div className="btns-group mt-15">
                                    <Link href="#" className="btn r-04 btn--theme hover--black">Download for MacOS</Link>
                                    <Link href="#" className="btn r-04 btn--tra-black hover--black">Download for Windows</Link>
                                </div>
                                {/* Buttons Group Text */}
                                <p className="p-sm btns-group-txt color--black">
                                    Requires macOS 10.13+ or Windows 10+ 64bit.
                                    <span className="txt-data">Current version 2.18.03 <Link href="/download">What's New?</Link></span>
                                </p>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-4-img video-preview wow fadeInUp">
                                {/* Play Icon */}
                                <VideoPopup style={1}/>
                                {/* Preview Image */}
                                <img className="img-fluid" src="/images/dashboard-04.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>    {/* End container */}
            </section>
        </>
    )
}
