

import Link from "next/link"
export default function Ct08_1() {
    return (
        <>
            <section className="pt-100 ct-08 content-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Tokenomics</h2>
                                {/* Text */}
                                <p className="s-21">Like Bitcoin, the entire initial supply was allocated to the public without an ICO or IEO. No tokens were set aside for any team, private investors, or anyone else.</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE BLOCK */}
                    <div className="row">
                        <div className="col">
                            <div className="img-block wow fadeInUp">
                                <img className="img-fluid" src="/images/tokenomic.jpg" alt="video-preview" />
                            </div>
                        </div>
                    </div>

                </div> {/* End container */}
            </section>
        </>
    )
}
