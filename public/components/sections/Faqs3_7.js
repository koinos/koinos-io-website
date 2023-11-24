

import Link from "next/link"
export default function Faqs3_7() {
    return (
        <>
            <section id="faqs-3" className="pt-100 faqs-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Questions &amp; Answers</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* FAQs-3 QUESTIONS */}
                    <div className="faqs-3-questions">
                        <div className="row">
                            {/* QUESTIONS HOLDER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #1 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>1.</span> Getting started with Martex</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Etiam amet mauris suscipit in odio integer congue metus
                                            and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna
                                            suscipit luctus blandit and laoreet
                                        </p>
                                    </div>
                                    {/* QUESTION #2 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>2.</span> What's inside the package?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim
                                            porta justo integer at velna vitae auctor integer congue undo magna laoreet
                                            augue pretium purus pretium ligula
                                        </p>
                                    </div>
                                    {/* QUESTION #3 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>3.</span> How do I choose a plan?</h5>
                                        {/* Answer */}
                                        <ul className="simple-list color--grey">
                                            <li className="list-item">
                                                <p>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium
                                                    purus pretium rutrum tempor sapien
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p>Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien
                                                    quaerat sodales pretium a purus
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                            {/* QUESTIONS WRAPPER */}
                            <div className="col-lg-6">
                                <div className="questions-holder">
                                    {/* QUESTION #4 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>4.</span> How does Martex handle my privacy?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Quaerat sodales sapien euismod blandit purus a purus
                                            ipsum primis in cubilia laoreet augue luctus dolor luctus
                                        </p>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec congue metus.
                                            Vitae arcu mollis blandit integer nemo volute velna
                                        </p>
                                    </div>
                                    {/* QUESTION #5 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>5.</span> I have an issue with my account</h5>
                                        {/* Answer */}
                                        <p className="color--grey">Cubilia laoreet augue egestas and luctus donec curabite
                                            diam vitae dapibus libero and quisque gravida donec neque blandit justo
                                            aliquam molestie nunc sapien justo
                                        </p>
                                    </div>
                                    {/* QUESTION #6 */}
                                    <div className="question mb-35 wow fadeInUp">
                                        {/* Question */}
                                        <h5 className="s-22 w-700"><span>6.</span> Can I cancel at anytime?</h5>
                                        {/* Answer */}
                                        <p className="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim
                                            porta justo integer at velna vitae auctor integer congue undo magna laoreet
                                            augue pretium purus pretium ligula
                                        </p>
                                    </div>
                                </div>
                            </div>	{/* END QUESTIONS HOLDER */}
                        </div>  {/* End row */}
                    </div>	{/* END FAQs-3 QUESTIONS */}
                    {/* MORE QUESTIONS LINK */}
                    <div className="row">
                        <div className="col">
                            <div className="more-questions mt-40">
                                <div className="more-questions-txt bg--white-400 r-100">
                                    <p className="p-lg">Have any questions?
                                        <Link href="/contacts" className="color--theme">Get in Touch</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
