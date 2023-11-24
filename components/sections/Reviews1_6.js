import ReviewSlider1 from "../slider/ReviewSlider1"

export default function Reviews1_6() {
    return (
        <>
            <section id="reviews-1" className="gr--whitesmoke pt-100 reviews-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-48 w-700">Read what our users have to say about us</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* TESTIMONIALS CONTENT */}
                    <div className="row">
                        <div className="col">
                        <ReviewSlider1 />
                        </div>
                    </div>	{/* END TESTIMONIALS CONTENT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
