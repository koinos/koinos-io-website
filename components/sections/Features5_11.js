

export default function Features5_11() {
    return (
        <>
            <section id="features-5" className="pt-100 features-section division">
                <div className="container">
                    {/* FEATURES-5 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row d-flex align-items-center">
                            {/* FEATURE BOX #1 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-1 bg--02 r-16 wow fadeInUp">
                                    {/* Text */}
                                    <div className="fbox-txt order-last order-md-2">
                                        <h5 className="s-26 w-700">Multiple Accounts</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                    {/* Image */}
                                    <div className="fbox-5-img order-first order-md-2">
                                        <img className="img-fluid light-theme-img" src="/images/f_11.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_11_dark.png" alt="feature-image" />
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col-md-6">
                                <div className="fbox-5 fb-2 bg--02 r-16 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-5-img">
                                        <img className="img-fluid light-theme-img" src="/images/f_04.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_04_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h5 className="s-26 w-700">Productivity Focused</h5>
                                        <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-5 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
