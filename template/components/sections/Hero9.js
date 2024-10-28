

export default function Hero9() {
    return (
        <>
            <section id="hero-9" className="blur--purple hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-9-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-56 w-700">Show the world <img src="/images/png_icons/loud-speaker.png" alt="icon" />
                                    about the potential you have
                                </h2>
                                {/* Text */}
                                <p className="s-20">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida
                                    and aliquet tortor undo aliquet in quaerat tortor
                                </p>
                                {/* HERO QUICK FORM */}
                                <form name="quickform" className="quick-form form-stroke mt-45">
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
                                <p className="btn-txt ico-15">
                                    <span className="flaticon-check" /> 14-day free trial. No credit card needed,
                                </p>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="row">
                        <div className="col">
                            <div className="hero-9-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-08.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
