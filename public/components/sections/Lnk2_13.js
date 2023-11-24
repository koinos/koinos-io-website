

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Lnk2_13() {
    return (
        <>
            <section id="lnk-2" className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-5-wrapper bg--04 hidd bg--scroll r-16">
                        <div className="section-overlay">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-11 col-lg-9">
                                    <div className="section-title wow fadeInUp mb-60">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Build a customer-centric marketing strategy</h2>
                                        {/* Text */}
                                        <p className="p-xl">Aliquam a augue suscipit luctus neque purus ipsum neque diam
                                            dolor primis libero tempus, blandit and cursus varius and magnis sodales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* IMAGE BLOCK */}
                            <div className="row justify-content-center">
                                <div className="col">
                                    <div className="bc-5-img bc-5-tablet img-block-hidden video-preview wow fadeInUp">
                                        {/* Play Icon */}
                                        <VideoPopup style={1}/>
                                        {/* Preview Image */}
                                        <img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>
                        </div>   {/* End section overlay */}
                    </div>    {/* End content wrapper */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
