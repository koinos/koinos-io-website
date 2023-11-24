import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light inner-page-header">
                <div>
                    <section className="page-hero-section">
                        <div className="page-hero-section-overlay bg--01 bg--scroll">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    {/* TEXT BLOCK */}
                                    <div className="col-md-6">
                                        <div className="txt-block left-column color--white wow fadeInRight">
                                            {/* Section ID */}
                                            <span className="section-id rounded-id bg--tra-white color--white">
                                                Careers
                                            </span>
                                            {/* Title */}
                                            <h2 className="s-56 w-700">We are looking for creative and fun individuals</h2>
                                            {/* Text */}
                                            <p className="p-lg w-400">Sodales tempor sapien quaerat ipsum congue undo laoreet turpis
                                                neque auctor turpis vitae dolor luctus placerat magna ipsun ligula purus cursus
                                            </p>
                                        </div>
                                    </div>	{/* END TEXT BLOCK */}
                                    {/* IMAGE BLOCK */}
                                    <div className="col-md-6">
                                        <div className="img-block right-column wow fadeInLeft">
                                            <img className="img-fluid" src="/images/img-18.png" alt="content-image" />
                                        </div>
                                    </div>
                                </div>   {/* End row */}
                            </div>    {/* End container */}
                        </div>     {/* End Page Hero Section Overlay */}
                        {/* WAVE SHAPE BOTTOM */}
                        <div className="wave-shape-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170"><path fill="#fff" fillOpacity={1} d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" /></svg>
                        </div>
                    </section>	{/* END PAGE HERO SECTION */}
                    {/* ABOUT-3
			============================================= */}
                    <div id="about-3" className="pt-100 about-section division">
                        <div className="container">
                            <div className="row">
                                {/* ABOUT-3 TEXT */}
                                <div className="col-md-6">
                                    <div id="a3-1" className="txt-block">
                                        {/* Title */}
                                        <h5 className="s-24 w-700 mb-20">Mission and impact</h5>
                                        {/* Text */}
                                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae
                                            dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                        </p>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum
                                                    aliquam undo congue dolor cursus
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                                    sapien turpis ultrice auctor congue magna placerat
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END ABOUT-3 TEXT */}
                                {/* ABOUT-3 TEXT */}
                                <div className="col-md-6">
                                    <div id="a3-2" className="txt-block">
                                        {/* Title */}
                                        <h5 className="s-24 w-700 mb-20">We deliver results</h5>
                                        {/* Text */}
                                        <p>Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice an aliquam quaerat
                                            ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna
                                            cursus undo varius purus magnis sapien quaerat
                                        </p>
                                        {/* Text */}
                                        <p className="mb-0">Egestas volute nemo ipsam turpis egestas ipsum and purus sapien ultrice an
                                            aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus quaerat sapien magnis
                                        </p>
                                    </div>
                                </div>	{/* END ABOUT-3 TEXT */}
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </div>	{/* END ABOUT-3 */}
                    {/* ABOUT-2
			============================================= */}
                    <div id="about-2" className="rel pt-100 about-section division">
                        {/* ABOUT-2 IMAGES */}
                        <div className="container-fluid">
                            <div className="row">
                                {/* IMAGES-1 */}
                                <div className="col-md-5">
                                    <div className="text-end">
                                        {/* IMAGE-1 */}
                                        <div className="about-2-img a-2-1 r-12">
                                            <img className="img-fluid" src="/images/a2-1.jpg" alt="about-image" />
                                        </div>
                                        {/* IMAGE-2 */}
                                        <div className="about-2-img a-2-2 r-12">
                                            <img className="img-fluid" src="/images/a2-2.jpg" alt="about-image" />
                                        </div>
                                    </div>
                                </div>	{/* END IMAGES-1 */}
                                {/* IMAGES-2 */}
                                <div className="col-md-7">
                                    {/* IMAGE-3 */}
                                    <div className="about-2-img a-2-3 r-12">
                                        <img className="img-fluid" src="/images/a2-3.jpg" alt="about-image" />
                                    </div>
                                    <div className="row">
                                        {/* TEXT */}
                                        <div className="col-md-7 col-lg-6">
                                            <div className="a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12">
                                                {/* Icon */}
                                                <div className="a2-txt-quote ico-40 o-20">
                                                    <span className="flaticon-quote" />
                                                </div>
                                                {/* Text */}
                                                <p>Nullam tempor pretium a gravida donec congue ipsum porta justo integer dolor odio
                                                    auctor a neque suscipit an ipsum integer congue purus at pretium turpis egestas and
                                                    volute laoreet quaerat
                                                </p>
                                                {/* Author */}
                                                <p className="a2-txt-author">Charlie Cheever <span>CEO &amp; CO-FOUNDER</span></p>
                                            </div>
                                        </div>
                                        {/* IMAGE-4 */}
                                        <div className="col-md-5 col-lg-6">
                                            <div className="about-2-img a-2-4 r-12">
                                                <img className="img-fluid" src="/images/a2-4.jpg" alt="about-image" />
                                            </div>
                                        </div>
                                    </div>	 {/* End row */}
                                </div>	{/* END IMAGES-2 */}
                            </div>	 {/* End row */}
                        </div>	  {/* END ABOUT-2 IMAGES */}
                    </div>	{/* END ABOUT-2 */}
                    {/* FEATURES-11
			============================================= */}
                    <section id="features-11" className="py-100 features-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Benefits and Perks</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURES-11 WRAPPER */}
                            <div className="fbox-wrapper">
                                <div className="row row-cols-1 row-cols-md-2 rows-3">
                                    {/* FEATURE BOX #1 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-1 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-virus-1 color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Healthcare</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #1 */}
                                    {/* FEATURE BOX #2 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-2 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-calendar color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Flexible Schedules</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #2 */}
                                    {/* FEATURE BOX #3 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-3 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-profits color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">401k Matching</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #3 */}
                                    {/* FEATURE BOX #4 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-4 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-visionary color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Hardware &amp; Software</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #4 */}
                                    {/* FEATURE BOX #5 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-5 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-fast-food color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">In-office Lunch</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #5 */}
                                    {/* FEATURE BOX #6 */}
                                    <div className="col">
                                        <div className="fbox-11 fb-6 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-50">
                                                    <div className="shape-ico">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-money-2 color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Competitive Salary</h6>
                                                <p>Porta semper lacus cursus feugiat primis ultrice ligula risus ociis auctor and
                                                    tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum
                                                </p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #6 */}
                                </div>  {/* End row */}
                            </div>	{/* END FEATURES-11 WRAPPER */}
                        </div>     {/* End container */}
                    </section>	{/* END FEATURES-11 */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="bg--white-400 py-100 ct-01 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">Co-founder at Martex</span>
                                        {/* Title */}
                                        <h2 className="s-48 w-700">Henry Adams</h2>
                                        {/* Text */}
                                        <p className="p-lg mb-0">"Sodales tempor sapien diam purus ipsum quaerat and volute
                                            fusce a congue laoreet turpis neque diam auctor turpis vitae dolor magna luctus
                                            placerat neque ipsum fusce cursus ligula cursus purus vitae purus and ipsum suscipit.
                                            Nemo ipsam cubilia donec turpis undo egestas ipsum a purus sapien ultrice aliquam
                                            lacus and quaerat an ipsum augue turpis sapien cursus congue augue"
                                        </p>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block j-img video-preview right-column wow fadeInLeft">
                                        {/* Play Icon */}
                                        <VideoPopup style={2}/>
                                        {/* Preview Image */}
                                        <img className="img-fluid r-20" src="/images/img-17.jpg" alt="video-preview" />
                                    </div>
                                </div>
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* CAREERS-1
			============================================= */}
                    <section id="careers-1" className="pt-100 pb-60 careers-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Open Roles at Martex</h2>
                                        {/* Text */}
                                        <p className="p-lg">We’re building a better way to work, fueled by transparency, trust, and
                                            technology that is a force for positive change for the hourly workforce
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* OPEN ROLES */}
                            <div className="row row-cols-1 row-cols-md-2">
                                {/* OPEN ROLE #1 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Sales</span>
                                            <h6 className="s-20 w-700">Senior Account Executive</h6>
                                            <p>New York, NY / Full time</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #1 */}
                                {/* OPEN ROLE #2 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Engineering</span>
                                            <h6 className="s-20 w-700">Software Engineer, Security</h6>
                                            <p>Vancouver, British Columbia, Canada / Remote</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #2 */}
                                {/* OPEN ROLE #3 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Engineering</span>
                                            <h6 className="s-20 w-700">Senior Backend Engineer</h6>
                                            <p>New York, NY / Full time</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #3 */}
                                {/* OPEN ROLE #4 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Engineering</span>
                                            <h6 className="s-20 w-700">Engineering Tech Lead</h6>
                                            <p>Vancouver, British Columbia, Canada / Remote</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #4 */}
                                {/* OPEN ROLE #5 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Sales</span>
                                            <h6 className="s-20 w-700">Mid-Market Account Executive</h6>
                                            <p>New York, NY / Full time</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #5 */}
                                {/* OPEN ROLE #6 */}
                                <div className="col">
                                    <div className="role-box bg--white-300 r-10">
                                        <Link href="/career-role">
                                            <span>Marketing</span>
                                            <h6 className="s-20 w-700">Product Marketing Manager</h6>
                                            <p>Vancouver, British Columbia, Canada / Remote</p>
                                        </Link>
                                    </div>
                                </div>	{/* END OPEN ROLE #6 */}
                            </div>	{/* END OPEN ROLES */}
                        </div> {/* End container */}
                    </section>	{/* END CAREERS-1 */}
                    {/* BANNER-12
			============================================= */}
                    <section id="banner-12" className="banner-section">
                        <div className="container">
                            {/* BANNER-12 WRAPPER */}
                            <div className="banner-12-wrapper bg--01 bg--scroll r-16">
                                <div className="banner-overlay">
                                    <div className="row d-flex align-items-center">
                                        {/* BANNER-12 TEXT */}
                                        <div className="col-md-7">
                                            <div className="banner-12-txt color--white">
                                                {/* Title */}
                                                <h2 className="s-45 w-700">We are looking for talented individuals</h2>
                                                {/* Text */}
                                                <p className="p-lg">We're constantly looking for talented people to join our team.
                                                    Don't hesitate to get in touch with us
                                                </p>
                                                {/* Button */}
                                                <Link href="mailto:yourdomain@mail.com" className="btn r-04 btn--theme hover--tra-white">yourdomain@mail.com</Link>
                                            </div>
                                        </div>	{/* END BANNER-12 TEXT */}
                                        {/* BANNER-12 IMAGE */}
                                        <div className="col-md-5">
                                            <div className="banner-12-img text-center">
                                                <img className="img-fluid" src="/images/img-16.png" alt="banner-image" />
                                            </div>
                                        </div>
                                    </div>   {/* End row */}
                                </div>   {/* End banner overlay */}
                            </div>    {/* END BANNER-12 WRAPPER */}
                        </div>     {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}