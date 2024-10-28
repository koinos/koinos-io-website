

import Link from "next/link"
export default function Ct02_44() {
    return (
        <>
            <section className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/img-06.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* TEXT BOX */}
                                <div className="txt-box">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Solution that grows with you</h5>
                                    {/* Text */}
                                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                    </p>
                                </div>	{/* END TEXT BOX */}
                                {/* TEXT BOX */}
                                <div className="txt-box mb-0">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Connect your data sources</h5>
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
                                            <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Link */}
                                    <div className="txt-block-tra-link mt-25">
                                        <Link href="#features-11" className="tra-link ico-20 color--theme">
                                            Automatic workflows <span className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>	{/* END TEXT BOX */}
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
