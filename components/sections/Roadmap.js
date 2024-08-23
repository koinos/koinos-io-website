import { useRef, useEffect } from "react";
import { animate } from "../utils/animate";
import { fadeIn, staggerContainer  } from "../utils/motion";
import {motion} from 'framer-motion'

export default function Roadmap() {
  const sectionRef = useRef(null);

  useEffect(() => {
      if (sectionRef.current) {
        animate(sectionRef.current);
      }
    }, [sectionRef]);

  const title = "Roadmap";
  const subtle = "";

  const roadmapPrevious = [
    {
        title: "2020",
        description: [
            { text: "Koinos Announced", icon: "fa-solid fa-bullhorn" },
            { text: "Proof-of-Work Initial Supply Distribution", icon: "fa-solid fa-parachute-box" },
        ],
        status: "done",
    },
    {
        title: "2021",
        description: [
            { text: "Testnet", icon: "fa-solid fa-landmark" },
            { text: "Koinos Command Line Interface (CLI)", icon: "fa-solid fa-code" },
            { text: "Proof-of-Burn Development", icon: "fa-solid fa-fire" },
            { text: "Protobuf Integration", icon: "fa-solid fa-code" },
            { text: "Kondor Wallet", icon: "fa-solid fa-wallet" },
        ],
        status: "done",
    },
    {
        title: "2022",
        description: [
            { text: "Decentralized Governance Development", icon: "fa-solid fa-scale-balanced" },
            { text: "Mana System Development", icon: "fa-solid fa-wand-magic-sparkles" },
            { text: "Mainnet Go-Live (November 5th)", icon: "fa-solid fa-landmark" },
            { text: "MEXC Listing", icon: "fa-solid fa-arrow-right-arrow-left" },
        ],
        status: "done",
    },
    {
        title: "2023",
        description: [
            { text: "KoinDX", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "KoinosBlocks", icon: "fa-brands fa-wpexplorer" },
            { text: "Kanvas", icon: "fa-solid fa-gamepad" },
            { text: "BurnKoin", icon: "fa-solid fa-fire" },
            { text: "Koiner", icon: "fa-brands fa-wpexplorer" },
            { text: "Fogata", icon: "fa-solid fa-fire" },
            { text: "Atomic Swaps", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "Kollection NFT Marketplace", icon: "fa-solid fa-shop" },
            { text: "Konio", icon: "fa-solid fa-wallet" },
            { text: "NFTNYC Hackathon", icon: "fa-solid fa-code" },
            { text: "Koinos Account Protocol", icon: "fa-solid fa-person" },
            { text: "Koinosbox Polls", icon: "fa-solid fa-square-poll-vertical" },
            { text: "Nicknames", icon: "fa-solid fa-person" },
            { text: "ChaingeFinance Integration", icon: "fa-solid fa-bridge" },
        ],
        status: "done",
    },
];

  const roadmap2024 = [
    {
        title: "Q1",
        description: [
            { text: "Lords Forsaken Pre-sale", icon: "fa-solid fa-gamepad" },
            { text: "Koinos Exchange Group", icon: "fa-solid fa-person" },
            { text: "KoinosPro", icon: "fa-solid fa-server" },
        ],
        status: "done",
    },
    {
        title: "Q2",
        description: [
            { text: "LCX Listing", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "Biconomy Listing", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "Koincity Markets", icon: "fa-solid fa-arrow-right-arrow-left" },
        ],
        status: "done",
    },
    {
        title: "Q3",
        description: [
            { text: "Tangem Wallet Integration", icon: "fa-solid fa-wallet" },
            { text: "Tier II Exchange Listing (TBA)", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "Vortex Bridge", icon: "fa-solid fa-bridge" },
            { text: "KoinDX Token Launch", icon: "fa-solid fa-coins" },
            { text: "Lords Forsaken Go-Live", icon: "fa-solid fa-gamepad" },
            { text: "Veive Protocol", icon: "fa-solid fa-wallet" },
            { text: "Koinos Marketing Campaign", icon: "fa-solid fa-business-time" },
            { text: "Koincity Dashboards and Tools", icon: "fa-solid fa-building" },
        ],
        status: "todo",
    },
    {
        title: "Q4",
        description: [
            { text: "Koinos Smart Wallets", icon: "fa-solid fa-wallet" },
            { text: "Fiat On/Off Ramp", icon: "fa-solid fa-money-bill" },
            { text: "Koins Ambassador Program", icon: "fa-solid fa-person" },
            { text: "Tier II Exchange Listings (TBA)", icon: "fa-solid fa-arrow-right-arrow-left" },
            { text: "Kollection Creator Tools", icon: "fa-solid fa-shop" },
        ],
        status: "todo",
    },
];

  return (
    <>
  <section id="roadmap" className="pt-100 pb-100 ct-04 content-section division" ref={sectionRef}>
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
        {/* SECTION CONTENT (ROW) */}
        <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-12 order-last order-md-2">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`txt-block left-column `}
                >
                    {roadmapPrevious.map((item, index) => (
                        <motion.div
                            variants={fadeIn("up", "tween", index * 0.5, 1)}
                            initial='hidden'
                            whileInView='show'
                            key={index}  
                            className="cbox-2 process-step"
                            viewport={{once:true}}
                        >
                            <div className="cbox-2-txt text-end me-4">
                                {index % 2 > 0 && (
                                    <>
                                        <h5 className="s-22 w-700">{item.title}</h5>
                                        {item.description.map((desc, idx) => (
                                            <div key={idx} className="d-flex align-items-center justify-content-end gap-3">
                                               <div>{desc.text}</div> 
                                               <div className="d-flex justify-content-center d-none d-md-flex"  style={{ width: '42px', minWidth: '42px'}}><i className={`m-2 ${desc.icon}`}></i> </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            {/* Icon */}
                            <div className="ico-wrap">
                                {item.status === "done" && (
                                    <img className="cbox-2-ico" src="images/rm-logo2.png" />
                                )}
                                {item.status !== "done" && (
                                    <img className="cbox-2-ico" src="images/rm-logo1.png" />
                                )}
                                <span className="cbox-2-line" />
                            </div>
                            {/* Text */}
                            <div className="cbox-2-txt">
                                {index % 2 == 0 && (
                                    <>
                                        <h5 className="s-22 w-700">{item.title}</h5>
                                        {item.description.map((desc, idx) => (
                                            <div key={idx} className="d-flex align-items-center justify-content-start gap-3">
                                                <div className="d-flex justify-content-center d-none d-md-flex"  style={{ width: '42px', minWidth: '42px'}}><i className={`m-2 ${desc.icon}`}></i></div>
                                                <div>{desc.text}</div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title mb-70">
                                {/* Title */}
                                <motion.h2 
                                    variants={fadeIn("up", "tween", 0, .5)}
                                    className="s-50 w-700"
                                    viewport={{once:true}}
                                    initial='hidden'
                                    whileInView='show'>
                                2024 🚀
                                </motion.h2>
                            </div>
                        </div>
                    </div>

                    {roadmap2024.map((item, index) => (
                        <motion.div
                            variants={fadeIn("up", "tween", index * 0.6, 1)}
                            key={index}  className="cbox-2 process-step"
                            viewport={{once:true}}
                            initial='hidden'
                            whileInView='show'
                        >
                            <div className="cbox-2-txt text-end me-4">
                                {index % 2 > 0 && (
                                    <>
                                        <h5 className="s-22 w-700">{item.title}</h5>
                                        {item.description.map((desc, idx) => (
                                            <div key={idx} className="d-flex align-items-center justify-content-end gap-3">
                                                <div>{desc.text}</div>
                                                <div className="d-flex justify-content-center d-none d-md-flex"  style={{ width: '42px', minWidth: '42px'}}><i className={`m-2 ${desc.icon}`}></i></div>
                                                    
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                            {/* Icon */}
                            <div className="ico-wrap">
                                {item.status === "done" && (
                                    <img className="cbox-2-ico" src="images/rm-logo2.png" />
                                )}
                                {item.status !== "done" && (
                                    <img className="cbox-2-ico" src="images/rm-logo1.png" />
                                )}
                                <span className="cbox-2-line" />
                            </div>
                            {/* Text */}
                            <div className="cbox-2-txt">
                                {index % 2 == 0 && (
                                    <>
                                        <h5 className="s-22 w-700">{item.title}</h5>
                                        {item.description.map((desc, idx) => (
                                            <div key={idx} className="d-flex align-items-center justify-content-start gap-3">
                                                <div className="d-flex justify-content-center d-none d-md-flex"  style={{ width: '42px', minWidth: '42px'}}><i className={`m-2 ${desc.icon}`}></i></div><div>{desc.text}</div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    </motion.div>
                {/* </div> */}
            </div>{" "}
            {/* END TEXT BLOCK */}
        </div>{" "}
        {/* END SECTION CONTENT (ROW) */}
    </div>{" "}
    {/* End container */}
</section>
    </>
  );
}
