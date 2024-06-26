import { useRef, useEffect } from "react";
import { animate } from "../utils/animate";

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
      description: `
                Koinos Announced <i class="fa-solid fa-landmark"></i><br/>
                Proof-of-Work Initial Supply Distribution <i class="fa-solid fa-parachute-box"></i>
                `,
      status: "done",
    },
    {
      title: "2021",
      description: `
                Testnet <i class="fa-solid fa-landmark"></i><br/>
                Koinos Command Line Interface (CLI) <i class="fa-solid fa-code"></i><br/>
                Protobuf Integration <i class="fa-solid fa-code"></i><br/>
                Proof-of-Burn Development <i class="fa-solid fa-fire"></i><br/>
                Kondor Wallet <i class="fa-solid fa-wallet"></i>
                `,
      status: "done",
    },
    {
      title: "2022",
      description: `
                Decentralized Governance Development <i class="fa-solid fa-scale-balanced"></i><br/>
                Mana System Development <i class="fa-solid fa-wand-magic-sparkles"></i><br/>
                Mainnet Go-Live (November 5th) <i class="fa-solid fa-landmark"></i><br/>
                MEXC Listing <i class="fa-solid fa-arrow-right-arrow-left"></i>
                `,
      status: "done",
    },
    {
      title: "2023",
      description: `
                KoinDX <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Koiner <i class="fa-brands fa-wpexplorer"></i><br/>
                KoinosBlocks <i class="fa-brands fa-wpexplorer"></i><br/>
                Kanvas <i class="fa-solid fa-gamepad"></i><br/>
                BurnKoin <i class="fa-solid fa-fire"></i><br/>
                Fogata <i class="fa-solid fa-fire"></i><br/>
                Atomic Swaps <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Kollection NFT Marketplace <i class="fa-solid fa-shop"></i><br/>
                Konio <i class="fa-solid fa-wallet"></i></br>
                KoinosPro <i class="fa-solid fa-server"></i><br/>
                NFTNYC Hackathon <i class="fa-solid fa-code"></i><br/>
                Koinos Account Protocol <i class="fa-solid fa-person"></i><br/>
                Koinosbox Polls <i class="fa-solid fa-square-poll-vertical"></i><br/>
                Nicknames <i class="fa-solid fa-person"></i><br/>
                ChaingeFinance Integration <i class="fa-solid fa-bridge"></i><br/>
                `,
      status: "done",
    },
  ];

  const roadmap2024 = [
    {
      title: "Q1",
      description: `
                Lords Forsaken Pre-sale <i class="fa-solid fa-gamepad"></i><br/>
                Koinos Exchange Group <i class="fa-solid fa-person"></i><br/>
            `,
      status: "done",
    },
    {
      title: "Q2",
      description: `
                LCX Listing <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Biconomy Listing <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Koincity Markets <i class="fa-solid fa-arrow-right-arrow-left"></i>
            `,
      status: "done",
    },
    {
      title: "Q3",
      description: `
                Tangem Wallet Integration <i class="fa-solid fa-wallet"></i><br/>
                Tier II Exchange Listing (TBA) <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Vortex Bridge <i class="fa-solid fa-bridge"></i></br>
                KoinDX Token Launch <i class="fa-solid fa-coins"></i><br/>
                Lords Forsaken Go-Live <i class="fa-solid fa-gamepad"></i><br/>
                Veive Protocol <i class="fa-solid fa-wallet"></i><br/>
                Koinos Marketing Campaign <i class="fa-solid fa-business-time"></i>
            `,
      status: "todo",
    },
    {
      title: "Q4",
      description: `
                Koinos Smart Wallets <i class="fa-solid fa-wallet"></i><br/>
                Fiat On/Off Ramp <i class="fa-solid fa-money-bill"></i><br/>
                Koins Ambassador Program <i class="fa-solid fa-person"></i><br/>
                Tier II Exchange Listings (TBA) <i class="fa-solid fa-arrow-right-arrow-left"></i><br/>
                Kollection Creator Tools <i class="fa-solid fa-shop"></i>
            `,
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
              <div className="txt-block left-column wow fadeInRight">
                {roadmapPrevious.map((item, index) => (
                  <div key={index} className="cbox-2 process-step">
                    <div className="cbox-2-txt text-end me-4">
                      {index % 2 > 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
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
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title mb-70">
                      {/* Title */}
                      <h2 className="s-50 w-700">2024 🚀</h2>
                    </div>
                  </div>
                </div>

                {roadmap2024.map((item, index) => (
                  <div key={index} className="cbox-2 process-step">
                    <div className="cbox-2-txt text-end me-4">
                      {index % 2 > 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
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
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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
