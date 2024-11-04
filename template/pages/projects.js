import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="projects-1" className="inner-page-hero projects-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-80">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Great Design That Works!</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* PROJECTS WRAPPER */}
                            <div className="projects-wrapper">
                                <div className="row align-items-center row-cols-1 row-cols-md-2">
                                    {/* PROJECT #1 */}
                                    <div className="col">
                                        <div id="pt-1-1" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Mockup Poster</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-01.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #1 */}
                                    {/* PROJECT #2 */}
                                    <div className="col">
                                        <div id="pt-1-2" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Glued Poster</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-02.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #2 */}
                                    {/* PROJECT #3 */}
                                    <div className="col">
                                        <div id="pt-1-3" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Double Color</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-03.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #3 */}
                                    {/* PROJECT #4 */}
                                    <div className="col">
                                        <div id="pt-1-4" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Reativity</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-04.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #4 */}
                                    {/* PROJECT #35 */}
                                    <div className="col">
                                        <div id="pt-1-5" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Vintage Poster</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-05.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #5 */}
                                    {/* PROJECT #6 */}
                                    <div className="col">
                                        <div id="pt-1-6" className="project-details">
                                            {/* Title */}
                                            <h5 className="s-24">Paper Portrait</h5>
                                            {/* Image */}
                                            <div className="project-preview r-10">
                                                {/* Project Preview */}
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/projects/project-06.jpg" alt="project-preview" />
                                                    <div className="item-overlay" />
                                                </div>
                                                {/* Project Link */}
                                                <div className="project-link ico-35 color--white">
                                                    <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END PROJECT #6 */}
                                </div>
                            </div>	{/* END PROJECTS WRAPPER */}
                        </div>	   {/* End container */}
                    </section>	{/* END PROJECTS-1 */}
                    {/* PAGE PAGINATION
			============================================= */}
                    <div className="py-100 page-pagination theme-pagination">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination ico-20 justify-content-center">
                                            <li className="page-item disabled"><Link className="page-link" href="#" tabIndex={-1}><span className="flaticon-back" /></Link>
                                            </li>
                                            <li className="page-item active" aria-current="page"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#" aria-label="Next"><span className="flaticon-next" /></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>  {/* End row */}
                        </div> {/* End container */}
                    </div>	{/* END PAGE PAGINATION */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* TESTIMONIALS-2
			============================================= */}
                    <section id="reviews-2" className="pt-100 reviews-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Our Happy Customers</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* TESTIMONIALS-2 WRAPPER */}
                            <div className="reviews-2-wrapper rel shape--02 shape--whitesmoke">
                                <div className="row align-items-center row-cols-1 row-cols-md-2">
                                    {/* TESTIMONIAL #1 */}
                                    <div className="col">
                                        <div id="rw-2-1" className="review-2 bg--white-100 block-shadow r-08">
                                            {/* Quote Icon */}
                                            <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                            {/* Text */}
                                            <div className="review-txt">
                                                {/* Text */}
                                                <p>Quaerat sodales sapien euismod blandit aliquet ipsum primis undo and cubilia
                                                    laoreet augue and luctus magna dolor luctus egestas sapien vitae
                                                </p>
                                                {/* Author */}
                                                <div className="author-data clearfix">
                                                    {/* Avatar */}
                                                    <div className="review-avatar">
                                                        <img src="/images/review-author-1.jpg" alt="review-avatar" />
                                                    </div>
                                                    {/* Data */}
                                                    <div className="review-author">
                                                        <h6 className="s-18 w-700">Scott Boxer</h6>
                                                        <p className="p-sm">@scott_boxer</p>
                                                    </div>
                                                </div>	{/* End Author */}
                                            </div>	{/* End Text */}
                                        </div>
                                    </div>	{/* END TESTIMONIAL #1 */}
                                    {/* TESTIMONIAL #2 */}
                                    <div className="col">
                                        <div id="rw-2-2" className="review-2 bg--white-100 block-shadow r-08">
                                            {/* Quote Icon */}
                                            <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                            {/* Text */}
                                            <div className="review-txt">
                                                {/* Text */}
                                                <p>At sagittis congue augue and magna ipsum vitae a purus ipsum primis diam a
                                                    cubilia laoreet augue egestas luctus a donec vitae ultrice ligula magna suscipit
                                                    lectus gestas augue into cubilia
                                                </p>
                                                {/* Author */}
                                                <div className="author-data clearfix">
                                                    {/* Avatar */}
                                                    <div className="review-avatar">
                                                        <img src="/images/review-author-2.jpg" alt="review-avatar" />
                                                    </div>
                                                    {/* Data */}
                                                    <div className="review-author">
                                                        <h6 className="s-18 w-700">Joel Peterson</h6>
                                                        <p className="p-sm">Internet Surfer</p>
                                                    </div>
                                                </div>	{/* End Author */}
                                            </div>	{/* End Text */}
                                        </div>
                                    </div>	{/* END TESTIMONIAL #2 */}
                                    {/* TESTIMONIAL #3 */}
                                    <div className="col">
                                        <div id="rw-2-3" className="review-2 bg--white-100 block-shadow r-08">
                                            {/* Quote Icon */}
                                            <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                            {/* Text */}
                                            <div className="review-txt">
                                                {/* Text */}
                                                <p>An augue cubilia laoreet magna suscipit egestas and ipsum a lectus purus ipsum
                                                    primis and augue ultrice ligula and egestas a suscipit lectus gestas undo auctor
                                                    tempus feugiat impedit quaerat
                                                </p>
                                                {/* Author */}
                                                <div className="author-data clearfix">
                                                    {/* Avatar */}
                                                    <div className="review-avatar">
                                                        <img src="/images/review-author-5.jpg" alt="review-avatar" />
                                                    </div>
                                                    {/* Data */}
                                                    <div className="review-author">
                                                        <h6 className="s-18 w-700">Jennifer Harper</h6>
                                                        <p className="p-sm">App Developer</p>
                                                    </div>
                                                </div>	{/* End Author */}
                                            </div>	{/* End Text */}
                                        </div>
                                    </div>	{/* END TESTIMONIAL #3 */}
                                    {/* TESTIMONIAL #4 */}
                                    <div className="col">
                                        <div id="rw-2-4" className="review-2 bg--white-100 block-shadow r-08">
                                            {/* Quote Icon */}
                                            <div className="review-ico ico-65"><span className="flaticon-quote" /></div>
                                            {/* Text */}
                                            <div className="review-txt">
                                                {/* Text */}
                                                <p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna
                                                    suscipit luctus dolor blandit at purus tempus feugiat impedit
                                                </p>
                                                {/* Author */}
                                                <div className="author-data clearfix">
                                                    {/* Avatar */}
                                                    <div className="review-avatar">
                                                        <img src="/images/review-author-8.jpg" alt="review-avatar" />
                                                    </div>
                                                    {/* Data */}
                                                    <div className="review-author">
                                                        <h6 className="s-18 w-700">Evelyn Martinez</h6>
                                                        <p className="p-sm">WordPress Consultant</p>
                                                    </div>
                                                </div>	{/* End Author */}
                                            </div>	{/* End Text */}
                                        </div>
                                    </div>	{/* END TESTIMONIAL #4 */}
                                </div>  {/* End row */}
                            </div>	{/* END TESTIMONIALS-2 WRAPPER */}
                        </div>	   {/* End container */}
                    </section>	{/* END TESTIMONIALS-2 */}
                    {/* RATING-1
			============================================= */}
                    <div id="rating-1" className="pt-70 rating-section">
                        <div className="container">
                            {/* RATING TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="rating-title mb-40">
                                        <h5 className="s-18 color--grey w-500">Our clients love us as much as we love them</h5>
                                    </div>
                                </div>
                            </div>
                            {/* RATING-1 WRAPPER */}
                            <div className="rating-1-wrapper">
                                <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                                    {/* RATING BOX #1 */}
                                    <div className="col">
                                        <div id="rb-1-1" className="rbox-1">
                                            {/* Brand Logo */}
                                            <div className="rbox-1-img">
                                                <img className="img-fluid light-theme-img" src="/images/brand-21.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/brand-21-white.png" alt="feature-image" />
                                            </div>
                                            {/* Rating Stars */}
                                            <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star-half-empty mr-5" />
                                                4.7/5
                                            </div>
                                        </div>
                                    </div>
                                    {/* RATING BOX #2 */}
                                    <div className="col">
                                        <div id="rb-1-2" className="rbox-1">
                                            {/* Brand Logo */}
                                            <div className="rbox-1-img">
                                                <img className="img-fluid light-theme-img" src="/images/brand-22.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/brand-22-white.png" alt="feature-image" />
                                            </div>
                                            {/* Rating Stars */}
                                            <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star mr-5" />
                                                4.95/5
                                            </div>
                                        </div>
                                    </div>
                                    {/* RATING BOX #3 */}
                                    <div className="col">
                                        <div id="rb-1-3" className="rbox-1">
                                            {/* Brand Logo */}
                                            <div className="rbox-1-img">
                                                <img className="img-fluid light-theme-img" src="/images/brand-23.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/brand-23-white.png" alt="feature-image" />
                                            </div>
                                            {/* Rating Stars */}
                                            <div className="star-rating ico-10 bg--white-100 r-100 clearfix">
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star" />
                                                <span className="flaticon-star-1 mr-5" />
                                                4.24/5
                                            </div>
                                        </div>
                                    </div>
                                </div>  {/* End row */}
                            </div>	{/* END RATING-1 WRAPPER */}
                        </div>	{/* End container */}
                    </div>	{/* END RATING-1 */}
                    {/* BANNER-1
			============================================= */}
                    <section id="banner-1" className="pt-100 banner-section">
                        <div className="container">
                            {/* BANNER-1 WRAPPER */}
                            <div className="banner-1-wrapper r-16">
                                <div className="banner-overlay bg--05 bg--scroll">
                                    <div className="row">
                                        {/* BANNER-1 TEXT */}
                                        <div className="col">
                                            <div className="banner-1-txt color--white">
                                                {/* Title */}
                                                <h2 className="s-45 w-700">Give it a try, it's free!</h2>
                                                {/* Text */}
                                                <p className="p-xl">It only takes a few clicks to get started</p>
                                                {/* Button */}
                                                <Link href="#" className="btn r-04 btn--theme hover--tra-white" data-bs-toggle="modal" data-bs-target="#modal-3">Get srarted - it's free
                                                </Link>
                                                {/* Button Text */}
                                                <p className="p-sm btn-txt ico-15 o-85">
                                                    <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                                </p>
                                            </div>
                                        </div>	{/* END BANNER-1 TEXT */}
                                    </div>   {/* End row */}
                                </div>   {/* End banner overlay */}
                            </div>    {/* END BANNER-1 WRAPPER */}
                        </div>     {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}