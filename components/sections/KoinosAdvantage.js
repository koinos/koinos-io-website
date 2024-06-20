import { useRef, useEffect } from "react";
import { animate } from "../utils/animate";

export default function KoinosAdvantage() {
  const sectionRef = useRef(null);

  useEffect(() => {
      if (sectionRef.current) {
        animate(sectionRef.current);
      }
    }, [sectionRef]);

  const title = "The Koinos Advantage";
  const subtle = "Koinos is Engineered to Provide a Web2 User Experience on Web3";

  const items = [
    {
      title: "Smart Contracts without Fees",
      description:
        "Just like the internet! The Koinos Mana system allows you to use the blockchain without spending, or even holding, ANY tokens. Mana recharges over time and can be shared with others. Koinos lowers the barrier with feeless smart contracts!",
      icon: "/images/features/feeless.png",
    },
    {
      title: "A Web2 User Experience on Web3",
      description:
        'Our innovative Mana system recharges like a battery, enabling applications to allow feeless transactions for you and the only cost to them is waiting for their "battery" to recharge. This unique approach offers a truly frictionless user experience.',
      icon: "/images/features/web2.png",
    },
    {
      title: "Upgradable / Evolving Blockchain",
      description:
        'The entire blockchain is highly modular and is the first chain with consensus and governance built from smart contracts. Anything including the core features of the blockchain can be upgraded with ease. No more "Eth 2.0-style" delays.',
      icon: "/images/features/upgradeable.png",
    },
    {
      title: "Lightning Fast",
      description:
        "With a 3 second block times, Koinos offers a near realtime experience for both applications and you, the user. This provides critical responsiveness needed to facilitate a Web2 experience on Web3.",
      icon: "/images/features/fast.png",
    },
    {
      title: "Microservices Architecture",
      description:
        "Koinos is one of the very few blockchains to leverage a microservice architecture. As a developer you can build custom microservices in all major languages. No more monolithic codebases.",
      icon: "/images/features/microservices.png",
    },
    {
      title: "Universal Language Support",
      description:
        "A growing number of smart contract languages are added thanks to the KVM (Koinos Virtual Machine) implementation of WebAssembly (WASM) and Google’s protocol buffers (Protobuf). Today you can get started with the popular languages TypeScript and C++. ",
      icon: "/images/features/universal.png",
    },
  ];

  return (
    <>
      <section id="features" className="py-100 features-section division" ref={sectionRef}>
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-80 py-4">
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
              {items.map((item) => (
                <div key={item.title} className="col">
                  <div className="fbox-11 fb-1 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-wrap">
                      <div className="fbox-ico ico-60">
                        <div className="shape-ico color--theme">
                          <img src={item.icon} alt="feature-icon" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Icon */}
                    {/* Text */}
                    <div className="fbox-txt">
                      <h6 className="s-22 w-700">{item.title}</h6>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-11 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
