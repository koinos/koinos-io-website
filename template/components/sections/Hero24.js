

export default function Hero24() {
    return (
        <>
            <section id="hero-24" className="bg--scroll hero-section">
                <div className="container text-center">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="hero-24-txt color--white wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-60 w-700">Achieve more with less through automation</h2>
                                {/* Text */}
                                <p className="p-xl">Mauris donec ociis diam magnis sapien sagittis sapien tempor volute gravida
                                    aliquet tortor undo aliquet an egestas in magna egestas sapien quaerat
                                </p>
                                {/* HERO QUICK FORM */}
                                <form name="quickform" className="quick-form form-shadow mt-45">
                                    {/* Form Inputs */}
                                    <div className="input-group">
                                        <input type="email" name="email" className="form-control email r-06" placeholder="Your email address" autoComplete="off" required />
                                        <span className="input-group-btn form-btn">
                                            <button type="submit" className="btn r-06 btn--theme hover--theme submit">Start free trial</button>
                                        </span>
                                    </div>
                                    {/* Form Message */}
                                    <div className="quick-form-msg"><span className="loading" /></div>
                                </form>
                            </div>
                        </div>
                    </div>	{/* END HERO TEXT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
