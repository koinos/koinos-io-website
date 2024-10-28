

import VideoPopup from "../elements/VidepPopup"
export default function Lnk3_8() {
    return (
        <>
            <section id="lnk-3" className="pt-100 ct-08 content-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-48 w-700">Customizable Dashboards</h2>
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
                                <VideoPopup style={1}/>
                                {/* Preview Image */}
                                <img className="img-fluid" src="/images/dashboard-05.png" alt="video-preview" />
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
