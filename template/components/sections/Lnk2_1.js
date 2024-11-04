


import Link from "next/link"
export default function Lnk2_1() {
    return (
        <>
            <section id="lnk-2" className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/img-03.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* TEXT BOX */}
                                <div className="txt-box">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">The smarter way to work</h5>
                                    {/* Text */}
                                    <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                        vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum
                                        suscipit
                                    </p>
                                </div> {/* END TEXT BOX */}
                                {/* TEXT BOX */}
                                <div className="txt-box mb-0">
                                    {/* Title */}
                                    <h5 className="s-24 w-700">Full access to all features</h5>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                                sodales magna undo aoreet primis
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                                ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus
                                                sapien
                                                a blandit
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Button */}
                                    <Link href="#features-2" className="btn btn-sm r-04 btn--tra-black hover--theme">
                                        What's possible?
                                    </Link>
                                </div> {/* END TEXT BOX */}
                            </div>
                        </div> {/* END TEXT BLOCK */}
                    </div> {/* END SECTION CONTENT (ROW) */}
                </div> {/* End container */}
            </section>
        </>
    )
}
