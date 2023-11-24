

import Link from "next/link"
export default function Lnk1_8() {
    return (
        <>
            <section id="lnk-1" className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-1-wrapper bg--white-400 bg--fixed r-16">
                        <div className="section-overlay">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">One-Stop Solution</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Smart solutions, real-time results</h2>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                                    turpis sodales magna
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                                                    an ultrice ipsum aliquam congue
                                                </p>
                                            </li>
                                        </ul>
                                        {/* Link */}
                                        <div className="txt-block-tra-link mt-25">
                                            <Link href="#features-6" className="tra-link ico-20 color--theme">
                                                The smarter way to work <span className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="/images/img-06.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* End section overlay */}
                    </div>    {/* End content wrapper */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
