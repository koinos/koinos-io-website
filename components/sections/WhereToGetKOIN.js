import Link from "next/link";
import { useExchangeStore } from "@/store/exchangeStore";

export default function WhereToGetKOIN() {
    const { exchanges } = useExchangeStore();

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
                            {exchanges.map((exchange, index) => (
                                <div key={index} className="col">
                                    <Link href={exchange.url} className="in_tool it-1 r-12 mb-30 wow" data-aos='fade-up'>
                                        {/* Icon */}
                                        <div className="in_tool-logo-wrap">
                                            <div className="in_tool-logo ico-60">
                                                <img className="img-fluid" src={exchange.icon} alt={`${exchange.name} Logo`} />
                                            </div>
                                        </div>
                                        {/* Text */}
                                        <div className="in_tool-txt">
                                            <h6 className="s-20 w-700">{exchange.name}</h6>
                                            <p className="p-sm">{exchange.type}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>	
                </div> 
            </section>
        </>
    )
}