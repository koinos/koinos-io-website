

import Link from "next/link"
export default function Hero20() {
    return (
        <>
            <section id="hero-20" className="bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="hero-20-txt wow fadeInRight">
                                {/* Hero Logo  */}
                                <div className="hero-logo">
                                    <img className="img-fluid light-theme-img" src="/images/logo-blue.png" alt="hero-logo" />
                                    <img className="img-fluid dark-theme-img" src="/images/logo-blue-white.png" alt="hero-logo" />
                                </div>
                                {/* Title */}
                                <h2 className="s-48 w-700">Increase your traffic and boost your brand</h2>
                                {/* Text */}
                                <p className="p-md">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor
                                    a volute ligula and aliquet tortor
                                </p>
                                {/* Button */}
                                <Link href="#banner-3" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
