

import Link from "next/link"
export default function Banner1() {
    return (
        <>
            <section id="banner-1" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-1 WRAPPER */}
                    <div className="banner-1-wrapper r-16">
                        <div className="banner-overlay bg--05 bg--scroll">
                            <div className="row">
                                {/* BANNER-1 TEXT */}
                                <div className="col">
                                    <div className="banner-1-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-45 w-700">Ready to Get Started?</h2>
                                        {/* Text */}
                                        <p className="p-xl">It only takes a few clicks to get started</p>
                                        {/* Button */}
                                        <Link href="#" className="btn r-04 btn--theme hover--tra-white" data-bs-toggle="modal" data-bs-target="#modal-3">Get srarted - it's free
                                        </Link>
                                        {/* Button Text */}
                                        <p className="p-sm btn-txt ico-15 o-85">
                                            <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                        </p>
                                    </div>
                                </div>	{/* END BANNER-1 TEXT */}
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-1 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
