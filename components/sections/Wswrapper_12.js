

import Link from "next/link"
export default function Wswrapper_12() {
    return (
        <>
            <section className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                        <div className="section-overlay">
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="/images/img-02.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* Section ID */}
                                        <span className="section-id color--theme">Easy Integration</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Integrate all your essential tools</h2>
                                        {/* Text */}
                                        <p className="mb-0">Nemo ipsam egestas volute turpis egestas ipsum and purus sapien
                                            ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus
                                            quaerat
                                        </p>
                                        {/* Button */}
                                        <Link href="/integrations" className="btn btn-sm r-04 btn--tra-black hover--theme">
                                            Explore all integrations
                                        </Link>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>   {/* End row */}
                        </div>    {/* End section overlay */}
                    </div>    {/* End content wrapper */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
