

import Link from "next/link"
export default function Banner16_2() {
    return (
        <>
            <section id="banner-16" className="banner-section">
                <div className="container">
                    {/* BANNER-16 WRAPPER */}
                    <div className="banner-16-wrapper bg--white-100 block-border r-16">
                        <div className="banner-overlay bg--fixed">
                            <div className="row">
                                {/* BANNER-1 TEXT */}
                                <div className="col">
                                    <div className="banner-16-txt text-center">
                                        {/* Title */}
                                        <h4 className="s-24 w-700">Choose a plan when you are ready</h4>
                                        {/* Text */}
                                        <p className="p-md mb-0">Sodales tempor sapien quaerat ipsum undo congue laoreet
                                            turpis neque auctor turpis vitae dolor luctus placerat magna cursus
                                        </p>
                                        {/* Link */}
                                        <div className="txt-block-tra-link mt-15">
                                            <Link href="/pricing-1" className="tra-link ico-20 color--theme">
                                                Discover our pricing <span className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END BANNER-16 TEXT */}
                            </div>   {/* End row */}
                        </div>   {/* End banner overlay */}
                    </div>    {/* END BANNER-16 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
