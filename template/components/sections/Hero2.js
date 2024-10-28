

export default function Hero2() {
    return (
        <>
            <section id="hero-2" className="bg--scroll hero-section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* HERO IMAGE */}
                        <div className="col-md-6 order-last order-md-2">
                            <div className="hero-2-img wow fadeInRight">
                                <img className="img-fluid" src="/images/hero-2-img.png" alt="hero-image" />
                            </div>
                        </div>
                        {/* HERO TEXT */}
                        <div className="col-md-6 order-first order-md-2">
                            <div className="hero-2-txt wow fadeInLeft">
                                {/* Title */}
                                <h2 className="s-56 w-700 color--black">Realize your digital potential with Martex</h2>
                                {/* Text */}
                                <p className="p-lg">Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque
                                    auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum
                                </p>
                                {/* HERO DIGITS */}
                                <div className="hero-digits">
                                    {/* DIGIT BLOCK #1 */}
                                    <div id="hd-1-1" className="wow fadeInUp">
                                        <div className="hero-digits-block">
                                            {/* Digit */}
                                            <div className="block-digit">
                                                <h2 className="s-46 statistic-number color--black">2<span>x</span></h2>
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
                                                <h2 className="s-46 statistic-number color--black">63<span>%</span></h2>
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
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
