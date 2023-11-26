

import Link from "next/link"
export default function Integrations1_1() {

    const title = "An ever-evolving ecosystem";
    const subtle = "Revolutionizing Web3: Pioneering Applications That Redefine Blockchain Accessibility";
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
        },
        {
            name: 'BurnKoin',
            description: 'Mining Pool',
            icon: '/images/dapps/burnkoin.png',
            url: 'https://burnkoin.com/'
        },
        {
            name: 'Koinos Raffles',
            description: 'Gambling',
            icon: '/images/dapps/koinos-raffles.png',
            url: 'https://koinosraffles.io/'
        },
        {
            name: 'Koinos Blocks',
            description: 'Block Explorer',
            icon: '/images/dapps/koinosblocks.png',
            url: 'https://koinosblocks.com/'
        },
        {
            name: 'Koinosbox Polls',
            description: 'Poll dApp',
            icon: '/images/dapps/polls.png',
            url: 'https://koinosbox.com/polls'
        },
        {
            name: 'Atomic Swaps',
            description: 'P2P Swaps',
            icon: '/images/dapps/atomic-swap.png',
            url: 'https://swap.fbslo.net/'
        },
        {
            name: 'Space Striker',
            description: 'Space game',
            icon: '/images/dapps/space-striker.png',
            url: 'https://kanvas-app.com/space_striker/'
        },
        {
            name: 'Crypto Bulls',
            description: 'First-person shooter',
            icon: '/images/dapps/crypto-bulls.png',
            url: 'https://kryptobulls.io/'
        },
        {
            name: 'Serfdom & Sorcery',
            description: 'Game',
            icon: '/images/dapps/serfdorm-scorcery.png',
            url: 'https://twitter.com/SerfdomSorcery'
        },
        {
            name: 'Nicknames',
            description: 'Name resolving',
            icon: '/images/dapps/nicknames.png',
            url: 'https://koinosbox.com/nicknames'
        },
        {
            name: 'Koin Crew',
            description: 'Utilities',
            icon: '/images/dapps/koincrew.png',
            url: 'https://koincrew.com/'
        },
        {
            name: 'Koinos Garden',
            description: 'Investment DAO',
            icon: '/images/dapps/koinos-garden.png',
            url: 'https://dapp.koinosgarden.com/'
        },
    ];

    return (
        <>
            <section id="integrations-1" className="py-100 integrations-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <h2 className="s-50 w-700">{title}</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">{subtle}</p>
                            </div>
                        </div>
                    </div>
                    {/* INTEGRATIONS-1 WRAPPER */}
                    <div className="integrations-1-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2">

                            {
                                dapps
                                .sort(function(a, b) {
                                    return a.name - b.name;
                                })
                                .map(dapp =>
                                    <div key={dapp.name} className="col">
                                        <Link href={dapp.url} className="in_tool it-1 r-12 mb-30 wow fadeInUp" target="_blank">
                                            {/* Icon */}
                                            <div className="in_tool-logo-wrap">
                                                <div className="in_tool-logo ico-60">
                                                    <img className="img-fluid" src={dapp.icon} alt={`${dapp.name}-logo`} />
                                                </div>
                                            </div>
                                            {/* Text */}
                                            <div className="in_tool-txt">
                                                <h6 className="s-20 w-700">{dapp.name}</h6>
                                                <p className="p-sm">{dapp.description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }


                        </div>
                    </div>	{/* END INTEGRATIONS-1 WRAPPER */}
                    {/* MORE BUTTON 
                    <div className="row">
                        <div className="col">
                            <div className="more-btn text-center mt-60 wow fadeInUp">
                                <Link href="/integrations" className="btn btn--tra-black hover--theme">View all integrations</Link>
                            </div>
                        </div>
                    </div>
                    */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
