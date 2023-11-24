

import Link from "next/link"
export default function Ct02_52() {
    return (
        <>
            <section className="pt-100 ct-02 content-section division">
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
                                {/* Title */}
                                <h2 className="s-46 w-700">Achieve more with better workflows</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* List */}
                                <ul className="simple-list">
                                    <li className="list-item">
                                        <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice
                                            ipsum aliquam undo congue dolor cursus
                                        </p>
                                    </li>
                                    <li className="list-item">
                                        <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                            sapien turpis ultrice auctor congue placerat
                                        </p>
                                    </li>
                                </ul>
                                {/* Button */}
                                <Link href="#banner-7" className="btn btn-sm r-04 btn--theme hover--tra-black">
                                    Get srarted - it's free
                                </Link>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
