import { useRef, useEffect } from "react";
import Link from "next/link";

export default function WhereToGetKOIN() {

    return (
        <>
            <section id="integrations-1" className="pt-100 integrations-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                <h2 className="s-50 w-700">Where to get KOIN</h2>
                                <p className="s-21 color--grey">Find Koinos on Exchanges Across the Globe</p>
                            </div>
                        </div>
                    </div>
                    <div className="integrations-1-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 rows-2">
                            <div className="col">
                                <Link href="https://dapp.chainge.finance/?fromChain=ETH&toChain=ETH&fromToken=USDT&toToken=KOIN" className="in_tool it-1 r-12 mb-30 wow" data-aos='fade-up'>
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/exchanges/chainge-logo.png" alt="Chainge Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">Chainge</h6>
                                        <p className="p-sm">Bridge</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link href="https://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae" className="in_tool it-1 r-12 mb-30 wow"  data-aos='fade-up'>
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/exchanges/uniswap-logo.png" alt="Uniswap Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">Uniswap</h6>
                                        <p className="p-sm">DEX</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link href="https://www.mexc.com/exchange/KOIN_USDT" className="in_tool it-1 r-12 mb-30 wow"  data-aos='fade-up'>
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
                            </div>
                            <div className="col">
                                <Link href="https://bingx.com/en/spot/KOINUSDT/" className="in_tool it-5 r-12 mb-30 wow"  data-aos='fade-up'>
                                    {/* Icon */}
                                    <div className="in_tool-logo-wrap">
                                        <div className="in_tool-logo ico-60">
                                            <img className="img-fluid" src="/images/buy/bingx-logo.png" alt="BingX Logo" />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="in_tool-txt">
                                        <h6 className="s-20 w-700">BingX</h6>
                                        <p className="p-sm">CEX</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link href="https://www.biconomy.com/exchange/KOIN_USDT" className="in_tool it-3 r-12 mb-30 wow"  data-aos='fade-up'>
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
                            </div>
                            <div className="col">
                                <Link href="https://www.coinstore.com/#/spot/KOINUSDT" className="in_tool it-2 r-12 mb-30 wow"  data-aos='fade-up'>
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
                            </div>
                            <div className="col">
                                <Link href="https://exchange.lcx.com/trade/KOIN-EUR" className="in_tool it-4 r-12 mb-30 wow"  data-aos='fade-up'>
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
                            </div>	
                            <div className="col">
                                <Link href="https://app.koindx.com/swap" className="in_tool it-5 r-12 mb-30 wow"  data-aos='fade-up'>
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
                            </div>	
                        </div>
                    </div>	
                </div> 
            </section>
        </>
    )
}
