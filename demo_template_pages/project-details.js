import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="project-1" className="gr--whitesmoke inner-page-hero single-project">
                        <div className="container">
                            <div className="row justify-content-center">
                                {/* PROJECT DISCRIPTION */}
                                <div className="col-lg-11 col-xl-10">
                                    <div className="project-description">
                                        {/* PROJECT TITLE */}
                                        <div className="project-title">
                                            {/* Title */}
                                            <h2 className="s-52 w-700">Online shopping concept for mobile app templates</h2>
                                            {/* Project Data */}
                                            <div className="project-data">
                                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                                                    <div className="col">
                                                        <p className="p-lg"><span>Category:</span> Development</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="p-lg"><span>Start Date:</span> 2023-02-28</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="p-lg"><span>Handover:</span> 2023-04-30</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="p-lg"><span>Client:</span> JThemes</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="p-lg"><Link href="#" className="color--theme">www.website.com</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>	{/* END PROJECT TITLE */}
                                        {/* PROJECT PREVIEW IMAGE  */}
                                        <div className="project-priview-img mb-50">
                                            <img className="img-fluid r-16" src="/images/projects/project-07.jpg" alt="project-preview" />
                                        </div>
                                        {/* PROJECT TEXT */}
                                        <div className="project-txt">
                                            {/* Text */}
                                            <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque diam augue fusce sapien nulla a primis lacinia ipsum a molestie blandit
                                                and justo an aliquet eget molestie sagittis at quaerat sodales
                                            </p>
                                            {/* List */}
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor
                                                        and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                        eget tempor diam
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                        and augue egestas
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* Small Title */}
                                            <h5 className="s-24 w-700 mt-35 mb-35">Overview &amp; Challenge</h5>
                                            {/* Text */}
                                            <p>Congue sagittis augue egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque blandit fusce aliquam
                                            </p>
                                            {/* Text */}
                                            <p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque blandit fusce lorem nulla an aliquam lacinia justo molestie blandit
                                                justo diam an aliquet tortor sagittis lacinia molestie diam egestas
                                            </p>
                                            {/* List */}
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor
                                                        and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                        eget tempor diam
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                        and augue egestas
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* PROJECT IMAGES */}
                                            <div className="row d-flex align-items-center project-inner-img mt-50">
                                                {/* IMAGE #1 */}
                                                <div className="col-md-6">
                                                    <div className="project-image project-preview top-img r-10">
                                                        {/* Project Preview */}
                                                        <div className="hover-overlay">
                                                            <img className="img-fluid" src="/images/projects/project-10.jpg" alt="project-preview" />
                                                            <div className="item-overlay" />
                                                        </div>
                                                        {/* Project Link */}
                                                        <div className="project-link ico-35 color--white">
                                                            <Link className="image-link" href="images/projects/project-10a.jpg" >
                                                                <span className="flaticon-visibility" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* IMAGE #2 */}
                                                <div className="col-md-6">
                                                    <div className="project-image project-preview r-10">
                                                        {/* Project Preview */}
                                                        <div className="hover-overlay">
                                                            <img className="img-fluid" src="/images/projects/project-11.jpg" alt="project-preview" />
                                                            <div className="item-overlay" />
                                                        </div>
                                                        {/* Project Link */}
                                                        <div className="project-link ico-35 color--white">
                                                            <Link className="image-link" href="images/projects/project-11a.jpg" >
                                                                <span className="flaticon-visibility" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>	{/* END PROJECT IMAGES */}
                                            {/* WIDE IMAGE */}
                                            <div className="project-inner-img mt-30">
                                                <div className="project-image project-preview r-10">
                                                    {/* Project Preview */}
                                                    <div className="hover-overlay">
                                                        <img className="img-fluid" src="/images/projects/project-08.jpg" alt="project-preview" />
                                                        <div className="item-overlay" />
                                                    </div>
                                                    {/* Project Link */}
                                                    <div className="project-link ico-35 color--white">
                                                        <Link className="image-link" href="images/projects/project-08.jpg" >
                                                            <span className="flaticon-visibility" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>	{/* END WIDE IMAGE */}
                                            {/* Small Title */}
                                            <h5 className="s-24 w-700 mt-50 mb-35">Project Summary</h5>
                                            {/* Text */}
                                            <p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque blandit fusce lorem nulla an aliquam lacinia justo molestie blandit
                                                justo diam an aliquet tortor sagittis lacinia molestie diam egestas
                                            </p>
                                            {/* List */}
                                            <ul className="simple-list long-list mb-20">
                                                <li className="list-item">
                                                    <p>Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Laoreet
                                                        turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum
                                                        tempor
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Blandit velna vitae auctor and congue magna tempor sapien eget gravida laoreet
                                                        turpis
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien
                                                        congue augue egestas
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* Text */}
                                            <p>Sagittis augue congue egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque aliquam fusce blandit
                                            </p>
                                            {/* VIDEO PREVIEW */}
                                            <div className="project-image project-inner-img video-preview mt-50">
                                                {/* Play Icon */}
                                                <VideoPopup style={1} />
                                                {/* Preview Image */}
                                                <img className="img-fluid r-10" src="/images/projects/project-09.jpg" alt="video-preview" />
                                            </div>	{/* END VIDEO PREVIEW */}
                                            {/* Small Title */}
                                            <h5 className="s-24 w-700 mt-50 mb-35">Solution &amp; Results</h5>
                                            {/* Text */}
                                            <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo
                                                diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec
                                                bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem
                                            </p>
                                            {/* List */}
                                            <ul className="simple-list long-list mb-20">
                                                <li className="list-item">
                                                    <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum
                                                        and vitae efficitur purus and ipsum primis in cubilia laoreet augue egestas luctus
                                                        donec.
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Aliqum mullam blandit tempor sapien gravida donec ipsum porta justo. Laoreet
                                                        turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar dictum
                                                        tempor
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* Text */}
                                            <p>Sagittis augue congue egestas integer velna purus purus magna nec suscipit and egestas
                                                magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                                luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                                fusce cursus neque aliquam fusce blandit
                                            </p>
                                        </div>	{/* END PROJECT TEXT */}
                                        {/* MORE PROJECTS BUTTON */}
                                        <div className="more-projects ico-25 text-end pb-100">
                                            <Link href="/projects">
                                                <h3 className="s-38 w-700">More Projects</h3><span className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>	{/* END PROJECT DISCRIPTION */}
                            </div>	  {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END SINGLE PROJECT-1 */}
                    {/* BANNER-6
			============================================= */}
                    <section id="banner-6" className="bg--05 bg--scroll banner-section">
                        <div className="banner-overlay pt-80 pb-90">
                            <div className="container">
                                {/* BANNER-6 WRAPPER */}
                                <div className="banner-6-wrapper">
                                    <div className="row justify-content-center">
                                        {/* BANNER-6 TEXT */}
                                        <div className="col-md-9">
                                            <div className="banner-6-txt text-center color--white">
                                                {/* Title */}
                                                <h3 className="s-46 w-700">Give it a try, it's free!</h3>
                                                {/* Text */}
                                                <p className="p-xl o-85">It only takes a few clicks to get started</p>
                                                {/* Button */}
                                                <Link href="#" className="btn r-04 btn--theme hover--tra-white" data-bs-toggle="modal" data-bs-target="#modal-3">Get srarted - it's free</Link>
                                                {/* Button Text */}
                                                <p className="p-sm btn-txt ico-15 o-85">
                                                    <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                                </p>
                                            </div>
                                        </div>	{/* END BANNER-6 TEXT */}
                                    </div>   {/* End row */}
                                </div>    {/* END BANNER-6 WRAPPER */}
                            </div>    {/* End container */}
                        </div>     {/* End banner overlay */}
                    </section>
                </div>

            </Layout>
        </>
    )
}