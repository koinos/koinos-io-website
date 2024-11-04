import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function FaqPage() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  const faqs = [
    {
      question: 'What is the mission of Koinos ?',
      answer:
        'To accelerate the transition to a truly decentralized future by providing Web2 User Experiences on Web3.',
    },
    {
      question: 'When will mainnet be released?',
      answer:
        'Main net was released on November the 5th, 2022 and fully decentralized December 5th, 2022.',
    },
    {
      question: 'How will mainnet tokens be distributed ?',
      answer:
        'The initial token balances on main net were determined entirely by the token balances of the KOIN ERC20 (i.e. the KOIN tokens on Ethereum that were distributed through proof of work mining). That ERC20 was implemented using OpenZeppelin’s tooling including their snapshot mechanism. This mechanism within the smart contract allows for the creation of a decentralized record of all token balances and total supply at the time of use (i.e. a “snapshot”). No date has been announced for the snapshot that will be used for mainnet.',
    },
    {
      question: 'How is Koinos feeless ?',
      answer:
        'Koinos features a new concept called “mana” that is the most innovative solution to the halting problem since the invention of Ethereum’s “gas.” It is a property of the KOIN token that gets “consumed” as a user performs feeless transactions, but that also regenerates over time. This means that even if all of a user’s mana gets consumed, all they have to do is wait if they want to perform more feeless transactions without having to purchase additional KOIN. Once any mana in a token is consumed, that token becomes locked (non-transferrable) for the duration of the regen period. The mana whitepaper is now LIVE. Read it here.',
    },
    {
      question: 'How decentralized is Koinos ?',
      answer:
        'Koinos is highly decentralized as a result of its novel proof-of-burn consensus algorithm. the KOIN token is intended to deliver on Satoshi’s original vision of a truly peer-to-peer electronic cash that utilizes spare computational resources and does not require dedicated hardware. In other words, it is provably egalitarian. Iain Stewart proposed proof-of-burn in 2012, a year after proof-of-stake was proposed, and we believe this represents the next stage of evolution in consensus algorithms. Proof-of-burn enables Koinos to accomplish provable egalitarianism by delivering the economics of proof-of-work with even higher efficiency than proof-of-stake. The end result of this implementation is a consensus system that should be more decentralized than proof-of-work and more efficient than proof-of-stake.',
    },
    {
      question: 'What is the TPS (transactions per second)?',
      answer:
        'Koinos main net is capable of supporting an average TPS of 150 and a peak TPS of 450 but it is important to bear in mind that Koinos is not optimized for throughput, it is optimized for upgradeability which means that it can rapidly adopt the most advanced and secure scaling solutions (e.g. sharding, parachains, etc.) as soon as they are available. Koinos Group, the inventors of Koinos have already identified new WASM VMs that could improve performance by 10x.',
    },
    {
      question: 'Was there an ICO?',
      answer:
        'No. The KOIN token launch was modeled off Bitcoin to maximize accessibility and made innovative use of the Ethereum blockchain to further maximize accessibility. Instead of having to access an entirely new blockchain, people could use an incredibly easy-to-use, free, and open mining program to submit CPU-optimized proofs of work to an Ethereum smart contract which would in turn distribute KOIN tokens based on the size of the proofs.The purpose of this Ethereum-based token is to pre-seed the Koinos ecosystem with a base level of decentralization. This means that the only way to acquire KOIN was through PoW mining or open market purchases so there was no pre-mine, ICO, IEO, or any other IxO (lol).',
    },
    {
      question: 'What are the features of mainnet ?',
      answer:
        '1. Feeless Mana system<br/>2. Proof-of-Burn consensus algorithm<br>3. Universal Language Support<br/>4. Infinite Upgradeability',
    },
    {
      question: 'Is Koinos “Ethereum-compatible” ?',
      answer:
        'Maximum accessibility is the ultimate compatibility. Koinos is designed so that developers can use the programming languages they already know and love to build their applications, not learn new languages like Solidity. Any developer who can write a smart contract in Solidity can easily rewrite that smart contract in C++ or TypeScript, which are the first two languages Koinos will support.',
    },
    {
      question: 'How is the team funded ?',
      answer:
        'Koinos Group is being modeled off traditional tech growth companies that sacrifice profits in the early years to build a user base and leverage unique knowledge of an ecosystem to find product-market fit for a high-margin software product.\n\nKoinos Group was founded by the core development team behind the Steem blockchain to accelerate the transition to a more decentralized future by focusing on accessibility. This team worked together for 4+ years at Steemit on the Steem blockchain, at the time the most accessible blockchain by orders of magnitude, and we have now been working together for nearly 2 years on Koinos. Every member of Koinos Group has been working solely for equity in the company, which means they believe in the product and the business plan, and have a vested interest in seeing both the platform and the company succeed.\n\nKoinos Group had to acquire its KOIN like everyone else through either PoW mining or open market purchases, making it impossible to confuse holding KOIN as any kind of investment in Koinos Group. This aligns its incentives with the incentives of the Koinos community.',
    },
    {
      question: 'How will Koinos scale ?',
      answer:
        'The ultimate scaling solution is the ability to rapidly integrate the most efficient, secure, and well-maintained scaling solutions as they emerge. In other words, upgradeability is the ultimate scaling solution which is why Koinos is designed to be the most upgradeable blockchain in the world. Whether the best solutions leverage inter-chain communication, sharding, or something else entirely, Koinos will be ready to take advantage of any or all of these.',
    },
    {
      question: 'How Composable is Koinos ?',
      answer:
        'Koinos has the highest degree of composability possible because it is the only blockchain framework to move all of the system logic into smart contracts. When we’re talking about composability in the blockchain context, what we are talking about is the ability for decentralized application developers to repurpose code that is already running on the blockchain within their applications (i.e. to “compose” their applications).\n\nMost blockchains that claim “high composability” are just saying that they don’t have sharding, which is an attempt to rebrand a limitation as a value-add. Koinos is optimized for flexibility which means that it could shard, or not shard, based on the smart contracts that are running on it.\n\nBecause all of the system logic is contained in smart contract modules, application developers will be able to not just repurpose the smart contracts written by other dApp developers, they’ll be able to repurpose the code written by the most experienced blockchain engineers in the world; the engineers building Koinos-based blockchains.\n\nBut wait there’s more! Because these smart contracts will be written in an ever growing number of the most used programming languages in the world, developers won’t just be able to find the perfect smart contract for their needs, they will be able to find smart contracts written in their preferred programming language! This takes the composability of Koinos, already far greater than any other protocol, to an entirely new level!\n\nFollow us on Twitter for updates and the latest AMA location.',
    },
  ];

  return (
    <>
      <Layout 
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle="Frequently Asked Questions | Koinos"
      >
        <section id="faqs-2" className="pb-30 inner-page-hero faqs-section division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                {/* INNER PAGE TITLE */}
                <div className="inner-page-title">
                  <h2 className="s-52 w-700">FAQs</h2>
                </div>
                {/* QUESTIONS ACCORDION */}
                <div className="accordion-wrapper">
                  <ul className="accordion">

                    {
                      faqs.map((faq, index) =>
                        <li key={index} className={isActive.key == index + 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(index + 1)}>
                          {/* CATEGORY HEADER */}
                          <div className="accordion-thumb">
                            <h4 className="s-18 w-600">{faq.question}</h4>
                          </div>
                          {/* CATEGORY ANSWERS */}
                          <div className="accordion-panel" style={{ display: `${isActive.key == index + 1 ? "block" : "none"}` }}>
                            {/* QUESTION #1 */}
                            <div className="accordion-panel-item mb-35">
                              {/* Answer */}
                              <div className="faqs-2-answer color--grey">
                                {/* Text */}
                                <p dangerouslySetInnerHTML={{ __html: faq.answer }}>
                                </p>
                              </div>
                            </div>	{/* END QUESTION #1 */}

                          </div>	{/* END CATEGORY ANSWERS */}
                        </li>
                      )
                    }

                  </ul>
                </div>	{/* END QUESTIONS ACCORDION */}
                {/* MORE QUESTIONS LINK */}
                <div className="more-questions">
                  <div className="more-questions-txt bg--white-400 r-100">
                    <p className="p-lg">Have any questions? <Link href="https://telegram.koinos.io" className="color--theme">Get in Touch</Link></p>
                  </div>
                </div>
              </div>
            </div>    {/* End row */}
          </div>	   {/* End container */}
        </section>

      </Layout>
    </>
  )
}