

export default function Features11_1() {

    const title = 'Discover the Advantages of Koinos';
    const subtle = '';

    const items = [
        {
            title: 'Feeless and Free-To-Use',
            description: 'Just like the internet! The Koinos Mana system allows you to use the blockchain without spending, or even holding, ANY tokens. Mana recharges over time at a maximum of 5 days.<br/>Koinos is also free to use for developers with free-to-use smart contracts!',
            icon: '/images/features/feeless.png',
        },
        {
            title: 'A Web2 User Experience on Web3',
            description: 'Our innovative Mana system recharges like a battery, enabling applications to allow free transactions for you and the only cost to them is waiting for their "battery" to recharge. This unique approach offers a truly free user experience, mirroring the effortless interaction you\'re used to on the internet. With Koinos, welcoming the masses to the world of blockchain has never been simpler!',
            icon: '/images/features/web2.png',
        },
        {
            title: 'Eco Friendly',
            description: 'Our eco-friendly approach sets us apart. By eliminating needless computational work, Koinos\'s proof-of-burn consensus ensures robust security without vast environmental cost. Plus, its efficiency is so remarkable that even a simple laptop can effectively run a mining node.',
            icon: '/images/features/eco.png',
        },
        {
            title: 'Upgradable / Evolving Blockchain',
            description: 'The entire blockchain is highly modular and is the first chain with consensus and governance built from smart contracts. Anything including the core features of the blockchain can be upgraded with ease. No more hard forks. No more "Eth 2.0-style" delays.',
            icon: '/images/features/upgradeable.png',
        },
        {
            title: 'Lightning Fast',
            description: 'With a 3 second block times, Koinos offers a near realtime experience for both applications and you, the user.',
            icon: '/images/features/fast.png',
        },
        {
            title: 'Microservices Architecture',
            description: 'Koinos is one of the very few blockchains to leverage a microservice architecture. As a developer you can build custom microservices in all major languages. No more monolithic codebases.',
            icon: '/images/features/microservices.png',
        },
        {
            title: 'Universal Language Support',
            description: 'With Koinos you can write smart contracts in any language you prefer. A growing number of languages are added through the use of Universal Language Support (WASM) and Google’s protocol buffers (Protobuf). Today you can get started with the popular languages TypeScript and C++. ',
            icon: '/images/features/universal.png',
        },
        {
            title: 'Flexible KOIN Supply',
            description: 'The KOIN token supply expands and contracts based on market conditions, like most advanced global currencies, but administered in a fully decentralized and algorithmic manner. More user\'s mining means more KOIN being burned reducing the available KOIN in the market. ',
            icon: '/images/features/flexible.png',
        },
        {
            title: 'Mining for All',
            description: 'No need to invest in expensive mining machinery… First proposed for Bitcoin in 2011, Proof-of-Burn changes the opportunity-cost of securing the network from electrcity and equipment to time. The security of Proof-of-Work with the eco-friendliness and flexibility of Proof-of-Stake. It\'s easy to run your own mining node, but it\'s even easier to simply move your KOIN into a growing number of mining pools. Just drop your KOIN in a pool and the tech behind the pools will do all the rest.',
            icon: '/images/features/mining.png',
        },
        {
            title: 'Community Owned Blockchain',
            description: 'Born from the vision of the Koinos Group, the Koinos blockchain was given to the community upon its mainnet launch, epitomizing true decentralization. Free from central authority, Koinos thrives under the stewardship of its dedicated community. As with any robust <stong>open-source</strong> project, the ongoing evolution of Koinos is shaped by the collective creativity and commitment of its global community.',
            icon: '/images/features/community.png',
        },
        {
            title: '100% Fair Launch',
            description: 'The initial supply was mined through proof of work — like Bitcoin — with no ICO, no tokens for founders, and no tokens for investors.',
            icon: '/images/features/fairlaunch.png',
        },
    ];

    return (
        <>
            <section id="features" className="py-100 features-section division">
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
                    {/* FEATURES-11 WRAPPER */}
                    <div className="fbox-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 rows-3">

                            {
                                items.map(item =>
                                    <div key={item.title} className="col">
                                        <div className="fbox-11 fb-1 wow fadeInUp">
                                            {/* Icon */}
                                            <div className="fbox-ico-wrap">
                                                <div className="fbox-ico ico-60">
                                                    <div className="shape-ico color--theme">
                                                        <img src={item.icon} alt="feature-icon" />
                                                    </div>
                                                </div>
                                            </div>	{/* End Icon */}
                                            {/* Text */}
                                            <div className="fbox-txt">
                                                <h6 className="s-22 w-700">{item.title}</h6>
                                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>  {/* End row */}
                    </div>	{/* END FEATURES-11 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
