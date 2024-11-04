

export default function Features1_2() {
    return (
        <>
            <section id="features-1" className="pt-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Track the progress towards objectives with key results</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-1 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">
                            {/* FEATURE BOX #1 */}
                            <div className="col">
                                <div className="fbox-1 fb-1 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_01.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_01_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Intuitive Dashboard</h6>
                                        <p>Luctus augue egestas undo ultrice quisque in lacus cursus feugiat eget ultrice
                                            laoreet cubilia sagittis
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* FEATURE BOX #2 */}
                            <div className="col">
                                <div className="fbox-1 fb-2 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_05.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_05_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Effortless Integration</h6>
                                        <p>Augue egestas luctus undo ultrice quisque in lacus cursus feugiat eget ultrice
                                            sagittis cubilia laoreet
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* FEATURE BOX #3 */}
                            <div className="col">
                                <div className="fbox-1 fb-3 wow fadeInUp">
                                    {/* Image */}
                                    <div className="fbox-img h-175">
                                        <img className="img-fluid light-theme-img" src="/images/f_02.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/f_02_dark.png" alt="feature-image" />
                                    </div>
                                    {/* Text */}
                                    <div className="fbox-txt">
                                        <h6 className="s-22 w-700">Engagement Analysis</h6>
                                        <p>Egestas luctus augue undo ultrice quisque in lacus cursus feugiat eget ultrice
                                            laoreet sagittis cubilia
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END FEATURE BOX #3 */}
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-1 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
