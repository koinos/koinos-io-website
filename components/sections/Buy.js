import Link from "next/link";


export default function Buy() {

    const title = "Where to get KOIN";

    const buy = [
        {
            name: "Chainge",
            icon: "/images/exchanges/chainge-mark.svg",
            url: "https://dapp.chainge.finance/?fromChain=ETH&toChain=ETH&fromToken=USDT&toToken=KOIN"
        },
        {
            name: "Uniswap",
            icon: "/images/exchanges/uniswap-mark.svg",
            url: "https://www.mexc.com/exchange/KOIN_USDThttps://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae"
        },
        {
            name: "MEXC",
            icon: "/images/buy/mexc-logo.png",
            url: "https://www.mexc.com/exchange/KOIN_USDT"
        },
        {
            name: "Coinstore",
            icon: "/images/buy/coinstore-logo.png",
            url: "https://www.coinstore.com/#/spot/KOINUSDT"
        },
        {
            name: "Biconomy",
            icon: "/images/buy/biconomy-logo.png",
            url: "https://www.biconomy.com/exchange/KOIN_USDT"
        },
        {
            name: "LCX",
            icon: "/images/buy/lcx-logo.png",
            url: "https://exchange.lcx.com/trade/KOIN-EUR"
        },
        {
            name: "KoinDX",
            icon: "/images/buy/koindx-logo.png",
            url: "https://app.koindx.com/swap"
        },
    ]

    return (
        <>
            <section id="buy" className="py-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">{title}</h2>
                                {/* Text */}
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">
                            {
                                buy.map(exchange =>
                                    <div key={exchange.name} className="col">
                                        <div className="fbox-2 fb-1 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <Link href={exchange.url} target="_blank">
                                                    <img className="img-fluid light-theme-img" src={exchange.icon} alt="feature-image" />
                                                    <img className="img-fluid dark-theme-img" src={exchange.icon} alt="feature-image" />
                                                </Link>
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">{exchange.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
