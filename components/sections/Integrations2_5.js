

import Link from "next/link"
export default function Integrations2_5() {

    const title = "An ever-evolving ecosystem";
    const subtle = "Revolutionizing Web3: Pioneering Applications That Redefine Blockchain Boundaries";
    const dapps = [
        {
            name: 'Koindx',
            description: 'Dex/Swap',
            icon: '/images/dapps/koindx.png',
            url: 'https://koindx.com/'
        },
        {
            name: 'KAP',
            description: 'Account protocol',
            icon: '/images/dapps/kap.png',
            url: 'https://kap.domains/'
        },
        {
            name: 'Kollection',
            description: 'NFT Marketplace',
            icon: '/images/dapps/kollection.png',
            url: 'https://kollection.app/'
        },
        {
            name: 'Kanvas',
            description: 'Canvas board',
            icon: '/images/dapps/kanvas.png',
            url: 'https://kanvas-app.com/'
        },
        {
            name: 'Koiner',
            description: 'Explorer',
            icon: '/images/dapps/koiner.png',
            url: 'https://koiner.app/'
        },
        {
            name: 'Fogata',
            description: 'Mining pool',
            icon: '/images/dapps/fogata.png',
            url: 'https://fogata.io/'
        },
        {
            name: 'Koincity',
            description: 'Launchpad',
            icon: '/images/dapps/koincity.png',
            url: 'https://koincity.com/'
        }

    ];

    return (
        <>
            <section id="integrations-2" className="pt-100 integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className="integrations-2-wrapper bg--white-400 r-12 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-60">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">{title}</h2>
                                    {/* Text */}
                                    <p className="s-21 color--grey">{subtle}</p>
                                </div>
                            </div>
                        </div>
                        {/* TOOLS ROW */}
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">

                            {
                                dapps.map(dapp =>
                                    <div className="col mt-4">
                                        <Link href={dapp.url} className="in_tool it-1 r-12 wow fadeInUp">
                                            {/* Logo */}
                                            <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                                <img className="img-fluid" src={dapp.icon} alt={`${dapp.name}-logo`} />
                                            </div>
                                            {/* Title */}
                                            <h6 className="s-17 w-700">{dapp.name}</h6>
                                        </Link>
                                    </div>
                                )
                            }

                        </div>	{/* END TOOLS ROW */}

                        {/* MORE BUTTON 
                        <div className="row">
                            <div className="col">
                                <div className="more-btn text-center mt-60 wow fadeInUp">
                                    <Link href="/integrations" className="btn btn--tra-grey hover--theme">View all integrations</Link>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>	{/* END INTEGRATIONS-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
