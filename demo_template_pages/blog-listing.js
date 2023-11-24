import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="blog-page" className="pb-60 inner-page-hero blog-page-section">
                        <div className="container">
                            {/* WIDE BLOG POST */}
                            <div className="blog-post wide-post wow fadeInUp">
                                <div className="row d-flex align-items-center">
                                    {/* BLOG POST IMAGE */}
                                    <div className="col-md-6">
                                        <div className="blog-post-img">
                                            <img className="img-fluid r-16" src="/images/blog/post-11-img.jpg" alt="blog-post-image" />
                                        </div>
                                    </div>
                                    {/* BLOG POST TEXT */}
                                    <div className="col-md-6">
                                        <div className="blog-post-txt">
                                            {/* Post Tag */}
                                            <span className="post-tag color--blue-400">Social Media Marketing</span>
                                            {/* Post Link */}
                                            <h3 className="s-38 w-700">
                                                <Link href="/single-post">Congue magna tempor and ipsum Martex sapien turpis
                                                    laoreet augue
                                                </Link>
                                            </h3>
                                            {/* Text */}
                                            <p>Aliqum mullam blandit vitae and tempor sapien and donec lipsum gravida porta undo
                                                velna dolor libero a risus aliquet tempus posuere a tempor velna tempus posuere dolor
                                            </p>
                                            {/* Post Meta */}
                                            <div className="blog-post-meta mt-30">
                                                <ul className="post-meta-list ico-10">
                                                    <li><p className="w-500">By Martex Team</p></li>
                                                    <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                    <li><p>Apr 28, 2023</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>	{/* END BLOG POST TEXT */}
                                </div>   {/* End row */}
                            </div>	{/* END WIDE BLOG POST */}
                            {/* POSTS WRAPPER */}
                            <div className="posts-wrapper">
                                <div className="row">
                                    {/* BLOG POST #1 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-1-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--red-400">Product News</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Aliqum mullam porta blandit: lacus and sapien
                                                        gravida
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat
                                                    congue diam ultrice laoreet sagittis
                                                </p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Martex Team</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Apr 23, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #1 */}
                                    {/* BLOG POST #2 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-2-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--green-400">Community</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Porttitor cursus fusce neque CEO egestas cursus
                                                        magna sapien and suscipit ipsum
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Miranda Green</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Apr 09, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #2 */}
                                    {/* BLOG POST #3 */}
                                    <div className="col-md-12 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-3-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--violet-400">Freelancer Tips</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Cubilia laoreet ipsum augue eget egestas Martex magna</Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                                    egets congue ultrice sagittis laoreet
                                                </p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Helen J.</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Apr 01, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #3 */}
                                </div>
                            </div>	{/* END POSTS WRAPPER */}
                            {/* BLOG POSTS CATEGORY */}
                            <div className="row">
                                <div className="col">
                                    <div className="posts-category ico-20 wow fadeInUp">
                                        <h4 className="s-34 w-700">Latest News <span className="flaticon-next" /></h4>
                                    </div>
                                </div>
                            </div>
                            {/* POSTS WRAPPER */}
                            <div className="posts-wrapper">
                                <div className="row">
                                    {/* BLOG POST #4 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-4-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--pink-400">Tutorials</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Phasellus blandit justo undo aliquam vitae molestie
                                                        nunc sapien augue justo aliquet
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Miranda Green</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Mar 20, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #4 */}
                                    {/* BLOG POST #5 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-5-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--violet-400">Freelancer Tips</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Blandit justo phasellus undo aliquam diam molestie
                                                        vitae
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                                    egets congue ultrice sagittis laoreet
                                                </p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Martex Team</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Mar 13, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #5 */}
                                    {/* BLOG POST #6 */}
                                    <div className="col-md-12 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-6-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--blue-400">Extensions</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Cursus porttitor fusce neque CEO egestas cursus magna
                                                        sapien and ipsum suscipit
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Mullam ipsum aliqum vitae and blandit vitae tempor sapien and lipsum donec</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Martex Team</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Feb 23, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #6 */}
                                </div>  {/* End row */}
                            </div>	{/* END POSTS WRAPPER */}
                            {/* SQUARE BLOG POST */}
                            <div className="blog-post square-post">
                                <div className="row">
                                    <div className="col">
                                        {/* SQUARE BLOG POST WRAPPER */}
                                        <div className="square-post-wrapper bg--black-400 block-shadow r-16 wow fadeInUp">
                                            <div className="row d-flex align-items-center">
                                                {/* BLOG POST TEXT */}
                                                <div className="col-md-6 order-last order-md-2">
                                                    <div className="blog-post-txt color--white">
                                                        {/* Post Tag */}
                                                        <span className="post-tag color--pink-400">Video Tutorials</span>
                                                        {/* Post Link */}
                                                        <h4 className="s-34 w-700 mb-20">
                                                            <Link href="/single-post">Lipsum sodales sapien Martex aliquet blandit
                                                                augue gravida posuere
                                                            </Link>
                                                        </h4>
                                                        {/* Text */}
                                                        <p>Aliqum mullam blandit vitae and tempor sapien and donec lipsum gravida porta
                                                            undo velna dolor libero risus aliquet tempus posuere vitae tempor
                                                        </p>
                                                        {/* Post Meta */}
                                                        <div className="blog-post-meta mt-30">
                                                            <ul className="post-meta-list ico-10">
                                                                <li><p className="w-500">By Martex Team</p></li>
                                                                <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                                <li><p>Feb 12, 2023</p></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* BLOG POST IMAGE */}
                                                <div className="col-md-6 order-first order-md-2">
                                                    <div className="blog-post-img video-preview">
                                                        {/* Play Icon */}
                                                        <VideoPopup style={1}/>
                                                        {/* Preview Image */}
                                                        <img className="img-fluid" src="/images/blog/post-10-img.jpg" alt="video-preview" />
                                                    </div>
                                                </div>
                                            </div>	  {/* End row */}
                                        </div>	{/* END SQUARE BLOG POST WRAPPER */}
                                    </div>
                                </div>	  {/* End row */}
                            </div>	{/* END SQUARE BLOG POST */}
                            {/* BLOG POSTS CATEGORY */}
                            <div className="row">
                                <div className="col">
                                    <div className="posts-category ico-20 wow fadeInUp">
                                        <h4 className="s-34 w-700">All Stories <span className="flaticon-next" /></h4>
                                    </div>
                                </div>
                            </div>
                            {/* POSTS WRAPPER */}
                            <div className="posts-wrapper">
                                <div className="row">
                                    {/* BLOG POST #7 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-7-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--red-400">Product News</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Phasellus blandit justo undo aliquam diam vitae
                                                        molestie
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat
                                                    congue diam ultrice laoreet sagittis
                                                </p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Martex Team</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Feb 02, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #7 */}
                                    {/* BLOG POST #8 */}
                                    <div className="col-md-6 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-8-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--violet-400">Freelancer Tips</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Porttitor cursus fusce neque CEO egestas cursus
                                                        magna sapien and suscipit ipsum
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Miranda Green</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Jan 26, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #8 */}
                                    {/* BLOG POST #9 */}
                                    <div className="col-md-12 col-lg-4">
                                        <div className="blog-post mb-40 wow fadeInUp clearfix">
                                            {/* BLOG POST IMAGE */}
                                            <div className="blog-post-img mb-35">
                                                <img className="img-fluid r-16" src="/images/blog/post-9-img.jpg" alt="blog-post-image" />
                                            </div>
                                            {/* BLOG POST TEXT */}
                                            <div className="blog-post-txt">
                                                {/* Post Tag */}
                                                <span className="post-tag color--green-400">Community</span>
                                                {/* Post Link */}
                                                <h6 className="s-20 w-700">
                                                    <Link href="/single-post">Aliqum mullam porta blandit: lacus and sapien
                                                        gravida
                                                    </Link>
                                                </h6>
                                                {/* Text */}
                                                <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat
                                                    egets congue ultrice sagittis laoreet
                                                </p>
                                                {/* Post Meta */}
                                                <div className="blog-post-meta mt-20">
                                                    <ul className="post-meta-list ico-10">
                                                        <li><p className="p-sm w-500">By Miranda Green</p></li>
                                                        <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                                        <li><p className="p-sm">Jan 12, 2023</p></li>
                                                    </ul>
                                                </div>
                                            </div>	{/* END BLOG POST TEXT */}
                                        </div>
                                    </div>	{/* END BLOG POST #9 */}
                                </div>  {/* End row */}
                            </div>	{/* END POSTS WRAPPER */}
                        </div>	   {/* End container */}
                    </section>	{/* END BLOG POSTS LISTING */}
                    {/* PAGE PAGINATION
			============================================= */}
                    <div className="pb-100 page-pagination theme-pagination">
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