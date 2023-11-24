

import Link from "next/link"
export default function Ct01_21() {
    return (
        <>
            <section className="bg--white-300 py-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-46 w-700">Plug your essential tools in few clicks</h2>
                                {/* Text */}
                                <p className="mb-0">Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor
                                    turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* Button */}
                                <Link href="#integrations-1" className="btn btn-sm r-04 btn--tra-black hover--theme">
                                    Explore all integrations
                                </Link>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="/images/img-02.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
