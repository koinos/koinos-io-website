

import Link from "next/link"
export default function Banner3_5() {
    return (
        <>
            <section id="banner-3" className="pt-100 banner-section">
                <div className="container">
                    {/* BANNER-3 WRAPPER */}
                    <div className="banner-3-wrapper bg--03 bg--fixed r-16">
                        <div className="banner-overlay">
                            <div className="row">
                                {/* BANNER-3 TEXT */}
                                <div className="col">
                                    <div className="banner-3-txt color--white">
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Starting with Martex is easy, fast and free</h2>
                                        {/* Text */}
                                        <p className="p-xl">It only takes a few clicks to get started</p>
                                        {/* Button */}
                                        <Link href="#" className="btn r-04 btn--theme hover--tra-white" data-bs-toggle="modal" data-bs-target="#modal-3">Get srarted - it's free</Link>
                                        {/* Button Text */}
                                        <p className="p-sm btn-txt ico-15">
                                            <span className="flaticon-check" /> Free for 14 days - no credit card required.
                                        </p>
                                    </div>
                                </div>	{/* END BANNER-3 TEXT */}
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-3 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
