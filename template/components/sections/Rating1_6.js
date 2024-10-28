

export default function Rating1_6() {
    return (
        <>
            <div id="rating-1" className="pt-70 rating-section">
                <div className="container">
                    {/* RATING TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="rating-title mb-40">
                                <h5 className="s-18 color--grey w-500">Our clients love us as much as we love them</h5>
                            </div>
                        </div>
                    </div>
                    {/* RATING-1 WRAPPER */}
                    <div className="rating-1-wrapper">
                        <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                            {/* RATING BOX #1 */}
                            <div className="col">
                                <div id="rb-1-1" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid light-theme-img" src="/images/brand-21.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/brand-21-white.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star-half-empty mr-5" />
                                        4.7/5
                                    </div>
                                </div>
                            </div>
                            {/* RATING BOX #2 */}
                            <div className="col">
                                <div id="rb-1-2" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid light-theme-img" src="/images/brand-22.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/brand-22-white.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star mr-5" />
                                        4.95/5
                                    </div>
                                </div>
                            </div>
                            {/* RATING BOX #3 */}
                            <div className="col">
                                <div id="rb-1-3" className="rbox-1">
                                    {/* Brand Logo */}
                                    <div className="rbox-1-img">
                                        <img className="img-fluid light-theme-img" src="/images/brand-23.png" alt="feature-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/brand-23-white.png" alt="feature-image" />
                                    </div>
                                    {/* Rating Stars */}
                                    <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star-1 mr-5" />
                                        4.24/5
                                    </div>
                                </div>
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END RATING-1 WRAPPER */}
                </div>	{/* End container */}
            </div>
        </>
    )
}
