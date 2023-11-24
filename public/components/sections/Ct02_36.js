

import Link from "next/link"
export default function Ct02_36() {
    return (
        <>
            <section className="bg--white-400 py-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/img-08.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* TEXT BOX */}
                                <div className="txt-box">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Advanced Analytics Review</h5>
                                    {/* Text */}
                                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                    </p>
                                </div>	{/* END TEXT BOX */}
                                {/* TEXT BOX */}
                                <div className="txt-box mb-0">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Email Marketing Campaigns</h5>
                                    {/* Text */}
                                    <p>Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit
                                        purus
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum
                                                aliquam undo congue dolor cursus
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                                sapien turpis ultrice auctor congue magna placerat
                                            </p>
                                        </li>
                                    </ul>
                                </div>	{/* END TEXT BOX */}
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#features-5" className="tra-link ico-20 color--theme">
                                        Engagement analytics <span className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
