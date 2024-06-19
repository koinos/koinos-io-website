import { useRef, useEffect } from "react";
import { animate } from "../utils/animate";
import Link from "next/link";

export default function WhereToGetKOIN() {
    const sectionRef = useRef(null);

    useEffect(() => {
        console.log("sectionRef: ", sectionRef.current);
        if (sectionRef.current) {
          animate(sectionRef.current);
        }
      }, [sectionRef]);

    return (
        <>
            <section id="integrations-1" className="pt-100 integrations-section" ref={sectionRef}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">Where to get KOIN</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Find Koinos on Exchanges Across the Globe</p>
                            </div>
                        </div>
                    </div>
                    {/* INTEGRATIONS-1 WRAPPER */}
                    <div className="integrations-1-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">
                            {/* TOOL #1 */}
                            <div className="col">
                                <Link href="https://www.mexc.com/exchange/KOIN_USDT" className="in_tool it-1 r-12 mb-30 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/mexc-logo.png" alt="MEXC Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">MEXC</h6>
                                        <p className="p-sm">CEX</p>
                                    </div>
                                </Link>
                            </div>	{/* END FEATURE BOX #1 */}
                            {/* TOOL #2 */}
                            <div className="col">
                                <Link href="https://www.coinstore.com/#/spot/KOINUSDT" className="in_tool it-2 r-12 mb-30 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/coinstore-logo.png" alt="Coinstore Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">Coinstore</h6>
                                        <p className="p-sm">CEX</p>
                                    </div>
                                </Link>
                            </div>	{/* END FEATURE BOX #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <Link href="https://www.biconomy.com/exchange/KOIN_USDT" className="in_tool it-3 r-12 mb-30 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/biconomy-logo.png" alt="Biconomy Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">Biconomy</h6>
                                        <p className="p-sm">CEX</p>
                                    </div>
                                </Link>
                            </div>	{/* END FEATURE BOX #3 */}
                            {/* TOOL #4 */}
                            <div className="col">
                                <Link href="https://exchange.lcx.com/trade/KOIN-EUR" className="in_tool it-4 r-12 mb-30 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/lcx-logo.png" alt="LCX Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">LCX</h6>
                                        <p className="p-sm">CEX</p>
                                    </div>
                                </Link>
                            </div>	{/* END FEATURE BOX #4 */}
                            {/* TOOL #5 */}
                            <div className="col">
                                <Link href="https://app.koindx.com/swap" className="in_tool it-5 r-12 mb-30 wow fadeInUp">
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/koindx-logo.png" alt="KoinDX Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">KoinDX</h6>
                                        <p className="p-sm">DEX</p>
                                    </div>
                                </Link>
                            </div>	{/* END FEATURE BOX #5 */}
                        </div>
                    </div>	{/* END INTEGRATIONS-1 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
