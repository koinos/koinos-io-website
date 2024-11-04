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
                    <section id="pricing-3" className="gr--whitesmoke inner-page-hero pb-60 pricing-section">
                        <div className="container">
                            {/* SECTION TITLE */}
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8">
                                    <div className="section-title text-center mb-60">
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
                                            <p className="color--theme">Save up to 25% with yearly billing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END SECTION TITLE */}
                            {/* PRICING TABLES */}
                            <div className="pricing-3-wrapper text-center">
                                <div className="row row-cols-1 row-cols-md-3">
                                    {/* FREE PLAN */}
                                    <div className="col">
                                        <div id="pt-3-1" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h4 className="s-32">Free</h4>
                                                {/* Text */}
                                                <p className="color--grey">For anyone getting started with smaller projects.</p>
                                                {/* Price */}
                                                <div className="price mt-25">
                                                    <sup className="color--black">$</sup>
                                                    <span className="color--black">0</span>
                                                    <sup className="validity color--grey">forever</sup>
                                                </div>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* BUTTON */}
                                            <Link href="#" className="pt-btn btn btn--theme hover--theme">Get srarted - it's free</Link>
                                            <p className="p-sm btn-txt color--grey">No credit card required</p>
                                        </div>
                                    </div>	{/* END FREE PLAN */}
                                    {/* PLUS PLAN */}
                                    <div className="col">
                                        <div id="pt-3-2" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h4 className="s-32">Plus</h4>
                                                {/* Text */}
                                                <p className="color--grey">For personal use or small teams with simple workflows.</p>
                                                {/* Price */}
                                                <div className="price mt-25">
                                                    {/* Monthly Price */}

                                                    {isPricing ? <div className="price1">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">35</span>
                                                        <sup className="coins color--black">99</sup>
                                                        <sup className="validity color--grey">per year</sup>
                                                    </div> : <div className="price2">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">3</span>
                                                        <sup className="coins color--black">99</sup>
                                                        <sup className="validity color--grey">per month</sup>
                                                    </div>}

                                                    {/* Yearly Price */}

                                                </div>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* BUTTON */}
                                            <Link href="#" className="pt-btn btn btn--theme hover--theme">Start 14-day trial</Link>
                                            <p className="p-sm btn-txt">7-Day Money Back Guarantee</p>
                                        </div>
                                    </div>	{/* END PLUS PLAN */}
                                    {/* PRO PLAN */}
                                    <div className="col">
                                        <div id="pt-3-3" className="p-table pricing-3-table bg--white-100 block-shadow r-12 wow fadeInUp">
                                            {/* TABLE HEADER */}
                                            <div className="pricing-table-header">
                                                {/* Title */}
                                                <h4 className="s-32">Pro</h4>
                                                {/* Text */}
                                                <p className="color--grey">For growing teams that need more services and flexibility.</p>
                                                {/* Price */}
                                                <div className="price mt-25">
                                                    {/* Monthly Price */}
                                                    {isPricing ? <div className="price1">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">62</span>
                                                        <sup className="coins color--black">99</sup>
                                                        <sup className="validity color--grey">per year</sup>
                                                    </div> : <div className="price2">
                                                        <sup className="color--black">$</sup>
                                                        <span className="color--black">6</span>
                                                        <sup className="coins color--black">99</sup>
                                                        <sup className="validity color--grey">per month</sup>
                                                    </div>}

                                                    {/* Yearly Price */}

                                                </div>
                                            </div>	{/* END TABLE HEADER */}
                                            {/* BUTTON */}
                                            <Link href="#" className="pt-btn btn btn--theme hover--theme">Upgrade to PRO</Link>
                                            <p className="p-sm btn-txt">7-Day Money Back Guarantee</p>
                                        </div>
                                    </div>	{/* END PRO PLAN */}
                                </div>
                            </div>	{/* PRICING TABLES */}
                        </div>	   {/* End container */}
                    </section>	{/* END PRICING-3 */}
                    {/* PRICING COMPARE
			============================================= */}
                    <section id="comp-table" className="pb-60 pricing-section division">
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
                    {/* BRANDS-1
			============================================= */}
                    <div id="brands-1" className="bg--white-400 py-80 brands-section">
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
                    {/* FAQs-3
			============================================= */}
                    <section id="faqs-3" className="pt-100 faqs-section">
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