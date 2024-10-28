

import BrandSlider1 from "../slider/BrandSlider1"
export default function Hero17() {
    return (
        <>
            <section id="hero-17" className="bg--fixed hero-section">
                <div className="container">
                    {/* HERO TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-md-11 col-lg-10 col-xl-9">
                            <div className="hero-17-txt wow fadeInUp">
                                {/* Title */}
                                <h2 className="s-60 w-700">Enhance your website design with Martex</h2>
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
                        </div>    {/* End row */}
                    </div>	{/* END HERO TEXT */}
                    {/* BRANDS CAROUSEL */}
                    <div id="brands-1">
                        <div className="row">
                            <div className="col text-center">
                                <BrandSlider1 />
                            </div>
                        </div>  {/* End row */}
                    </div>	{/* END BRANDS CAROUSEL */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
