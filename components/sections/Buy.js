import Link from "next/link";
import { useBuyData } from "../../store/buyStore";


export default function Buy() {
    const title = "Where to get KOIN";
    const buy = useBuyData();

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
