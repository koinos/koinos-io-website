

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Lnk2_23() {
    return (
        <>
            <section id="lnk-2" className="bg--white-400 ct-10 content-section division">
                <div className="section-overlay pt-100">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-70">
                                    {/* Section ID */}
                                    <span className="section-id">Engagement Analytics</span>
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Transform your workflow, transform your business</h2>
                                    {/* Text */}
                                    <p className="s-21">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                </div>
                            </div>
                        </div>
                        {/* IMAGE BLOCK */}
                        <div className="row">
                            <div className="col">
                                <div className="img-block video-preview wow fadeInUp">
                                    {/* Play Icon */}
                                    <VideoPopup style={2}/>
                                    {/* Preview Image */}
                                    <img className="img-fluid" src="/images/dashboard-07.png" alt="video-preview" />
                                </div>
                            </div>
                        </div>
                    </div>	   {/* End container */}
                </div>     {/* End section overlay */}
            </section>
        </>
    )
}
