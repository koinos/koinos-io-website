

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Lnk2_4() {
    return (
        <>
            <section id="lnk-2" className="bg--white-300 ct-10 content-section division">
                <div className="section-overlay pt-100">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-70">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Everything in One Place</h2>
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
                                    <img className="img-fluid" src="/images/dashboard-05.png" alt="video-preview" />
                                </div>
                            </div>
                        </div>
                    </div>	   {/* End container */}
                </div>     {/* End section overlay */}
            </section>
        </>
    )
}
