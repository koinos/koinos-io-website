

export default function Hero26() {
    return (
        <>
            <section id="hero-26" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-26-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-60 w-700">Add creativity to your project</h2>
                                {/* Text */}
                                <p className="p-lg">Mauris donec turpis suscipit diam sapien ociis sagittis sapien tempor
                                    a volute ligula aliquet tortor egestas
                                </p>
                                {/* HERO QUICK FORM */}
                                <form name="quickform" className="quick-form form-shadow form-half mt-35">
                                    {/* Form Inputs */}
                                    <div className="input-group">
                                        <input type="email" name="email" className="form-control email r-06" placeholder="Your email address" autoComplete="off" required />
                                        <span className="input-group-btn form-btn">
                                            <button type="submit" className="btn r-04 btn--theme hover--violet-500 submit">Get Started</button>
                                        </span>
                                    </div>
                                    {/* Form Message */}
                                    <div className="quick-form-msg"><span className="loading" /></div>
                                </form>
                                {/* Advantages List */}
                                <ul className="advantages ico-15 clearfix">
                                    <li><p className="p-sm">14 days free trial</p></li>
                                    <li className="advantages-links-divider"><p><span className="flaticon-minus" /></p></li>
                                    <li><p className="p-sm">No credit card needed</p></li>
                                </ul>
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-26-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/hero-26-img.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fillOpacity={1} d="M0,256L120,250.7C240,245,480,235,720,224C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
