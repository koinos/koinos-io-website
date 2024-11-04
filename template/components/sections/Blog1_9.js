

import Link from "next/link"
export default function Blog1_9() {
    return (
        <>
            <section id="blog-1" className="py-100 blog-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-52 w-700">Articles &amp; Resources</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div id="bp-1-1" className="blog-post wow fadeInUp">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-35">
                                    <img className="img-fluid r-16" src="/images/blog/post-8-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Tag */}
                                    <span className="post-tag color--theme">Product News</span>
                                    {/* Post Link */}
                                    <h6 className="s-20 w-700">
                                        <Link href="/single-post">Aliqum mullam porta blandit: tempor sapien and gravida</Link>
                                    </h6>
                                    {/* Text */}
                                    <p>Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat congue
                                        diam ultrice laoreet sagittis
                                    </p>
                                    {/* Post Meta */}
                                    <div className="blog-post-meta mt-20">
                                        <ul className="post-meta-list ico-10">
                                            <li><p className="p-sm w-500">By Helen J.</p></li>
                                            <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                            <li><p className="p-sm">Apr 28, 2023</p></li>
                                        </ul>
                                    </div>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div id="bp-1-2" className="blog-post wow fadeInUp">
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
                                        <Link href="/single-post">Porttitor cursus fusce egestas CEO cursus at magna sapien
                                            suscipit and egestas ipsum
                                        </Link>
                                    </h6>
                                    {/* Text */}
                                    <p>Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum</p>
                                    {/* Post Meta */}
                                    <div className="blog-post-meta mt-20">
                                        <ul className="post-meta-list ico-10">
                                            <li><p className="p-sm w-500">By Martex Team</p></li>
                                            <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                            <li><p className="p-sm">Apr 14, 2023</p></li>
                                        </ul>
                                    </div>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div className="col-md-12 col-lg-4">
                            <div id="bp-1-3" className="blog-post wow fadeInUp">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img mb-35">
                                    <img className="img-fluid r-16" src="/images/blog/post-5-img.jpg" alt="blog-post-image" />
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Tag */}
                                    <span className="post-tag color--purple-400">Freelancer Tips</span>
                                    {/* Post Link */}
                                    <h6 className="s-20 w-700">
                                        <Link href="/single-post">Cubilia laoreet augue egestas and Martex magna impedit</Link>
                                    </h6>
                                    {/* Text */}
                                    <p>Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat egets
                                        congue ultrice sagittis laoreet
                                    </p>
                                    {/* Post Meta */}
                                    <div className="blog-post-meta mt-20">
                                        <ul className="post-meta-list ico-10">
                                            <li><p className="p-sm w-500">By Miranda Green</p></li>
                                            <li className="meta-list-divider"><p><span className="flaticon-minus" /></p></li>
                                            <li><p className="p-sm">Mar 27, 2023</p></li>
                                        </ul>
                                    </div>
                                </div>	{/* END BLOG POST TEXT */}
                            </div>
                        </div>	{/* END BLOG POST #3 */}
                    </div>    {/* End row */}
                </div>    {/* End container */}
            </section>
        </>
    )
}
