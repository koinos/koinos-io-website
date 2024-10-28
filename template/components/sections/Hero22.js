

export default function Hero22() {
    return (
        <>
            <section id="hero-22" className="bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO REQUEST FORM */}
                        <div className="col-md-6 col-lg-5 offset-md-6 offset-lg-7">
                            <div id="hero-22-form" className="r-10 wow fadeInLeft">
                                {/* Hero Logo  */}
                                <div className="hero-logo">
                                    <img className="img-fluid" src="/images/logo-blue.png" alt="hero-logo" />
                                </div>
                                {/* Title */}
                                <h4 className="s-26 w-700">Achieve success through data-driven decisions</h4>
                                {/* Text */}
                                <p className="p-md color--grey">Get started with Martex for free. It's fast and very easy! No credit card needed
                                </p>
                                {/* Form */}
                                <form name="requestForm" className="row request-form">
                                    {/* Form Input */}
                                    <div className="col-md-12">
                                        <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" autoComplete="off" required />
                                    </div>
                                    {/* Form Input */}
                                    <div className="col-md-12">
                                        <input type="email" name="email" className="form-control email" placeholder="Enter Your Email*" autoComplete="off" required />
                                    </div>
                                    {/* Form Button */}
                                    <div className="col-md-12 form-btn">
                                        <button type="submit" className="btn btn--theme hover--theme submit">Get Started Now</button>
                                    </div>
                                    {/* Form Message */}
                                    <div className="col-md-12 request-form-msg text-center">
                                        <span className="loading" />
                                    </div>
                                </form>
                            </div>	{/* END FORM */}
                        </div>	{/* END HERO REQUEST FORM */}
                    </div>    {/* End row */}
                </div>	   {/* End container */}
                {/* WAVE SHAPE BOTTOM */}
                <div className="wave-shape-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 265"><path fillOpacity={1} d="M0,256L120,256C240,256,480,256,720,240C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                </div>
            </section>
        </>
    )
}
