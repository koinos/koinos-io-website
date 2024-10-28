

import Link from "next/link"
export default function Ct01_27() {
    return (
        <>
            <section className="bg--white-400 py-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-46 w-700">Plug your essential tools in few clicks</h2>
                                {/* List */}
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                            sodales magna undo aoreet primis
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                            ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien
                                            a blandit
                                        </p>
                                    </li>
                                </ul>
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#integrations-2" className="tra-link ico-20 color--theme">
                                        Explore all integrations <span className="flaticon-next" />
                                    </Link>
                                </div>
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
