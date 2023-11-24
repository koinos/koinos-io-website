

import Link from "next/link"
export default function Ct08_5() {
    return (
        <>
            <section className="pt-100 ct-08 content-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Section ID */}
                                <span className="section-id">Real-time Analytics</span>
                                {/* Title */}
                                <h2 className="s-50 w-700">Discover insights across all your data with Martex</h2>
                                {/* Text */}
                                <p className="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE BLOCK */}
                    <div className="row">
                        <div className="col">
                            <div className="img-block wow fadeInUp">
                                <img className="img-fluid" src="/images/img-19.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>
                    {/* ACTION BUTTON */}
                    <div className="row">
                        <div className="col">
                            <div className="img-block-btn text-center wow fadeInUp">
                                {/* Button */}
                                <Link href="#integrations-1" className="btn r-04 btn--theme hover--tra-black">Monitor your activity</Link>
                                {/* Advantages List */}
                                <ul className="advantages ico-15 clearfix">
                                    <li><p>Free 14 days trial</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p>Exclusive Support</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p>No Fees</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
