


import Link from "next/link"
import { useState } from "react"
export default function Pricing3() {
    const [isPricing, setPricing] = useState(false)
    const handlePricing = () => setPricing(!isPricing)
    return (
        <>
            <section id="pricing-3" className="gr--whitesmoke pt-100 pricing-section">
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
                    {/* PRICING NOTICE TEXT */}
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="pricing-notice wow fadeInUp">
                                {/* Text */}
                                <p className="mb-0">The above prices do not include applicable taxes based on your billing
                                    address. The final price will be displayed on the checkout page, before the payment
                                    is completed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
