

import Link from "next/link"
export default function Lnk3_9() {
    return (
        <>
            <section id="lnk-3" className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                        <div className="section-overlay">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* TEXT BOX */}
                                        <div className="txt-box">
                                            {/* Title */}
                                            <h5 className="s-24 w-700">Everything in one place</h5>
                                            {/* Text */}
                                            <p>Sodales tempor sapien quaerat congue eget ipsum laoreet turpis neque auctor
                                                vitae eros dolor luctus placerat magna ligula cursus and purus pretium
                                            </p>
                                        </div>	{/* END TEXT BOX */}
                                        {/* TEXT BOX */}
                                        <div className="txt-box mb-0">
                                            {/* Title */}
                                            <h5 className="s-24 w-700">Editing tools and exports</h5>
                                            {/* List */}
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Tempor sapien volute turpis ipsum laoreet purus and sapien dolor diam
                                                        ultrice ipsum aliquam undo congue dolor cursus tempor sapien quaerat
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas
                                                        vitae sapien a turpis ultrice auctor ipsum
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>	{/* END TEXT BOX */}
                                        {/* Link */}
                                        <div className="txt-block-tra-link mt-25">
                                            <Link href="#features-7" className="tra-link ico-20 color--theme">
                                                All-in-one platform <span className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="/images/img-12.png" alt="content-image" />
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
