

export default function TokenAllocation() {
    return (
        <>
            <section className="pt-100 ct-01 content-section division">
                <div className="container">
                    {/* SECTION CONTENT (ROW) */}
                    <div className="row d-flex align-items-center">
                        {/* TEXT BLOCK */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                                {/* Section ID */}
                                <span className="section-id">Token Allocation</span>
                                {/* Title */}
                                <h2 className="s-46 w-700">Fair Launched</h2>
                                {/* Text */}
                                <p>Koinos' initial supply was created through a one year Proof-of-Work mining contract on the Ethereum blockchain. Coins remain claimable on Koinos' main net for all participants.
                                </p>
                                {/* CONTENT BOX #1 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>Fair Launch</p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #2 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p>No Locked Coins
                                        </p>
                                    </div>
                                </div>
                                {/* CONTENT BOX #3 */}
                                <div className="cbox-1 ico-15">
                                    <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                                    </div>
                                    <div className="cbox-1-txt">
                                        <p className="mb-0">100% Publicly Allocated</p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* END TEXT BLOCK */}
                        {/* IMAGE BLOCK */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                                <img className="img-fluid" src="/images/tokenomics-dk.png" alt="Token Allocation" />
                            </div>
                        </div>
                    </div> {/* END SECTION CONTENT (ROW) */}
                </div> {/* End container */}
            </section>
        </>
    )
}
