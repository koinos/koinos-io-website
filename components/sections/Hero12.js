

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero12() {
    return (
        <>
            <section id="hero-12" className="bg--scroll hero-section">
                <div className="hero-overlay">
                    <div className="container text-center">
                        {/* HERO TEXT */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9 col-xl-10">
                                <div className="hero-12-txt color--white wow fadeInUp">
                                    {/* Title */}
                                    <h2 className="s-62 w-700">Find inspiration for your next design project</h2>
                                    {/* Text */}
                                    <p className="s-22">Pixel-perfect, lovely design. More power behind every pixel</p>
                                    {/* Button */}
                                    <Link href="#banner-13" className="btn r-04 btn--theme hover--tra-white">Get started for free</Link>
                                    <p className="p-sm btn-txt ico-15">
                                        <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                    </p>
                                </div>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="row">
                            <div className="col">
                                <div className="hero-12-img video-preview wow fadeInUp">
                                    {/* Play Icon */}
                                    <VideoPopup style={1}/>
                                    {/* Preview Image */}
                                    <img className="img-fluid" src="/images/dashboard-04.png" alt="hero-image" />
                                </div>
                            </div>
                        </div>	{/* END HERO IMAGE */}
                    </div>    {/* End container */}
                </div>	   {/* End hero-overlay */}
            </section>
        </>
    )
}
