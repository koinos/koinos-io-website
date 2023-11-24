

import Link from "next/link"
export default function Hero6() {
    return (
        <>
            <section id="hero-6" className="hero-section">
                <div className="container">
                    <div className="hero-6-wrapper r-16">
                        <div className="row d-flex align-items-center">
                            {/* HERO TEXT */}
                            <div className="col-md-6">
                                <div className="hero-6-txt wow fadeInRight">
                                    {/* Title */}
                                    <h2 className="s-54 w-700">Start with a plan and finish with results</h2>
                                    {/* Text */}
                                    <p className="p-lg">Sodales tempor sapien quaerat ipsum congue and laoreet turpis neque
                                        auctor turpis vitaer
                                    </p>
                                    {/* Button */}
                                    <Link href="#banner-1" className="btn r-04 btn--theme hover--theme">Get started for free</Link>
                                    <p className="p-sm btn-txt ico-15">
                                        <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                    </p>
                                </div>
                            </div>	{/* END HERO TEXT */}
                            {/* HERO IMAGE */}
                            <div className="col-md-6">
                                <div className="hero-6-img wow fadeInLeft">
                                    <img className="img-fluid" src="/images/img-08.png" alt="hero-image" />
                                </div>
                            </div>
                        </div>   {/* End row */}
                    </div>    {/* End hero-6-wrapper */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
