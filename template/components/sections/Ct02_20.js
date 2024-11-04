import Link from "next/link"
export default function Ct02_20() {
    return (
        <>
            <section className="pt-100 ct-02 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6">
                            <div className="img-block left-column wow fadeInRight">
                                <img className="img-fluid" src="/images/img-05.png" alt="content-image" />
                            </div>
                        </div>
                        {/* TEXT BLOCK */}
                        <div className="col-md-6">
                            <div className="txt-block right-column wow fadeInLeft">
                                {/* Section ID */}
                                <span className="section-id">Productivity Focused</span>
                                {/* Title */}
                                <h2 className="s-44 w-700">Work smarter with powerful features</h2>
                                {/* Text */}
                                <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                    vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                </p>
                                {/* Text */}
                                <p className="mb-0">Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice
                                    an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at
                                    ligula purus egestas magna cursus undo varius purus magnis sapien quaerat
                                </p>
                                {/* Link */}
                                <div className="txt-block-tra-link mt-25">
                                    <Link href="#features-12" className="tra-link ico-20 color--theme">
                                        All-in-one platform <span className="flaticon-next" />
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
