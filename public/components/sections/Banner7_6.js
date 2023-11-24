

import Link from "next/link"
export default function Banner7_6() {
    return (
        <>
            <section id="banner-7" className="banner-section">
                <div className="banner-overlay py-100">
                    <div className="container">
                        {/* BANNER-7 WRAPPER */}
                        <div className="banner-7-wrapper">
                            <div className="row justify-content-center">
                                {/* BANNER-7 TEXT */}
                                <div className="col-md-8">
                                    <div className="banner-7-txt text-center">
                                        {/* Section ID */}
                                        <span className="section-id">Get Started Now</span>
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Grow your business with integrated marketing tools</h2>
                                        {/* Buttons */}
                                        <div className="btns-group">
                                            <Link href="/signup-1" className="btn r-04 btn--theme hover--theme">Get srarted - it's free
                                            </Link>
                                            <Link href="/pricing-1" className="btn r-04 btn--tra-black hover--theme">Discover pricing</Link>
                                        </div>
                                        {/* Button Text */}
                                        <p className="btn-txt ico-15">Free for 14 days - no credit card required.</p>
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* END BANNER-7 WRAPPER */}
                    </div>    {/* End container */}
                </div>     {/* End banner overlay */}
            </section>
        </>
    )
}
