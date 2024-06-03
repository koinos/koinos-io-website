import Link from "next/link";


export default function Wallets() {

    const title = "How to get Koin";
    const subtle = "You can receive it from your peers, or buy it from exchanges ";

    const wallets = [
        {
            name: "MEXC",
            // description: "this is a description",
            icon: "/images/buy/round/mexc-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.mexc.com/"
        },
        {
            name: "Coinstore",
            // description: "this is a description",
            icon: "/images/buy/round/coinstore-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.coinstore.com/"
        },
        {
            name: "Biconomy",
            // description: "this is a description",
            icon: "/images/buy/round/biconomy-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.biconomy.com/"
        },
        {
            name: "LCX",
            // description: "this is a description",
            icon: "/images/buy/round/lcx-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.lcx.com/"
        },
        {
            name: "Uniswap",
            // description: "this is a description",
            icon: "/images/buy/round/uniswap-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.uniswap.com/"
        },
        {
            name: "KoinDX",
            // description: "this is a description",
            icon: "/images/buy/round/koindx-logo.png",
            chrome: false,
            android: false,
            ios: false,
            url: "https://www.koindx.com/"
        },
    ]

    return (
        <>
            <section id="wallets" className="py-100 features-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">{title}</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">{subtle}</p>
                            </div>
                        </div>
                    </div>
                    {/* FEATURES-2 WRAPPER */}
                    <div className="fbox-wrapper text-center">
                        <div className="row row-cols-1 row-cols-md-3">

                            {
                                wallets.map(wallet =>
                                    <div key={wallet.name} className="col">
                                        <div className="fbox-2 fb-1 wow fadeInUp">
                                            {/* Image */}
                                            <div className="fbox-img gr--whitesmoke h-175">
                                                <Link href={wallet.url} target="_blank">
                                                    <img className="img-fluid light-theme-img" src={wallet.icon} alt="feature-image" />
                                                    <img className="img-fluid dark-theme-img" src={wallet.icon} alt="feature-image" />
                                                </Link>
                                            </div>
                                            {/* Text */}
                                            <div className="fbox-txt">

                                                <h6 className="s-22 w-700">{wallet.name}</h6>
                                                <p>{wallet.description}</p>

                                                <ul className="d-flex justify-content-center gap-2">
                                                    {
                                                        wallet.chrome &&
                                                        <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-chrome fa-lg"></i></Link></li>  
                                                    }
                                                    {
                                                        wallet.ios &&
                                                        <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-apple fa-lg"></i></Link></li>  
                                                    }
                                                    {
                                                        wallet.android &&
                                                        <li><Link href={wallet.url} target="_blank"><i className="fa-brands fa-android fa-lg"></i></Link></li>  
                                                    }
                                                </ul>

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
