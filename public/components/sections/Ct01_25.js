

import Link from "next/link"
export default function Ct01_25() {
    return (
        <>
            <section className="pt-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id color--black">Strategies That Work</span>
                                {/* Title */}
                                <h2 className="s-44 w-700">Right strategies &amp; implementations</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* Text */}
                                <p className="mb-0">Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice
                                    an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula
                                    purus egestas magna cursus undo varius purus magnis sapien quaerat
                                </p>
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#features-7" className="tra-link ico-20 color--theme">
                                        Friendly with others <span className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>	{/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="/images/img-07.png" alt="content-image" />
                            </div>
                        </div>
                    </div>	{/* END SECTION CONTENT (ROW) */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
