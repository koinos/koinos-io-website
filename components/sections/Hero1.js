

import Link from "next/link"
export default function Hero1() {
    return (
        <>
            <section id="hero-1" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-1-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-58 w-700">Content is the key to building an audience</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute
                                    ligula and aliquet tortor
                                </p>
                                {/* Button */}
                                <Link href="#banner-3" className="btn r-04 btn--theme hover--tra-white">Get started for free</Link>
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div> {/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-1-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-1-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section>
        </>
    )
}
