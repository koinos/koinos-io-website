import { useRef, useEffect } from "react"
import { useTranslations } from "next-intl"

export default function Roadmap() {
  const t = useTranslations("Roadmap")

  const title = t("title")
  const subtle = t("subtitle")
  const year = "2025"

  const roadmapPrevious = [
    {
      title: t("previous.2020.title"),
      description: [
        {
          text: t("previous.2020.items.announcement.text"),
          icon: t("previous.2020.items.announcement.icon"),
          description: t("previous.2020.items.announcement.description"),
        },
        {
          text: t("previous.2020.items.pow.text"),
          icon: t("previous.2020.items.pow.icon"),
          description: t("previous.2020.items.pow.description"),
        },
      ],
      status: t("previous.2020.status"),
    },
    {
      title: t("previous.2021.title"),
      description: [
        {
          text: t("previous.2021.items.testnet.text"),
          icon: t("previous.2021.items.testnet.icon"),
          description: t("previous.2021.items.testnet.description"),
        },
        {
          text: t("previous.2021.items.cli.text"),
          icon: t("previous.2021.items.cli.icon"),
          description: t("previous.2021.items.cli.description"),
        },
        {
          text: t("previous.2021.items.pob.text"),
          icon: t("previous.2021.items.pob.icon"),
          description: t("previous.2021.items.pob.description"),
        },
        {
          text: t("previous.2021.items.protobuf.text"),
          icon: t("previous.2021.items.protobuf.icon"),
          description: t("previous.2021.items.protobuf.description"),
        },
      ],
      status: t("previous.2021.status"),
    },
    {
      title: t("previous.2022.title"),
      description: [
        {
          text: t("previous.2022.items.governance.text"),
          icon: t("previous.2022.items.governance.icon"),
          description: t("previous.2022.items.governance.description"),
        },
        {
          text: t("previous.2022.items.mana.text"),
          icon: t("previous.2022.items.mana.icon"),
          description: t("previous.2022.items.mana.description"),
        },
        {
          text: t("previous.2022.items.mainnet.text"),
          icon: t("previous.2022.items.mainnet.icon"),
          description: t("previous.2022.items.mainnet.description"),
        },
      ],
      status: t("previous.2022.status"),
    },
    {
      title: t("previous.2023.title"),
      description: [
        {
          text: t("previous.2023.items.microservices.text"),
          icon: t("previous.2023.items.microservices.icon"),
          description: t("previous.2023.items.microservices.description"),
        },
        {
          text: t("previous.2023.items.upgrade.text"),
          icon: t("previous.2023.items.upgrade.icon"),
          description: t("previous.2023.items.upgrade.description"),
        },
      ],
      status: t("previous.2023.status"),
    },
    {
      title: t("previous.2024.title"),
      description: [
        {
          text: t("previous.2024.items.rest.text"),
          icon: t("previous.2024.items.rest.icon"),
          description: t("previous.2024.items.rest.description"),
        },
        {
          text: t("previous.2024.items.kcs4.text"),
          icon: t("previous.2024.items.kcs4.icon"),
          description: t("previous.2024.items.kcs4.description"),
        },
        {
          text: t("previous.2024.items.mempool.text"),
          icon: t("previous.2024.items.mempool.icon"),
          description: t("previous.2024.items.mempool.description"),
        },
      ],
      status: t("previous.2024.status"),
    },
  ]

  const roadmap = [
    {
      title: t("current.q1.title"),
      description: [
        {
          text: t("current.q1.items.snapshots.text"),
          icon: t("current.q1.items.snapshots.icon"),
          description: t("current.q1.items.snapshots.description"),
        },
        {
          text: t("current.q1.items.restApi.text"),
          icon: t("current.q1.items.restApi.icon"),
          description: t("current.q1.items.restApi.description"),
        },
      ],
      status: t("current.q1.status"),
    },
    {
      title: t("current.q2.title"),
      description: [
        {
          text: t("current.q2.items.authority.text"),
          icon: t("current.q2.items.authority.icon"),
          description: t("current.q2.items.authority.description"),
        },
      ],
      status: t("current.q2.status"),
    },
    {
      title: t("current.q3.title"),
      description: [
        {
          text: t("current.q3.items.libraries.text"),
          icon: t("current.q3.items.libraries.icon"),
          description: t("current.q3.items.libraries.description"),
        },
        {
          text: t("current.q3.items.c_sdk.text"),
          icon: t("current.q3.items.c_sdk.icon"),
          description: t("current.q3.items.c_sdk.description"),
        },
      ],
      status: t("current.q3.status"),
    },
    {
      title: t("current.q4.title"),
      description: [
        {
          text: t("current.q4.items.vscode.text"),
          icon: t("current.q4.items.vscode.icon"),
          description: t("current.q4.items.vscode.description"),
        },
      ],
      status: t("current.q4.status"),
    },
  ]

  const beyondRoadmap = [
    {
      title: "",
      description: [
        {
          text: t("future.items.cpp_sdk.text"),
          icon: t("future.items.cpp_sdk.icon"),
          description: t("future.items.cpp_sdk.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.rust_sdk.text"),
          icon: t("future.items.rust_sdk.icon"),
          description: t("future.items.rust_sdk.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.wasm.text"),
          icon: t("future.items.wasm.icon"),
          description: t("future.items.wasm.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.data_store.text"),
          icon: t("future.items.data_store.icon"),
          description: t("future.items.data_store.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.redundant.text"),
          icon: t("future.items.redundant.icon"),
          description: t("future.items.redundant.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.optimistic.text"),
          icon: t("future.items.optimistic.icon"),
          description: t("future.items.optimistic.description"),
        },
      ],
    },
    {
      title: "",
      description: [
        {
          text: t("future.items.sharding.text"),
          icon: t("future.items.sharding.icon"),
          description: t("future.items.sharding.description"),
        },
      ],
    },
  ]

  return (
    <>
      <section
        id="roadmap"
        className="pt-100 pb-100 ct-04 content-section division"
      >
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
          <div className="row d-flex">
            {/* TEXT BLOCK */}
            <div className="col-md-12 order-last order-md-2">
              <div className="txt-block left-column wow">
                {roadmapPrevious.map((item, index) => (
                  <div data-aos="fade-up">
                    <div key={index} className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 > 0 && (
                          <>
                            <h5 className="text-end">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>{" "}
                                  </div>
                                </div>
                                <div className="text-end roadmap-desc ms-auto w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-filled.png"
                          />
                        )}
                        {item.status !== "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-hollow.png"
                          />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>
                                  </div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title my-5">
                      {/* Title */}
                      <h2 className="s-50 w-700">{year}</h2>
                    </div>
                  </div>
                </div>

                {roadmap.map((item, index) => (
                  <div key={index} data-aos="fade-up">
                    <div className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="text-end s-22 w-700">
                              {item.title}
                            </h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>{" "}
                                  </div>
                                </div>
                                <div className="text-end roadmap-desc w-75 ms-auto d-flex justify-content-center d-none d-md-flex mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-filled.png"
                          />
                        )}
                        {item.status !== "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-hollow.png"
                          />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 != 0 && (
                          <>
                            <h5 className="s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>
                                  </div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title my-5">
                      {/* Title */}
                      <h2 className="s-50 w-700">{t("beyond")} 🚀</h2>
                    </div>
                  </div>
                </div>

                {beyondRoadmap.map((item, index) => (
                  <div data-aos="fade-up">
                    <div key={index} className="cbox-2 process-step">
                      <div className="cbox-2-txt me-4">
                        {index % 2 == 0 && (
                          <>
                            <h5 className="text-end s-22 w-700">
                              {item.title}
                            </h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="text-end d-flex align-items-center justify-content-end gap-3">
                                  <div>{obj.text}</div>
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>{" "}
                                  </div>
                                </div>
                                <div className="text-end roadmap-desc w-75 ms-auto d-flex justify-content-center d-none d-md-flex mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      {/* Icon */}
                      <div className="ico-wrap">
                        {item.status === "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-filled.png"
                          />
                        )}
                        {item.status !== "done" && (
                          <img
                            className="cbox-2-ico"
                            src="images/sections/roadmap/logo-hollow.png"
                          />
                        )}
                        <span className="cbox-2-line" />
                      </div>
                      {/* Text */}
                      <div className="cbox-2-txt">
                        {index % 2 != 0 && (
                          <>
                            <h5 className="s-22 w-700">{item.title}</h5>
                            {item.description.map((obj, idx) => (
                              <div key={idx}>
                                <div className="d-flex align-items-center justify-content-start gap-3">
                                  <div
                                    className="d-flex justify-content-center d-none d-md-flex"
                                    style={{ width: "42px", minWidth: "42px" }}
                                  >
                                    <i className={`m-2 ${obj.icon}`}></i>
                                  </div>
                                  <div>{obj.text}</div>
                                </div>
                                <div className="roadmap-desc w-75 d-flex justify-content-center d-none d-md-flex s-15 mb-3">
                                  {obj.description}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
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
  )
}
