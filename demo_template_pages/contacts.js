import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="contacts-1" className="pb-50 inner-page-hero contacts-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title text-center mb-80">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Questions? Let's Talk</h2>
                                        {/* Text */}
                                        <p className="p-lg">Want to learn more about Martex, get a quote, or speak with an expert?
                                            Let us know what you are looking for and we’ll get back to you right away
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* CONTACT FORM */}
                            <div className="row justify-content-center">
                                <div className="col-md-11 col-lg-10 col-xl-8">
                                    <div className="form-holder">
                                        <form name="contactform" className="row contact-form">
                                            {/* Form Select */}
                                            <div className="col-md-12 input-subject">
                                                <p className="p-lg">This question is about: </p>
                                                <span>Choose a topic, so we know who to send your request to: </span>
                                                <select className="form-select subject" aria-label="Default select example">
                                                    <option>This question is about...</option>
                                                    <option>Registering/Authorising</option>
                                                    <option>Using Application</option>
                                                    <option>Troubleshooting</option>
                                                    <option>Backup/Restore</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            {/* Contact Form Input */}
                                            <div className="col-md-12">
                                                <p className="p-lg">Your Name: </p>
                                                <span>Please enter your real name: </span>
                                                <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                            </div>
                                            <div className="col-md-12">
                                                <p className="p-lg">Your Email Address: </p>
                                                <span>Please carefully check your email address for accuracy</span>
                                                <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                            </div>
                                            <div className="col-md-12">
                                                <p className="p-lg">Explain your question in details: </p>
                                                <span>Your OS version, Martex version &amp; build, steps you did. Be VERY precise!</span>
                                                <textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." />
                                            </div>
                                            {/* Contact Form Button */}
                                            <div className="col-md-12 mt-15 form-btn text-right">
                                                <button type="submit" className="btn btn--theme hover--theme submit">Submit Request</button>
                                            </div>
                                            <div className="contact-form-notice">
                                                <p className="p-sm">We are committed to your privacy. Martex uses the information you
                                                    provide us to contact you about our relevant content, products, and services.
                                                    You may unsubscribe from these communications at any time. For more information,
                                                    check out our <Link href="/privacy">Privacy Policy</Link>.
                                                </p>
                                            </div>
                                            {/* Contact Form Message */}
                                            <div className="col-lg-12 contact-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>	   {/* END CONTACT FORM */}
                        </div>	   {/* End container */}
                    </section>	{/* END CONTACTS-1 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* NEWSLETTER-1
			============================================= */}
                    <section id="newsletter-1" className="newsletter-section">
                        <div className="newsletter-overlay">
                            <div className="container">
                                <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
                                    {/* NEWSLETTER TEXT */}
                                    <div className="col">
                                        <div className="newsletter-txt">
                                            <h4 className="s-34 w-700">Stay up to date with our news, ideas and updates</h4>
                                        </div>
                                    </div>
                                    {/* NEWSLETTER FORM */}
                                    <div className="col">
                                        <form className="newsletter-form">
                                            <div className="input-group">
                                                <input type="email" autoComplete="off" className="form-control" placeholder="Your email address" required id="s-email" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="btn btn--theme hover--theme">Subscribe Now</button>
                                                </span>
                                            </div>
                                            {/* Newsletter Form Notification */}
                                            <label htmlFor="s-email" className="form-notification" />
                                        </form>
                                    </div>	  {/* END NEWSLETTER FORM */}
                                </div>	  {/* End row */}
                            </div>    {/* End container */}
                        </div>     {/* End newsletter-overlay */}
                    </section>	{/* END NEWSLETTER-1 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                </div>

            </Layout>
        </>
    )
}