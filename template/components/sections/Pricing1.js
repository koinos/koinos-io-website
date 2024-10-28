

import Link from "next/link"
import { useState } from "react"
export default function Pricing1() {
    const [isPricing, setPricing] = useState(false)
    const handlePricing = () => setPricing(!isPricing)
    return (
        <>
            <section id="pricing-1" className="gr--whitesmoke py-100 pricing-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Simple, Flexible Pricing</h2>
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

                                            {/* Yearly Price */}

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

                                            {/* Yearly Price */}

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
                    {/* PRICING NOTICE TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="pricing-notice wow fadeInUp">
                                {/* Text */}
                                <p>The above prices do not include applicable taxes based on your billing address. The final
                                    price will be displayed on the checkout page, before the payment is completed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
