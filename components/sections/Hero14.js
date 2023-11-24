

export default function Hero14() {
    return (
        <>
            <section id="hero-14" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-14-txt color--white wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-60 w-700">Automate your way to success with Martex</h2>
                                {/* Text */}
                                <p className="s-21">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida
                                    and aliquet tortor undo aliquet in quaerat tortor
                                </p>
                                {/* HERO QUICK FORM */}
                                <form name="quickform" className="quick-form form-shadow">
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
                            <div className="hero-14-img wow fadeInUp">
                                <img className="img-fluid" src="/images/dashboard-02.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>	{/* END HERO IMAGE */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190"><path fillOpacity={1} d="M0,32L120,53.3C240,75,480,117,720,117.3C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
