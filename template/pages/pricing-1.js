import Layout from "@/components/layout/Layout"
import BrandSlider2 from "@/components/slider/BrandSlider2"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [isPricing, setPricing] = useState(false)
    const handlePricing = () => setPricing(!isPricing)
    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="pricing-1" className="gr--whitesmoke pb-40 inner-page-hero pricing-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Simple, Flexible Pricing</h2>
                                        {/* TOGGLE BUTTON */}
                                        <div className="toggle-btn ext-toggle-btn toggle-btn-md mt-30">
                                            <span className="toggler-txt">Billed monthly</span>
                                            <label className="switch-wrap">
                                                <input type="checkbox" id="checbox" onClick={handlePricing} />
                                                <span className="switcher bg--grey switcher--theme">
                                                    <span className="show-annual" />
                                                    <span className="show-monthly" />
                                                </span>
                                            </label>
                                            <span className="toggler-txt">Billed yearly</span>
                                            {/* Text */}
                                            <p className="color--theme">Save up to 35% with yearly billing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END SECTION TITLE */}
                            {/* PRICING TABLES */}
                            <div className="pricing-1-wrapper">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* STARTER PLAN */}
                                    <div className="col">
                                        <div id="pt-1-1" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h5 className="s-24 w-700">Starter</h5>
                                                {/* Price */}
                                                <div className="price">
                                                    <sup className="color--black">$</sup>
                                                    <span className="color--black">0</span>
                                                    <sup className="validity color--grey">/ forever</sup>
                                                    <p className="color--grey">For professionals getting started with smaller projects.</p>
                                                </div>
                                                {/* Button */}
                                                <Link href="#" className="pt-btn btn r-04 btn--theme hover--theme">Get srarted - it's free</Link>
                                                <p className="p-sm btn-txt text-center color--grey">No credit card required</p>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* PRICING FEATURES */}
                                            <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                                <li><p><span className="flaticon-check" /> 2 free projects</p></li>
                                                <li><p><span className="flaticon-check" /> 1 GB of cloud storage</p></li>
                                                <li><p><span className="flaticon-check" /> For personal use</p></li>
                                                <li className="disabled-option"><p><span className="flaticon-check" /> Weekly data backup</p></li>
                                                <li className="disabled-option"><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
                                                <li><p><span className="flaticon-check" /> 12/5 email support</p></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END STARTER PLAN */}
                                    {/* BASIC PLAN */}
                                    <div className="col">
                                        <div id="pt-1-2" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h5 className="s-24">Basic</h5>
                                                {/* Price */}
                                                <div className="price">
                                                    {/* Monthly Price */}
                                                    {isPricing ? <div className="price1">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">142.75</span>
                                                        <sup className="validity color--grey">/ yr</sup>
                                                        {/* Discount Badge */}
                                                        <div className="pricing-discount bg--yellow-400 color--black r-36">
                                                            <h6 className="s-17">Save 30%</h6>
                                                        </div>
                                                    </div> : <div className="price2">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">16.99</span>
                                                        <sup className="validity color--grey">/ mo</sup>
                                                    </div>}
                                                    {/* Text */}
                                                    <p className="color--grey">For personal use or small teams with simple workflows.</p>
                                                </div>	{/* End Price */}
                                                {/* Button */}
                                                <Link href="#" className="pt-btn btn r-04 btn--theme hover--theme">Start 14-day trial</Link>
                                                <p className="p-sm btn-txt text-center color--grey">7-Day Money Back Guarantee</p>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* PRICING FEATURES */}
                                            <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                                <li><p><span className="flaticon-check" /> Up to 250 projects</p></li>
                                                <li><p><span className="flaticon-check" /> 15 GB of Cloud Storage</p></li>
                                                <li><p><span className="flaticon-check" /> Shared team workspace</p></li>
                                                <li><p><span className="flaticon-check" /> Daily data backup</p></li>
                                                <li><p><span className="flaticon-check" /> No Ads. No trackers</p></li>
                                                <li><p><span className="flaticon-check" /> 12/7 email support</p></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END BASIC PLAN */}
                                    {/* ADVANCED PLAN */}
                                    <div className="col">
                                        <div id="pt-1-3" className="p-table pricing-1-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h5 className="s-24">Advanced</h5>
                                                {/* Price */}
                                                <div className="price">
                                                    {/* Monthly Price */}
                                                    {isPricing ? <div className="price1">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">194.99</span>
                                                        <sup className="validity color--grey">/ yr</sup>
                                                        {/* Discount Badge */}
                                                        <div className="pricing-discount bg--yellow-400 color--black r-36">
                                                            <h6 className="s-17">Save 35%</h6>
                                                        </div>
                                                    </div> : <div className="price2">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">24.99</span>
                                                        <sup className="validity color--grey">/ mo</sup>
                                                    </div>}
                                                    {/* Text */}
                                                    <p className="color--grey">For growing teams that need more services and flexibility.</p>
                                                </div>	{/* End Price */}
                                                {/* Button */}
                                                <Link href="#" className="pt-btn btn r-04 btn--theme hover--theme">Upgrade your plan</Link>
                                                <p className="p-sm btn-txt text-center color--grey">7-Day Money Back Guarantee</p>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* PRICING FEATURES */}
                                            <ul className="pricing-features color--black ico-10 ico--green mt-25">
                                                <li><p><span className="flaticon-check" /> Everything in Basic</p></li>
                                                <li><p><span className="flaticon-check" /> Private cloud hosting</p></li>
                                                <li><p><span className="flaticon-check" /> Custom security</p></li>
                                                <li><p><span className="flaticon-check" /> Advanced user permissions</p></li>
                                                <li><p><span className="flaticon-check" /> Multi-team management</p></li>
                                                <li><p><span className="flaticon-check" /> 24/7 Email Support</p></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END ADVANCED PLAN */}
                                </div>
                            </div>	{/* PRICING TABLES */}
                        </div>	   {/* End container */}
                    </section>	{/* END PRICING-1 */}
                    {/* BRANDS-1
			============================================= */}
                    <div id="brands-1" className="pb-100 brands-section">
                        <div className="container">
                            {/* BRANDS TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="brands-title mb-50">
                                        <h5 className="s-17">Trusted and used by over 3,400 companies</h5>
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
                    {/* PRICING COMPARE
			============================================= */}
                    <section id="comp-table" className="pt-100 pb-60 pricing-section division">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Compare Our Plans</h2>
                                        {/* Text */}
                                        <p className="p-xl">Complete list of features available in our pricing plans</p>
                                    </div>
                                </div>
                            </div>
                            {/* PRICING COMPARE */}
                            <div className="comp-table wow fadeInUp">
                                <div className="row">
                                    <div className="col">
                                        {/* Table */}
                                        <div className="table-responsive mb-50">
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: '34%' }} />
                                                        <th style={{ width: '22%' }}>Starter</th>
                                                        <th style={{ width: '22%' }}>Basic</th>
                                                        <th style={{ width: '22%' }}>Premium</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-start">Available Projects</th>
                                                        <td className="color--black">Up to 2</td>
                                                        <td className="color--black">Up to 250</td>
                                                        <td className="color--black">Unlimited</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Available Storage</th>
                                                        <td className="color--black">2Gb</td>
                                                        <td className="color--black">50Gb</td>
                                                        <td className="color--black">350Gb</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Private Cloud Hosting</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">User Permissions</th>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Direct Integrations</th>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Reusable Components</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Data Backup</th>
                                                        <td className="color--black">Weekly</td>
                                                        <td className="color--black">Daily</td>
                                                        <td className="color--black">Daily</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">No Ads. No Trackers</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Advanced Security</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Shared Team Workspace</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-start">Team Management</th>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-15 disabled-option"><span className="flaticon-cancel" /></td>
                                                        <td className="ico-20 color--theme"><span className="flaticon-check" /></td>
                                                    </tr>
                                                    <tr className="table-last-tr">
                                                        <th scope="row" className="text-start">Customer Support</th>
                                                        <td className="color--black">Limited</td>
                                                        <td className="color--black">Basic</td>
                                                        <td className="color--black">Priority</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>	{/* End Table */}
                                    </div>
                                </div>
                            </div>	{/* END PRICING COMPARE */}
                            {/* PRICING COMPARE PAYMENT */}
                            <div className="comp-table-payment">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* Payment Methods */}
                                    <div className="col col-lg-5">
                                        <div id="pbox-1" className="pbox mb-40 wow fadeInUp">
                                            {/* Title */}
                                            <h6 className="s-18 w-700">Accepted Payment Methods</h6>
                                            {/* Payment Icons */}
                                            <ul className="payment-icons ico-45 mt-25">
                                                <li><img src="/images/png_icons/visa.png" alt="payment-icon" /></li>
                                                <li><img src="/images/png_icons/am.png" alt="payment-icon" /></li>
                                                <li><img src="/images/png_icons/discover.png" alt="payment-icon" /></li>
                                                <li><img src="/images/png_icons/paypal.png" alt="payment-icon" /></li>
                                                <li><img src="/images/png_icons/jcb.png" alt="payment-icon" /></li>
                                                <li><img src="/images/png_icons/shopify.png" alt="payment-icon" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Payment Guarantee */}
                                    <div className="col col-lg-4">
                                        <div id="pbox-2" className="pbox mb-40 wow fadeInUp">
                                            {/* Title */}
                                            <h6 className="s-18 w-700">Money Back Guarantee</h6>
                                            {/* Text */}
                                            <p>Explore Martex Premium for 14 days. If it’s not a perfect fit, receive a full refund.</p>
                                        </div>
                                    </div>
                                    {/* Payment Encrypted */}
                                    <div className="col col-lg-3">
                                        <div id="pbox-3" className="pbox mb-40 wow fadeInUp">
                                            {/* Title */}
                                            <h6 className="s-18 w-700">SSL Encrypted Payment</h6>
                                            {/* Text */}
                                            <p>Your information is protected by 256-bit SSL encryption.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END PRICING COMPARE PAYMENT */}
                        </div>	   {/* End container */}
                    </section>	{/* END PRICING COMPARE */}
                    {/* FAQs-3
			============================================= */}
                    <section id="faqs-3" className="gr--whitesmoke pt-100 faqs-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-9">
                                    <div className="section-title mb-70">
                                        {/* Title */}
                                        <h2 className="s-52 w-700">Questions &amp; Answers</h2>
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
                                                <h5 className="s-22 w-700"><span>2.</span> How do I choose a plan?</h5>
                                                {/* Answer */}
                                                <p className="color--grey">An enim nullam tempor sapien gravida donec ipsum and enim
                                                    porta justo integer at velna vitae auctor integer congue undo magna laoreet
                                                    augue pretium purus pretium ligula
                                                </p>
                                            </div>
                                            {/* QUESTION #3 */}
                                            <div className="question mb-35 wow fadeInUp">
                                                {/* Question */}
                                                <h5 className="s-22 w-700"><span>3.</span> Do I need a credit card to sign up?</h5>
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
                                                <h5 className="s-22 w-700"><span>4.</span> Discounts for annual plans</h5>
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
                                                <h5 className="s-22 w-700"><span>5.</span> How to request a refund?</h5>
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
                    {/* BANNER-1
			============================================= */}
                    <section id="banner-1" className="pt-100 banner-section">
                        <div className="container">
                            {/* BANNER-1 WRAPPER */}
                            <div className="banner-1-wrapper r-16">
                                <div className="banner-overlay bg--05 bg--fixed">
                                    <div className="row">
                                        {/* BANNER-1 TEXT */}
                                        <div className="col">
                                            <div className="banner-1-txt color--white">
                                                {/* Title */}
                                                <h2 className="s-45 w-700">Give it a try, it's free!</h2>
                                                {/* Text */}
                                                <p className="p-xl">It only takes a few clicks to get started</p>
                                                {/* Button */}
                                                <Link href="/signup-1" className="btn r-04 btn--theme hover--tra-white">Get srarted - it's free
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