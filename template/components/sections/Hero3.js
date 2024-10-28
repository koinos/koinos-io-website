

export default function Hero3() {
    return (
        <>
            <section id="hero-3" className="bg--fixed hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO TEXT */}
                        <div className="col-md-6">
                            <div className="hero-3-txt color--white wow fadeInRight">
                                {/* Title */}
                                <h2 className="s-60 w-700">Increase your website traffic with Martex</h2>
                                {/* Text */}
                                <p className="p-lg">Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute
                                    ligula and aliquet tortor
                                </p>
                                {/* HERO DIGITS */}
                                <div className="hero-digits">
                                    {/* DIGIT BLOCK #1 */}
                                    <div id="hd-1-1" className="wow fadeInUp">
                                        <div className="hero-digits-block">
                                            {/* Digit */}
                                            <div className="block-digit">
                                                <h2 className="s-46 statistic-number">3<span>x</span></h2>
                                            </div>
                                            {/* Text */}
                                            <div className="block-txt">
                                                <p className="p-sm">Tempor sapien and quaerat placerat</p>
                                            </div>
                                        </div>
                                    </div>	{/* END DIGIT BLOCK #1 */}
                                    {/* DIGIT BLOCK #2 */}
                                    <div id="hd-1-2" className="wow fadeInUp">
                                        <div className="hero-digits-block">
                                            {/* Digit */}
                                            <div className="block-digit">
                                                <h2 className="s-46 statistic-number">29<span>%</span></h2>
                                            </div>
                                            {/* Text */}
                                            <div className="block-txt">
                                                <p className="p-sm">Ligula suscipit vitae and rutrum turpis</p>
                                            </div>
                                        </div>
                                    </div>	{/* END DIGIT BLOCK #2 */}
                                </div>	{/* END HERO DIGITS */}
                            </div>
                        </div>	{/* END HERO TEXT */}
                        {/* HERO IMAGE */}
                        <div className="col-md-6">
                            <div className="hero-3-img wow fadeInLeft">
                                <img className="img-fluid" src="/images/tablet-01.png" alt="hero-image" />
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
