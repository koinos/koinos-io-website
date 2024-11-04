

import Link from "next/link"
import VideoPopup from "../elements/VidepPopup"
export default function Hero16() {
    return (
        <>
            <section id="hero-16" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-16-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-58 w-700">Easy and secure access to all your files anytime</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida
                                    and aliquet tortor undo aliquet quaerat in magna egestas sapien quaerat
                                </p>
                                {/* Button */}
                                <VideoPopup style={4}/>
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-16-img wow fadeInUp">
                                <img className="img-fluid" src="/images/img-15.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>    {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 135"><path fillOpacity={1} d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
