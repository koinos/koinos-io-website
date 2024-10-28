import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VidepPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section className="ct-01 inner-page-hero content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">Productivity Focused</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Achieve more with better workflows</h2>
                                        {/* Text */}
                                        <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                            vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                        </p>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice
                                                    ipsum aliquam undo congue dolor cursus
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                                                    sapien turpis ultrice auctor congue placerat
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block right-column wow fadeInLeft">
                                        <img className="img-fluid" src="/images/img-06.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* FEATURES-11
			============================================= */}
                    <section id="features-11" className="pt-100 features-section division">
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-graphics" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-idea" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-graphic" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-wireframe" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-trophy" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                                                    <div className="shape-ico color--theme">
                                                        {/* Vector Icon */}
                                                        <span className="flaticon-search-engine-1" />
                                                        {/* Shape */}
                                                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
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
                    {/* BOX CONTENT
			============================================= */}
                    <section className="pt-100 ws-wrapper content-section">
                        <div className="container">
                            <div className="bc-1-wrapper bg--white-400 bg--fixed r-16">
                                <div className="section-overlay">
                                    <div className="row d-flex align-items-center">
                                        {/* TEXT BLOCK */}
                                        <div className="col-md-6 order-last order-md-2">
                                            <div className="txt-block left-column wow fadeInRight">
                                                {/* Section ID */}
                                                <span className="section-id">Enhance Engagement</span>
                                                {/* Title */}
                                                <h2 className="s-46 w-700">Automate your way to success</h2>
                                                {/* Text */}
                                                <p>Sodales tempor sapien quaerat congue eget ipsum laoreet turpis neque auctor
                                                    vitae eros dolor luctus placerat magna ligula cursus and purus pretium
                                                </p>
                                                {/* Small Title */}
                                                <h5 className="s-24 w-700 h5-title">The smarter way to work</h5>
                                                {/* Text */}
                                                <p className="mb-0">Sapien tempor sodales quaerat ipsum undo congue laoreet turpis neque
                                                    auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae
                                                </p>
                                            </div>
                                        </div>	{/* END TEXT BLOCK */}
                                        {/* IMAGE BLOCK */}
                                        <div className="col-md-6 order-first order-md-2">
                                            <div className="img-block right-column wow fadeInLeft">
                                                <img className="img-fluid" src="/images/img-05.png" alt="content-image" />
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
                                        <img className="img-fluid" src="/images/img-03.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* TEXT BOX */}
                                        <div className="txt-box">
                                            {/* Title */}
                                            <h5 className="s-24 w-700">Solution that grows with you</h5>
                                            {/* Text */}
                                            <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                                vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
                                            </p>
                                        </div>	{/* END TEXT BOX */}
                                        {/* TEXT BOX */}
                                        <div className="txt-box mb-0">
                                            {/* Title */}
                                            <h5 className="s-24 w-700">Connect your data sources</h5>
                                            {/* Text */}
                                            <p>Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis
                                                vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit
                                                purus
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
                                        </div>	{/* END TEXT BOX */}
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* FEATURES-12
			============================================= */}
                    <section id="features-12" className="shape--bg shape--white-400 pt-100 features-section division">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-5">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* Section ID */}
                                        <span className="section-id">One-Stop Solution</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Smart solutions, real-time results</h2>
                                        {/* Text */}
                                        <p>Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis neque auctor turpis
                                            vitae dolor luctus placerat magna ligula and cursus vitae
                                        </p>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Tempor sapien quaerat undo ipsum laoreet diam purus sapien a dolor ociis ultrice
                                                    ipsum aliquam congue a dolor cursus congue varius magnis
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Cursus purus suscipit  vitae cubilia magnis diam volute egestas
                                                    sapien ultrice auctor
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* FEATURES-12 WRAPPER */}
                                <div className="col-md-7">
                                    <div className="fbox-12-wrapper wow fadeInLeft">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* FEATURE BOX #1 */}
                                                <div id="fb-12-1" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                                    {/* Icon */}
                                                    <div className="fbox-ico ico-50">
                                                        <div className="shape-ico color--theme">
                                                            {/* Vector Icon */}
                                                            <span className="flaticon-layers-1" />
                                                            {/* Shape */}
                                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                            </svg>
                                                        </div>
                                                    </div>	{/* End Icon */}
                                                    {/* Text */}
                                                    <div className="fbox-txt">
                                                        <h5 className="s-20 w-700">Integrated</h5>
                                                        <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                                    </div>
                                                </div>
                                                {/* FEATURE BOX #2 */}
                                                <div id="fb-12-2" className="fbox-12 bg--white-100 block-shadow r-12">
                                                    {/* Icon */}
                                                    <div className="fbox-ico ico-50">
                                                        <div className="shape-ico color--theme">
                                                            {/* Vector Icon */}
                                                            <span className="flaticon-click-1" />
                                                            {/* Shape */}
                                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                            </svg>
                                                        </div>
                                                    </div>	{/* End Icon */}
                                                    {/* Text */}
                                                    <div className="fbox-txt">
                                                        <h5 className="s-20 w-700">Intuitive</h5>
                                                        <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                {/* FEATURE BOX #3 */}
                                                <div id="fb-12-3" className="fbox-12 bg--white-100 block-shadow r-12 mb-30">
                                                    {/* Icon */}
                                                    <div className="fbox-ico ico-50">
                                                        <div className="shape-ico color--theme">
                                                            {/* Vector Icon */}
                                                            <span className="flaticon-prioritize" />
                                                            {/* Shape */}
                                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                            </svg>
                                                        </div>
                                                    </div>	{/* End Icon */}
                                                    {/* Text */}
                                                    <div className="fbox-txt">
                                                        <h5 className="s-20 w-700">Flexible</h5>
                                                        <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                                    </div>
                                                </div>
                                                {/* FEATURE BOX #4 */}
                                                <div id="fb-12-4" className="fbox-12 bg--white-100 block-shadow r-12">
                                                    {/* Icon */}
                                                    <div className="fbox-ico ico-50">
                                                        <div className="shape-ico color--theme">
                                                            {/* Vector Icon */}
                                                            <span className="flaticon-analytics" />
                                                            {/* Shape */}
                                                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z" transform="translate(100 100)" />
                                                            </svg>
                                                        </div>
                                                    </div>	{/* End Icon */}
                                                    {/* Text */}
                                                    <div className="fbox-txt">
                                                        <h5 className="s-20 w-700">Efficient</h5>
                                                        <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* End row */}
                                </div>	{/* END FEATURES-12 WRAPPER */}
                            </div>    {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END FEATURES-12 */}
                    {/* FEATURES-2
			============================================= */}
                    <section id="features-2" className="pt-100 features-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-80">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Everything in One Place</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURES-2 WRAPPER */}
                            <div className="fbox-wrapper text-center">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* FEATURE BOX #1 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-1 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_01.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_01_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Intuitive Dashboard</h6>
                                                <p>Luctus egestas augue undo ultrice aliquam in lacus congue dapibus</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #1 */}
                                    {/* FEATURE BOX #2 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-2 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_05.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_05_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Effortless Integration</h6>
                                                <p>Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #2 */}
                                    {/* FEATURE BOX #3 */}
                                    <div className="col">
                                        <div className="fbox-2 fb-3 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <img className="img-fluid light-theme-img" src="/images/f_02.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_02_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">Real-time Analytics</h6>
                                                <p>Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #3 */}
                                </div>  {/* End row */}
                            </div>	{/* END FEATURES-2 WRAPPER */}
                        </div>     {/* End container */}
                    </section>	{/* END FEATURES-2 */}
                    {/* BOX CONTENT
			============================================= */}
                    <section className="pt-100 ws-wrapper content-section">
                        <div className="container">
                            <div className="bc-5-wrapper bg--04 hidd bg--scroll r-16">
                                <div className="section-overlay">
                                    {/* SECTION TITLE */}
                                    <div className="row justify-content-center">
                                        <div className="col-md-11 col-lg-9">
                                            <div className="section-title wow fadeInUp mb-60">
                                                {/* Title */}
                                                <h2 className="s-50 w-700">Build a customer-centric marketing strategy</h2>
                                                {/* Text */}
                                                <p className="p-xl">Aliquam a augue suscipit luctus neque purus ipsum neque diam
                                                    dolor primis libero tempus, blandit and cursus varius and magnis sodales
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* IMAGE BLOCK */}
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="bc-5-img bc-5-tablet img-block-hidden video-preview wow fadeInUp">
                                                {/* Play Icon */}
                                                <VideoPopup style={1} />
                                                {/* Preview Image */}
                                                <img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>   {/* End section overlay */}
                            </div>    {/* End content wrapper */}
                        </div>     {/* End container */}
                    </section>	{/* END BOX CONTENT */}
                    {/* STATISTIC-1
			============================================= */}
                    <div id="statistic-1" className="py-100 statistic-section division">
                        <div className="container">
                            {/* STATISTIC-1 WRAPPER */}
                            <div className="statistic-1-wrapper">
                                <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
                                    {/* STATISTIC BLOCK #1 */}
                                    <div className="col">
                                        <div id="sb-1-1" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number"><CounterUp end={89} />k</h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Porta justo integer and velna vitae auctor</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #1 */}
                                    {/* STATISTIC BLOCK #2 */}
                                    <div className="col">
                                        <div id="sb-1-2" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number"><CounterUp end={76} />%</h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Ligula magna suscipit vitae and rutrum</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #2 */}
                                    {/* STATISTIC BLOCK #3 */}
                                    <div className="col">
                                        <div id="sb-1-3" className="wow fadeInUp">
                                            <div className="statistic-block">
                                                {/* Digit */}
                                                <div className="statistic-block-digit text-center">
                                                    <h2 className="s-46 statistic-number">
                                                        <CounterUp end={4} />.<CounterUp end={93} />
                                                    </h2>
                                                </div>
                                                {/* Text */}
                                                <div className="statistic-block-txt color--grey">
                                                    <p className="p-md">Sagittis congue augue egestas an egestas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>	{/* END STATISTIC BLOCK #3 */}
                                </div>  {/* End row */}
                            </div>	{/* END STATISTIC-1 WRAPPER */}
                        </div>	 {/* End container */}
                    </div>	 {/* END STATISTIC-1 */}
                    {/* DIVIDER LINE */}
                    <hr className="divider" />
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-02 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="/images/img-02.png" alt="content-image" />
                                    </div>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="col-md-6">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* Section ID */}
                                        <span className="section-id">Easy Integration</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">Plug your essential tools in few clicks</h2>
                                        {/* List */}
                                        <ul className="simple-list">
                                            <li className="list-item">
                                                <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis
                                                    sodales magna undo aoreet primis
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="mb-0">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                                                    ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien
                                                    a blandit
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-04 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-last order-md-2">
                                    <div className="txt-block left-column wow fadeInRight">
                                        {/* CONTENT BOX #1 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">1</div>
                                                <span className="cbox-2-line" />
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">Simple, Secure &amp; Intuitive</h5>
                                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                                    sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                                    quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #1 */}
                                        {/* CONTENT BOX #2 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">2</div>
                                                <span className="cbox-2-line" />
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">Weekly Email Reports</h5>
                                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus
                                                    sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula
                                                    quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #2 */}
                                        {/* CONTENT BOX #3 */}
                                        <div className="cbox-2 process-step">
                                            {/* Icon */}
                                            <div className="ico-wrap">
                                                <div className="cbox-2-ico bg--theme color--white">3</div>
                                            </div>
                                            {/* Text */}
                                            <div className="cbox-2-txt">
                                                <h5 className="s-22 w-700">No Personal Data Collected</h5>
                                                <p className="mb-0">Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                                                    lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum n
                                                    eque ligula quaerat
                                                </p>
                                            </div>
                                        </div>	{/* END CONTENT BOX #3 */}
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 order-first order-md-2">
                                    <div className="img-block wow fadeInLeft">
                                        <img className="img-fluid" src="/images/tablet-01.png" alt="content-image" />
                                    </div>
                                </div>
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* TEXT CONTENT
			============================================= */}
                    <section className="pt-100 ct-02 content-section division">
                        <div className="container">
                            {/* SECTION CONTENT (ROW) */}
                            <div className="row d-flex align-items-center">
                                {/* IMAGE BLOCK */}
                                <div className="col-md-6">
                                    <div className="img-block left-column wow fadeInRight">
                                        <img className="img-fluid" src="/images/img-08.png" alt="content-image" />
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
                                        {/* Small Title */}
                                        <h5 className="s-24 w-700">Get more done in less time</h5>
                                        {/* CONTENT BOX #1 */}
                                        <div className="cbox-1 ico-15">
                                            <div className="ico-wrap color--theme">
                                                <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                            </div>
                                            <div className="cbox-1-txt">
                                                <p>Magna dolor luctus at egestas sapien</p>
                                            </div>
                                        </div>
                                        {/* CONTENT BOX #2 */}
                                        <div className="cbox-1 ico-15">
                                            <div className="ico-wrap color--theme">
                                                <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                            </div>
                                            <div className="cbox-1-txt">
                                                <p>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien
                                                    turpis ultrice auctor congue varius magnis
                                                </p>
                                            </div>
                                        </div>
                                        {/* CONTENT BOX #3 */}
                                        <div className="cbox-1 ico-15">
                                            <div className="ico-wrap color--theme">
                                                <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                            </div>
                                            <div className="cbox-1-txt">
                                                <p className="mb-0">Volute turpis dolores and sagittis congue</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}
                            </div>	{/* END SECTION CONTENT (ROW) */}
                        </div>	   {/* End container */}
                    </section>	{/* END TEXT CONTENT */}
                    {/* INTEGRATIONS-1
			============================================= */}
                    <section id="integrations-1" className="pt-100 integrations-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">All Necessary Tools</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* INTEGRATIONS-1 WRAPPER */}
                            <div className="integrations-1-wrapper">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">
                                    {/* TOOL #1 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-1 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Zapier</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #1 */}
                                    {/* TOOL #2 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-2 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-2.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Google Analytics</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #2 */}
                                    {/* TOOL #3 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-3 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-3.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Amplitude</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #3 */}
                                    {/* TOOL #4 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-4 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-4.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Hubspot</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #4 */}
                                    {/* TOOL #5 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-5 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">MailChimp</h6>
                                                <p className="p-sm">Import data</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #5 */}
                                    {/* TOOL #6 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-6 r-12 mb-30 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-6.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Slack</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #6 */}
                                    {/* TOOL #7 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-7 r-12 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-7.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Dropbox</h6>
                                                <p className="p-sm">Import data</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #7 */}
                                    {/* TOOL #8 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-8 r-12 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-8.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Trello</h6>
                                                <p className="p-sm">Share findings</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #8 */}
                                    {/* TOOL #9 */}
                                    <div className="col">
                                        <Link href="#" className="in_tool it-9 r-12 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src="/images/png_icons/tool-9.png" alt="brand-logo" />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">Google Drive</h6>
                                                <p className="p-sm">Import data</p>
                                            </div>
                                        </Link>
                                    </div>	{/* END FEATURE BOX #9 */}
                                </div>
                            </div>	{/* END INTEGRATIONS-1 WRAPPER */}
                            {/* MORE BUTTON */}
                            <div className="row">
                                <div className="col">
                                    <div className="more-btn text-center mt-60 wow fadeInUp">
                                        <Link href="/integrations" className="btn btn--tra-black hover--theme">View all integrations</Link>
                                    </div>
                                </div>
                            </div>
                        </div>     {/* End container */}
                    </section>	{/* END INTEGRATIONS-1 */}
                    {/* FEATURES-5
			============================================= */}
                    <section id="features-5" className="pt-100 features-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Track the progress towards objectives with key results</h2>
                                        {/* Text */}
                                        <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURES-5 WRAPPER */}
                            <div className="fbox-wrapper text-center">
                                <div className="row d-flex align-items-center">
                                    {/* FEATURE BOX #1 */}
                                    <div className="col-md-6">
                                        <div className="fbox-5 fb-1 gr--smoke r-16 wow fadeInUp">
                                            {/* Text */}
                                            <div className="fbox-txt order-last order-md-2">
                                                <h5 className="s-26 w-700">Marketing Integrations</h5>
                                                <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                            </div>
                                            {/* Image */}
                                            <div className="fbox-5-img order-first order-md-2">
                                                <img className="img-fluid light-theme-img" src="/images/f_06.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_06_dark.png" alt="feature-image" />
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #1 */}
                                    {/* FEATURE BOX #2 */}
                                    <div className="col-md-6">
                                        <div className="fbox-5 fb-2 gr--smoke r-16 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-5-img">
                                                <img className="img-fluid light-theme-img" src="/images/f_04.png" alt="feature-image" />
                                                <img className="img-fluid dark-theme-img" src="/images/f_04_dark.png" alt="feature-image" />
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h5 className="s-26 w-700">Productivity Focused</h5>
                                                <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
                                            </div>
                                        </div>
                                    </div>	{/* END FEATURE BOX #2 */}
                                </div>  {/* End row */}
                            </div>	{/* END FEATURES-5 WRAPPER */}
                        </div>     {/* End container */}
                    </section>	{/* END FEATURES-5 */}
                    {/* FAQs-3
			============================================= */}
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
                    </section>	{/* END FAQs-3 */}
                    {/* BANNER-13
			============================================= */}
                    <section id="banner-13" className="pt-100 banner-section">
                        <div className="container">
                            {/* BANNER-13 WRAPPER */}
                            <div className="banner-13-wrapper bg--05 bg--scroll r-16 block-shadow">
                                <div className="banner-overlay">
                                    <div className="row d-flex align-items-center">
                                        {/* BANNER-5 TEXT */}
                                        <div className="col-md-7">
                                            <div className="banner-13-txt color--white">
                                                {/* Title */}
                                                <h2 className="s-46 w-700">Getting started with Martex today!</h2>
                                                {/* Text */}
                                                <p className="p-lg">Congue laoreet turpis neque auctor turpis vitae dolor a luctus
                                                    placerat and magna ligula cursus
                                                </p>
                                                {/* Button */}
                                                <Link href="/signup-1" className="btn r-04 btn--theme hover--tra-white">Get srarted - it's free</Link>
                                            </div>
                                        </div>	{/* END BANNER-13 TEXT */}
                                        {/* BANNER-13 IMAGE */}
                                        <div className="col-md-5">
                                            <div className="banner-13-img text-center">
                                                <img className="img-fluid" src="/images/img-04.png" alt="banner-image" />
                                            </div>
                                        </div>
                                    </div>   {/* End row */}
                                </div>   {/* End banner overlay */}
                            </div>    {/* END BANNER-13 WRAPPER */}
                        </div>     {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}