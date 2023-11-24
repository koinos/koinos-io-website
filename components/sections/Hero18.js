

export default function Hero18() {
    return (
        <>
            <section id="hero-18" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="hero-18-img wow fadeInRight">
                                <img className="img-fluid" src="/images/hero-18-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="hero-18-txt wow fadeInLeft">
                                {/* Title */}
                                <h2 className="s-56 w-700">Monitor all progress of your workflow easily</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute
                                    ligula and aliquet tortor
                                </p>
                                {/* HERO QUICK FORM */}
                                <form name="quickform" className="quick-form form-shadow form-half mt-35">
                                    {/* Form Inputs */}
                                    <div className="input-group">
                                        <input type="email" name="email" className="form-control email r-06" placeholder="Your email address" autoComplete="off" required />
                                        <span className="input-group-btn form-btn">
                                            <button type="submit" className="btn r-06 btn--theme hover--theme submit">Get Started</button>
                                        </span>
                                    </div>
                                    {/* Form Message */}
                                    <div className="quick-form-msg"><span className="loading" /></div>
                                </form>
                                {/* Text */}
                                <p className="p-sm btn-txt ico-15">
                                    <span className="flaticon-check" /> No credit card needed, free 14-day trial
                                </p>
                            </div>
                        </div>	{/* END HERO TEXT */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
