import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import BrandSlider2 from "@/components/slider/BrandSlider2"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    {/* ABOUT-2
			============================================= */}
                    <section id="about-2" className="rel inner-page-hero about-section division">
                        {/* ABOUT-2 TITLE */}
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-lg-10 col-xl-9">
                                    <div className="about-2-title mb-60">
                                        {/* Title */}
                                        <h2 className="s-52 w-700 mb-30">We provide solutions for your creative ideas</h2>
                                        {/* Text */}
                                        <p className="mb-0">An enim nullam tempor sapien gravida donec pretium ipsum porta justo
                                            integer and purus velna vitae auctor integer undo congue diam purus pretium and ligula
                                            tempor primis libero at tempus, blandit and cursus varius magnis at sapien egestas
                                            purus vitae purus an ipsum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>	  {/* END ABOUT-2 TITLE */}
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
                                                <p>Nullam tempor pretium a gravida donec congue ipsum porta justo integer dolor
                                                    odio auctor a neque suscipit an ipsum integer congue purus at pretium turpis
                                                    egestas and volute laoreet quaerat
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
                    </section>	{/* END ABOUT-2 */}
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
                                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                            vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
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
                    {/* STATISTIC-5
			============================================= */}
                    <div id="statistic-5" className="py-100 statistic-section division">
                        <div className="container">
                            {/* STATISTIC-1 WRAPPER */}
                            <div className="statistic-5-wrapper">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* STATISTIC BLOCK #1 */}
                                    <div className="col">
                                        <div id="sb-5-1" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-digit">
                                                    <h2 className="s-44 w-700">
                                                        <CounterUp end={26} />.<CounterUp end={62} />k
                                                    </h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-txt">
                                                    <h5 className="s-19 w-700">Happy Customers</h5>
                                                    <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #1 */}
                                    {/* STATISTIC BLOCK #2 */}
                                    <div className="col">
                                        <div id="sb-5-2" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-digit">
                                                    <h2 className="s-44 w-700">
                                                        <CounterUp end={13} />.<CounterUp end={54} />k
                                                    </h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-txt">
                                                    <h5 className="s-19 w-700">Positive Ratings</h5>
                                                    <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #2 */}
                                    {/* STATISTIC BLOCK #3 */}
                                    <div className="col">
                                        <div id="sb-5-3" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-digit">
                                                    <h2 className="s-44 w-700">
                                                        <CounterUp end={4} />.<CounterUp end={87} />/5
                                                    </h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-txt">
                                                    <h5 className="s-19 w-700">Rating</h5>
                                                    <p>Porta justo integer and velna vitae auctor and magna quaerat ligula</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #3 */}
                                </div>  {/* End row */}
                            </div>	{/* END STATISTIC-5 WRAPPER */}
                        </div>	 {/* End container */}
                    </div>	 {/* END STATISTIC-5 */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="bg--04 bg--fixed py-100 ct-01 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">Co-founder at Martex</span>
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Henry Adams</h2>
                                        {/* Text */}
                                        <p className="p-lg">"Sodales tempor sapien diam purus ipsum quaerat and volute fusce
                                            a congue laoreet turpis neque diam auctor turpis vitae dolor magna luctus placerat
                                            neque ipsum fusce cursus ligula cursus purus vitae purus and ipsum suscipit. Nemo
                                            ipsam cubilia donec turpis undo egestas ipsum a purus sapien ultrice aliquam lacus
                                            and quaerat an ipsum augue turpis sapien cursus congue augue"
                                        </p>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block j-img video-preview right-column wow fadeInLeft">
                                        {/* Play Icon */}
                                        <VideoPopup style={2} />
                                        {/* Preview Image */}
                                        <img className="img-fluid r-20" src="/images/img-17.jpg" alt="video-preview" />
                                    </div>
                                </div>
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* FEATURES-11
			============================================= */}
                    <section id="features-11" className="py-100 features-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">We make your business gain more revenue at a glance</h2>
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
                                                        <span className="flaticon-graphics color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Market Research</h6>
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
                                                        <span className="flaticon-idea color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">User Experience</h6>
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
                                                        <span className="flaticon-graphic color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Digital Marketing</h6>
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
                                                        <span className="flaticon-wireframe color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Web Development</h6>
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
                                                        <span className="flaticon-trophy color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Brand Design Identity</h6>
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
                                                        <span className="flaticon-search-engine-1 color--theme" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#f4f9fc" d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">SEO &amp; SMM Services</h6>
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
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* BRANDS-1
			============================================= */}
                    <div id="brands-1" className="py-80 brands-section">
                        <div className="container">
                            {/* BRANDS TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="brands-title mb-50">
                                        <h5 className="s-20">Trusted and used by over 3,400 companies</h5>
                                    </div>
                                </div>
                            </div>
                            {/* BRANDS CAROUSEL */}
                            <div className="row">
                                <div className="col text-center">
                                    <BrandSlider2 />
                                </div>
                            </div>  {/* END BRANDS CAROUSEL */}
                        </div>	{/* End container */}
                    </div>	{/* END BRANDS-1 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* TEAM-1
			============================================= */}
                    <section id="team-1" className="pt-100 team-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-80">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">All we do is dream and craft amazing products</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* TEAM MEMBERS WRAPPER */}
                            <div className="team-members-wrapper">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                                    {/* TEAM MEMBER #1 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-1.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Jonathan Barnes</h6>
                                                <p className="color--grey">Founder and CEO</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #1 */}
                                    {/* TEAM MEMBER #2 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-2.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Jaime Fletcher</h6>
                                                <p className="color--grey">Software Engineer</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #2 */}
                                    {/* TEAM MEMBER #3 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-3.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Les Bakker</h6>
                                                <p className="color--grey">Software Engineer</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #3 */}
                                    {/* TEAM MEMBER #4 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-4.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Alyssa Garrison</h6>
                                                <p className="color--grey">Web Development</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #4 */}
                                    {/* TEAM MEMBER #5 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-5.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Charlotte Johnson</h6>
                                                <p className="color--grey">Content Manager</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #5 */}
                                    {/* TEAM MEMBER #6 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-6.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Olivia Steiner</h6>
                                                <p className="color--grey">Head of Marketing</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #6 */}
                                    {/* TEAM MEMBER #7 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-7.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Charles Fairless</h6>
                                                <p className="color--grey">Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #7 */}
                                    {/* TEAM MEMBER #8 */}
                                    <div className="col">
                                        <div className="team-member mb-50 wow fadeInUp">
                                            {/* Team Member Photo */}
                                            <div className="team-member-photo r-14">
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src="/images/team-13.jpg" alt="team-member-foto" />
                                                    <div className="item-overlay" />
                                                </div>
                                            </div>
                                            {/* Team Member Data */}
                                            <div className="team-member-data">
                                                <h6 className="s-20 w-700 color--black">Grow with Us!</h6>
                                                <p className="color--grey"><Link href="mailto:youremail@mail.com">hireme@domain.com</Link></p>
                                            </div>
                                        </div>
                                    </div>	{/* END TEAM MEMBER #8 */}
                                </div>   {/* End row */}
                            </div>	{/* TEAM MEMBERS WRAPPER */}
                            {/* MORES BUTTON */}
                            <div className="row">
                                <div className="col">
                                    <div className="more-btn text-center mt-20 wow fadeInUp">
                                        <Link href="/careers" className="btn btn--tra-black hover--theme">Join our team</Link>
                                    </div>
                                </div>
                            </div>
                        </div>	    {/* End container */}
                    </section>	{/* END TEAM-1 */}
                    {/* BOX CONTENT
			============================================= */}
                    <section className="pt-100 ws-wrapper content-section">
                        <div className="container">
                            <div className="bc-1-wrapper bg--02 bg--fixed r-16">
                                <div className="section-overlay">
                                    <div className="row d-flex align-items-center">
                                        {/* TEXT BLOCK */}
                                        <div className="col-md-6 order-last order-md-2">
                                            <div className="txt-block left-column wow fadeInRight">
                                                {/* Section ID */}
                                                <span className="section-id">Why Choose Us</span>
                                                {/* Title */}
                                                <h2 className="s-46 w-700">With knowledge, skills &amp; hard work</h2>
                                                {/* Text */}
                                                <p>Sodales tempor sapien quaerat congue eget ipsum laoreet turpis neque auctor
                                                    vitae eros dolor luctus placerat magna ligula cursus and purus pretium
                                                </p>
                                                {/* Small Title */}
                                                <h5 className="s-24 w-700 h5-title">Your road to success!</h5>
                                                {/* Text */}
                                                <p className="mb-0">Sapien tempor sodales quaerat ipsum undo congue laoreet turpis neque
                                                    auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae
                                                </p>
                                            </div>
                                        </div>	{/* END TEXT BLOCK */}
                                        {/* IMAGE BLOCK */}
                                        <div className="col-md-6 order-first order-md-2">
                                            <div className="img-block right-column wow fadeInLeft">
                                                <img className="img-fluid" src="/images/img-08.png" alt="content-image" />
                                            </div>
                                        </div>
                                    </div>   {/* End row */}
                                </div>    {/* End section overlay */}
                            </div>    {/* End content wrapper */}
                        </div>     {/* End container */}
                    </section>	{/* END BOX CONTENT */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-02 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="/images/img-07.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* Section ID */}
                                        <span className="section-id">Strategies That Work</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Right strategies &amp; implementations</h2>
                                        {/* Text */}
                                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                            vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                        </p>
                                        {/* Text */}
                                        <p className="mb-0">Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice
                                            an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula
                                            purus egestas magna cursus undo varius purus magnis sapien quaerat
                                        </p>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* TESTIMONIALS-2
			============================================= */}
                    <section id="reviews-2" className="pt-100 reviews-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Here’s what our amazing clients are saying</h2>
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
                    <div id="rating-1" className="pt-70 pb-100 rating-section">
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
                                                <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-21.png" alt="brand-logo" /></Link>
                                                <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-21-white.png" alt="brand-logo" /></Link>
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
                                                <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-22.png" alt="brand-logo" /></Link>
                                                <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-22-white.png" alt="brand-logo" /></Link>
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
                                                <Link href="#"><img className="img-fluid light-theme-img" src="/images/brand-23.png" alt="brand-logo" /></Link>
                                                <Link href="#"><img className="img-fluid dark-theme-img" src="/images/brand-23-white.png" alt="brand-logo" /></Link>
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
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="bg--white-400 py-100 ct-03 content-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 col-lg-5 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">One-Stop Solution</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Data-driven digital marketing</h2>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Tempor sapien quaerat undo ipsum laoreet purus and sapien dolor ociis ultrice
                                                    ipsum aliquam undo congue dolor cursus congue varius magnis
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Cursus purus suscipit vitae cubilia magnis diam volute egestas
                                                    sapien ultrice auctor
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 col-lg-7 order-first order-md-2">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="/images/img-14.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>    {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* BLOG-1
			============================================= */}
                    <section id="blog-1" className="py-100 blog-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Articles &amp; Resources</h2>
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
                                            <span className="post-tag color--pink-400">Product News</span>
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
                    </section>	{/* END BLOG-1 */}
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