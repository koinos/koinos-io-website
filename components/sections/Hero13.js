

import Link from "next/link"
export default function Hero13() {
    return (
        <>
            <section id="hero-13" className="hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-5">
                            <div className="hero-13-txt wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">Strategies That Work</span>
                                {/* Title */}
                                <h2 className="s-54 w-700">Right SEO strategies for your success</h2>
                                {/* Text */}
                                <p className="p-lg">Mauris ligula ociis ipsum congue neque undo laoreet sagittis sapien diam
                                    tempor
                                </p>
                                {/* Button */}
                                <Link href="#banner-13" className="btn r-04 btn--theme hover--tra-black">Get started for free</Link>
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-7">
                            <div className="hero-13-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-13-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
