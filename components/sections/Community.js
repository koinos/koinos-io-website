import Link from "next/link";


export default function Community() {

    const title1 = "Decentralization";
    const title2 = "Communities";
    const description = `
        Koinos is a decentralized project governed by the community. Exciting new community projects emerge regularly, reflecting the diversity and creativity of the Koinos community. The open governance allows users to directly influence the development of the platform. Koinos' expanding ecosystem promotes collaboration and innovation, making the blockchain more accessible and transparent. Koinos serves as an example of how decentralization can shape the future of blockchain technologies.
    `;
    const communities = [
        {
            name: 'Telegram',
            icon: '/images/community/telegram.png',
            url: 'https://telegram.koinos.io'
        },
        {
            name: 'Discord',
            icon: '/images/community/discord.png',
            url: 'https://discord.koinos.io'
        },
        {
            name: 'X',
            icon: '/images/community/x.png',
            url: 'https://x.com/koinosnetwork'
        },
        {
            name: 'Koinos Army',
            icon: '/images/community/koinos-army.png',
            url: 'https://t.me/thekoinosarmy'
        },
        {
            name: 'Planet Koinos',
            icon: '/images/community/planet-koinos.png',
            url: 'https://planetkoinos.com/'
        },
        {
            name: 'Koin Press',
            icon: '/images/community/koin-press.png',
            url: 'https://thekoinpress.com/'
        },
        {
            name: 'Koinos Espanol',
            icon: '/images/community/koinos-espanol.png',
            url: 'https://twitter.com/koinos_espaniol'
        },
        {
            name: 'Koinos Italia',
            icon: '/images/community/koinos-italia.png',
            url: 'https://t.me/KoinosItalia'
        },
        {
            name: 'Koincast',
            icon: '/images/community/koincast.png',
            url: 'https://koincast.io'
        }
    ];

    return (
        <>
            <section id="community" className="pt-100 ws-wrapper content-section">
                <div className="container">
                    <div className="bc-1-wrapper bg--purple-100 bg--fixed r-16">
                        <div className="section-overlay">
                            <div className="row d-flex align-items-center">

                                {/* TEXT BLOCK */}
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="txt-block right-column wow fadeInLeft">
                                        {/* Section ID */}
                                        <span className="section-id">{title1}</span>
                                        {/* Title */}
                                        <h2 className="s-46 w-700">{title2}</h2>
                                        <p className="mb-4 mb-lg-0" dangerouslySetInnerHTML={{ __html: description }}></p>
                                    </div>
                                </div>	{/* END TEXT BLOCK */}

                                {/* IMAGE BLOCK */}
                                <div className="col-md-6 p-sm-5 order-2 order-md-1">
                                    <div className="row">

                                        {
                                            communities.map((community, index) =>
                                                <div key={index} className="col-4 col-md-4 mb-30 wow fadeInUp">
                                                    <Link href={community.url} target="_blank">
                                                        <img className="img-fluid" src={community.icon} alt={community.name} />
                                                    </Link>
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                            </div>   {/* End row */}
                        </div>    {/* End section overlay */}
                    </div>    {/* End content wrapper */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
