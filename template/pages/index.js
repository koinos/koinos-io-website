import Link from "next/link"

export default function Home() {

    return (
        <>
            <div id="page" className="page-wrapper">
                {/* HERO
============================================= */}
                <section id="hero" className="bg--scroll hero-section">
                    <div className="container color--white">
                        <div className="row d-flex align-items-center">
                            <div className="col">
                                {/* HERO TEXT */}
                                <div className="hero-txt text-center">
                                    <h2>It’s time to show how creative you are</h2>
                                    <p className="p-lg">A great collection of <span>flexible &amp; creative templates</span> to
                                        promote your Software, App, SaaS, Startup or business projects
                                    </p>
                                    <Link href="#select" className="btn btn--pink-400 hover--tra-white" >Check Demos</Link>
                                </div>
                                {/* HERO IMAGE */}
                                <div className="hero-img">
                                    <img className="img-fluid" src="/images/demo/hero-img.png" alt="hero-image" />
                                </div>
                            </div>
                        </div>
                    </div>     {/* End container */}
                </section>	{/* END HERO */}
                {/* FEATURES
============================================= */}
                <section id="features" className="features-section">
                    <div className="container">
                        <div className="fbox-wrapper text-center">
                            <div className="row row-cols-1 row-cols-lg-3">
                                {/* FEATURE BOX #1 */}
                                <div className="col">
                                    <div className="fbox fb-1 wow fadeInUp">
                                        {/* Image */}
                                        <div className="fbox-img">
                                            <img className="img-fluid" src="/images/demo/f_01.png" alt="feature-image" />
                                        </div>
                                        {/* Text */}
                                        <div className="fbox-txt">
                                            <h5>Ultra Responsive</h5>
                                            <p>Martex has a fully responsive design. It fits perfectly on various displays
                                                and resolutions
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END FEATURE BOX #1 */}
                                {/* FEATURE BOX #2 */}
                                <div className="col">
                                    <div className="fbox fb-2 wow fadeInUp">
                                        {/* Image */}
                                        <div className="fbox-img">
                                            <img className="img-fluid" src="/images/demo/f_02.png" alt="feature-image" />
                                        </div>
                                        {/* Text */}
                                        <div className="fbox-txt">
                                            <h5>Built with Bootstrap 5.x</h5>
                                            <p>The world’s most popular front-end open source toolkit for building responsive
                                                websites
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END FEATURE BOX #2 */}
                                {/* FEATURE BOX #3 */}
                                <div className="col">
                                    <div className="fbox fb-3 wow fadeInUp">
                                        {/* Image */}
                                        <div className="fbox-img">
                                            <img className="img-fluid" src="/images/demo/f_03.png" alt="feature-image" />
                                        </div>
                                        {/* Text */}
                                        <div className="fbox-txt">
                                            <h5>Beautiful Components</h5>
                                            <p>Martex includes well designed components which always gives you best results
                                                as you wanted
                                            </p>
                                        </div>
                                    </div>
                                </div>	{/* END FEATURE BOX #3 */}
                            </div>  {/* End row */}
                        </div>	{/* END FEATURES WRAPPER */}
                    </div>     {/* End container */}
                </section>	{/* END FEATURES */}
                {/* SELECT
============================================= */}
                <section id="select" className="bg-fixed select-section">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 section-title">
                                <h2>Stunning Designs</h2>
                                <p>27 beautiful, hand-crafted designs to get you started. Choose the one you like best and start
                                    customize it to your website
                                </p>
                            </div>
                        </div>
                        {/* DEMOS WRAPPER */}
                        <div className="row">
                            {/* LAYOUT-1 */}
                            <div id="l-1" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-1" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-01.jpg" alt="layout-1-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #1</h4>
                            </div>
                            {/* LAYOUT-2 */}
                            <div id="l-2" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-2" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-02.jpg" alt="layout-2-preview" />
                                    </Link>
                                </div>
                                <h4> Demo #2</h4>
                            </div>
                            {/* LAYOUT-3 */}
                            <div id="l-3" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-3" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-03.jpg" alt="layout-3-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #3</h4>
                            </div>
                            {/* LAYOUT-4 */}
                            <div id="l-4" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-4" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-04.jpg" alt="layout-4-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #4</h4>
                            </div>
                            {/* LAYOUT-5 */}
                            <div id="l-5" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-5" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-05.jpg" alt="layout-5-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #5</h4>
                            </div>
                            {/* LAYOUT-6 */}
                            <div id="l-6" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-6" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-06.jpg" alt="layout-6-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #6</h4>
                            </div>
                            {/* LAYOUT-7 */}
                            <div id="l-7" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-7" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-07.jpg" alt="layout-7-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #7</h4>
                            </div>
                            {/* LAYOUT-8 */}
                            <div id="l-8" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-8" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-08.jpg" alt="layout-8-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #8</h4>
                            </div>
                            {/* LAYOUT-9 */}
                            <div id="l-9" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-9" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-09.jpg" alt="layout-9-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #9</h4>
                            </div>
                            {/* LAYOUT-10 */}
                            <div id="l-10" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-10" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-10.jpg" alt="layout-10-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #10</h4>
                            </div>
                            {/* LAYOUT-11 */}
                            <div id="l-11" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-11" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-11.jpg" alt="layout-11-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #11</h4>
                            </div>
                            {/* LAYOUT-12 */}
                            <div id="l-12" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-12" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-12.jpg" alt="layout-12-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #12</h4>
                            </div>
                            {/* LAYOUT-13 */}
                            <div id="l-13" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-13" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-13.jpg" alt="layout-13-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #13</h4>
                            </div>
                            {/* LAYOUT-14 */}
                            <div id="l-14" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-14" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-14.jpg" alt="layout-14-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #14</h4>
                            </div>
                            {/* LAYOUT-15 */}
                            <div id="l-15" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-15" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-15.jpg" alt="layout-15-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #15</h4>
                            </div>
                            {/* LAYOUT-16 */}
                            <div id="l-16" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-16" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-16.jpg" alt="layout-16-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #16</h4>
                            </div>
                            {/* LAYOUT-17 */}
                            <div id="l-17" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-17" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-17.jpg" alt="layout-17-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #17</h4>
                            </div>
                            {/* LAYOUT-18 */}
                            <div id="l-18" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-18" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-18.jpg" alt="layout-18-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #18</h4>
                            </div>
                            {/* LAYOUT-19 */}
                            <div id="l-19" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-19" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-19.jpg" alt="layout-19-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #19</h4>
                            </div>
                            {/* LAYOUT-20 */}
                            <div id="l-20" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-20" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-20.jpg" alt="layout-20-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #20</h4>
                            </div>
                            {/* LAYOUT-21 */}
                            <div id="l-21" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-21" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-21.jpg" alt="layout-21-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #21</h4>
                            </div>
                            {/* LAYOUT-22 */}
                            <div id="l-22" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-22" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-22.jpg" alt="layout-22-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #22</h4>
                            </div>
                            {/* LAYOUT-23 */}
                            <div id="l-23" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-23" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-23.jpg" alt="layout-23-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #23</h4>
                            </div>
                            {/* LAYOUT-24 */}
                            <div id="l-24" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/404" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-24.jpg" alt="layout-24-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #24</h4>
                            </div>
                            {/* LAYOUT-25 */}
                            <div id="l-25" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/demo-25" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-25.jpg" alt="layout-25-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #25</h4>
                            </div>
                            {/* LAYOUT-26 */}
                            <div id="l-26" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/demo-26" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-26.jpg" alt="layout-26-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #26</h4>
                            </div>
                            {/* LAYOUT-27 */}
                            <div id="l-27" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/demo-27" target="_blank">
                                        <img className="img-fluid" src="/images/demo/layout-27.jpg" alt="layout-27-preview" />
                                    </Link>
                                </div>
                                <h4>Demo #27</h4>
                            </div>
                        </div>	{/* END DEMOS WRAPPER */}
                    </div>	  {/* End container */}
                </section>	{/* END SELECT */}
                {/* BANNER-1
============================================= */}
                <section id="banner-1" className="bg--scroll banner division">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-1-txt color--white">
                                    <h2>Fully Responsive &amp; Retina Ready</h2>
                                    <p>Attention to details is what makes the Martex fully fuctional. No matter what kind
                                        of content you add, your website will look stunning on any major device such as tablet,
                                        smartphone etc.
                                    </p>
                                    <Link className="btn btn--pink-400 hover--tra-white" href="/demo-1" target="_blank">
                                        See Martex in action
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-1-img">
                                    <img className="img-fluid" src="/images/demo/banner-1-img.png" alt="banner-image" />
                                </div>
                            </div>
                        </div>    {/* End row */}
                    </div>     {/* End container */}
                </section>	{/* END BANNER-1 */}
                {/* INNER PAGES
============================================= */}
                <section id="i-pages" className="ip-section">
                    <div className="container">
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 section-title">
                                <h2>Practical Inner Pages</h2>
                                <p>Martex offers a vast number of pre-made inner pages which will save your time when building
                                    a website.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {/* ABOUT PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/about" target="_blank">
                                        <img className="img-fluid" src="/images/demo/about.jpg" alt="about-preview" />
                                    </Link>
                                </div>
                                <h4>About Us</h4>
                            </div>
                            {/* CAREERS PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/careers" target="_blank">
                                        <img className="img-fluid" src="/images/demo/careers.jpg" alt="careers-preview" />
                                    </Link>
                                </div>
                                <h4>Careers</h4>
                            </div>
                            {/* CAREER ROLE PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/career-role" target="_blank">
                                        <img className="img-fluid" src="/images/demo/career-role.jpg" alt="career-role-preview" />
                                    </Link>
                                </div>
                                <h4>Career Role</h4>
                            </div>
                            {/* TEAM PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/team" target="_blank">
                                        <img className="img-fluid" src="/images/demo/team.jpg" alt="team-preview" />
                                    </Link>
                                </div>
                                <h4>Team</h4>
                            </div>
                            {/* FEATURES PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/features" target="_blank">
                                        <img className="img-fluid" src="/images/demo/features.jpg" alt="features-preview" />
                                    </Link>
                                </div>
                                <h4>Features</h4>
                            </div>
                            {/* INTEGRATIONS PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/integrations" target="_blank">
                                        <img className="img-fluid" src="/images/demo/integrations.jpg" alt="integrations-preview" />
                                    </Link>
                                </div>
                                <h4>Integrations</h4>
                            </div>
                            {/* PROJECTS PAGE */}
                            <div id="pts" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/projects" target="_blank">
                                        <img className="img-fluid" src="/images/demo/projects.jpg" alt="projects-preview" />
                                    </Link>
                                </div>
                                <h4>Our Projects</h4>
                            </div>
                            {/* SINGLE PROJECT */}
                            <div id="pd" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/project-details" target="_blank">
                                        <img className="img-fluid" src="/images/demo/project-details.jpg" alt="project-details-preview" />
                                    </Link>
                                </div>
                                <h4>Project Details</h4>
                            </div>
                            {/* REVIEWS PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/reviews" target="_blank">
                                        <img className="img-fluid" src="/images/demo/reviews.jpg" alt="reviews-preview" />
                                    </Link>
                                </div>
                                <h4>Reviews</h4>
                            </div>
                            {/* PRICING-1 PLANS */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/pricing-1" target="_blank">
                                        <img className="img-fluid" src="/images/demo/pricing-1.jpg" alt="pricing-preview" />
                                    </Link>
                                </div>
                                <h4>Pricing Plans #1</h4>
                            </div>
                            {/* PRICING-2 PLANS */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/pricing-2" target="_blank">
                                        <img className="img-fluid" src="/images/demo/pricing-2.jpg" alt="pricing-preview" />
                                    </Link>
                                </div>
                                <h4>Pricing Plans #2</h4>
                            </div>
                            {/* DOWNLOAD PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/download" target="_blank">
                                        <img className="img-fluid" src="/images/demo/download.jpg" alt="download-preview" />
                                    </Link>
                                </div>
                                <h4>Download</h4>
                            </div>
                            {/* FAQs PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/faqs" target="_blank">
                                        <img className="img-fluid" src="/images/demo/faqs.jpg" alt="faqs-preview" />
                                    </Link>
                                </div>
                                <h4>FAQs</h4>
                            </div>
                            {/* HELP CENTER PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/help-center" target="_blank">
                                        <img className="img-fluid" src="/images/demo/help-center.jpg" alt="help-center-preview" />
                                    </Link>
                                </div>
                                <h4>Help Center</h4>
                            </div>
                            {/* CONTACTS PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/contacts" target="_blank">
                                        <img className="img-fluid" src="/images/demo/contacts.jpg" alt="contacts-preview" />
                                    </Link>
                                </div>
                                <h4>Contacts</h4>
                            </div>
                            {/* BLOG LISTING */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/blog-listing" target="_blank">
                                        <img className="img-fluid" src="/images/demo/blog-listing.jpg" alt="blog-listing-preview" />
                                    </Link>
                                </div>
                                <h4>Blog Listing</h4>
                            </div>
                            {/* SINGLE POST */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/single-post" target="_blank">
                                        <img className="img-fluid" src="/images/demo/single-post.jpg" alt="single-post-preview" />
                                    </Link>
                                </div>
                                <h4>Single Post</h4>
                            </div>
                            {/* PAGE 404 */}
                            <div id="p-404" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/404" target="_blank">
                                        <img className="img-fluid" src="/images/demo/404.jpg" alt="404-preview" />
                                    </Link>
                                </div>
                                <h4>Page 404</h4>
                            </div>
                            {/* TERMS PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/terms" target="_blank">
                                        <img className="img-fluid" src="/images/demo/terms.jpg" alt="terms-preview" />
                                    </Link>
                                </div>
                                <h4>Terms</h4>
                            </div>
                            {/* PRIVACY PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/privacy" target="_blank">
                                        <img className="img-fluid" src="/images/demo/privacy.jpg" alt="privacy-preview" />
                                    </Link>
                                </div>
                                <h4>Privacy</h4>
                            </div>
                            {/* COOKIES PAGE */}
                            <div className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/cookies" target="_blank">
                                        <img className="img-fluid" src="/images/demo/cookies.jpg" alt="cookies-preview" />
                                    </Link>
                                </div>
                                <h4>Cookies</h4>
                            </div>
                            {/* LOG IN 1 PAGE */}
                            <div id="reg-1" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/login-1" target="_blank">
                                        <img className="img-fluid" src="/images/demo/login-1.jpg" alt="login-1-preview" />
                                    </Link>
                                </div>
                                <h4>Log In Page #1</h4>
                            </div>
                            {/* LOG IN 2 PAGE */}
                            <div id="reg-2" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/login-2" target="_blank">
                                        <img className="img-fluid" src="/images/demo/login-2.jpg" alt="login-2-preview" />
                                    </Link>
                                </div>
                                <h4>Log In Page #2</h4>
                            </div>
                            {/* SIGNUP 1 PAGE */}
                            <div id="reg-3" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.8s">
                                <div className="hover-overlay">
                                    <Link href="/signup-1" target="_blank">
                                        <img className="img-fluid" src="/images/demo/signup-1.jpg" alt="signup-1-preview" />
                                    </Link>
                                </div>
                                <h4>Sign Up Page #1</h4>
                            </div>
                            {/* SIGNUP 2 PAGE */}
                            <div id="reg-4" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.4s">
                                <div className="hover-overlay">
                                    <Link href="/signup-2" target="_blank">
                                        <img className="img-fluid" src="/images/demo/signup-2.jpg" alt="signup-2-preview" />
                                    </Link>
                                </div>
                                <h4>Sign Up Page #2</h4>
                            </div>
                            {/* RESET PASSWORD PAGE */}
                            <div id="reg-5" className="col-md-6 col-lg-4 select_link wow fadeInUp" data-wow-delay="0.6s">
                                <div className="hover-overlay">
                                    <Link href="/reset-password" target="_blank">
                                        <img className="img-fluid" src="/images/demo/reset-password.jpg" alt="reset-1-preview" />
                                    </Link>
                                </div>
                                <h4>Reset Password</h4>
                            </div>
                        </div>	{/* End row */}
                    </div>	  {/* End container */}
                </section>	{/* END INNER PAGES */}
                {/* BANNER-2
============================================= */}
                <section id="banner-2" className="bg--scroll division">
                    <div className="container">
                        {/* BANNER TEXT*/}
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="banner-2-txt color--white text-center">
                                    <h2>Create your amazing website with Martex</h2>
                                    <p>Mix and match from over 50 exclusive section UI blocks. <span>Create something
                                        unique and beautifully</span> tailored to your needs
                                    </p>
                                    <Link href="https://themeforest.net/item/martex-software-saas-startup-html5-template/46015236" className="btn btn--pink-400 hover--tra-white" >Purchase for $15</Link>
                                </div>
                            </div>
                        </div>	{/* END BANNER TEXT*/}
                    </div>	  {/* End container */}
                </section>	{/* END BANNER-2 */}
                {/* FOOTER
============================================= */}
                <footer id="footer" className="footer division">
                    <div className="container">
                        <div className="row">
                            <div className="col footer-copyright">
                                <p>Designed by JThemes Studio</p>
                                <p>© 2023 <span>Martex.</span> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>	{/* END FOOTER */}
            </div>

        </>
    )
}