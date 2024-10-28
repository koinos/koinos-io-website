

import Link from "next/link"
export default function Hero25() {
    return (
        <>
            <section id="hero-25" className="1gr--whitesmoke bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-25-txt wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">Built-In Automation</span>
                                {/* Title */}
                                <h2 className="s-52 w-700">Connect your brand with your customers</h2>
                                {/* Text */}
                                <p className="p-lg">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute
                                    ligula and aliquet tortor
                                </p>
                                {/* Button */}
                                <Link href="#banner-3" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-25-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-25-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
