import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore"; // Import the Zustand store

export default function EarnOnKoinos() {
  // Fetch the earnOnKoinos program data from the store
  const program = useProgramStore((state) => state.programs.earnOnKoinos);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          {/* Promotion Hero Section */}
          <section
            id="project-1"
            className="gr--whitesmoke inner-page-hero single-project"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-10">
                <div className="project-description">
                  {/* Title and Program Overview */}
                  <div className="project-title">
                    <div className="s-52 w-700">{program.title}</div>
                  </div>
                  {/* Preview Image */}
                  <div className="project-priview-img mb-50">
                    <section className="mb-100 ct-01 content-section features-section division">
                      <div className="container">
                        <div className="row d-flex align-items-center">
                          <div className="col-md-6 order-last order-md-2">
                            <div className="txt-block left-column wow fadeInRight">
                              {/* Render the short description here */}
                              <p>
                                {program.shortDescription}{" "}
                              </p>
                              <h5 className="s-24 w-700">
                                {program.smallTitle}
                              </h5>
                              {/* Key Points */}
                              <ul>
                                {program.keyPoints.map((point, index) => (
                                  <li key={index}>
                                    <div className="cbox-1 ico-15">
                                      <div className="ico-wrap color--theme">
                                        <div className="cbox-1-ico">
                                          <span className="flaticon-check" />
                                        </div>
                                      </div>
                                      <div className="cbox-1-txt">
                                        <p>{point}</p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <Link
                              href={program.website} target="_blank"
                              className="btn r-04 btn--theme hover--tra-black mt-20"
                            >
                              Get started now!
                            </Link>
                            </div>
                          </div>
                          <div className="col-md-6 order-first order-md-2">
                            <div className="img-block right-column wow fadeInLeft">
                              <img
                                className="img-fluid rounded"
                                src={program.images.banner}
                                alt="content-image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Program Description */}
                  <div className="project-txt">
                    <p>{program.description}</p>

                    {/* List of features */}
                    {program.details && (
                      <ul className="simple-list">
                        {program.details.map((item, index) => (
                          <li key={index} className="list-item">
                            <p>
                              <strong>{item.asset}</strong>: {item.apy} APY,
                              Matching Total: {item.matching} with{" "}
                              {item.rewards}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Guide Section (Optional) */}
                    {program.guide && (
                      <>
                        <h5 className="s-24 w-700 mt-35 mb-35">
                          How to Participate
                        </h5>
                        <ol>
                          {program.guide.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </>
                    )}

                    {/* Additional Images (Optional) */}
                    {program.images?.otherImages?.length > 0 && (
                      <div className="row d-flex align-items-center project-inner-img mt-50">
                        {program.images.otherImages.map((img, index) => (
                          <div key={index} className="col-md-6">
                            <div className="project-image project-preview r-10">
                              <div className="hover-overlay">
                                <img
                                  className="img-fluid"
                                  src={img}
                                  alt="project-preview"
                                />
                                <div className="item-overlay" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                  <div className="mt-5">
                    {/* Tutorial Section */}
                    <div className="mt-5">
                    <h2 className="s-38 w-700">Earn on Koinos Tutorial</h2>
                    <p>Welcome to this quick guide on how to participate in the Earn on Koinos promotion, where you can earn up to 16% yield on your USDT by bridging it from Ethereum to Koinos and providing liquidity on KoinDX. We will do this in three steps, let's dive right in!</p>

                    {/* Step 1 */}
                    <h3 className="s-30 w-700 mt-4">Step 1: Acquiring KOIN and Setting Up Kondor</h3>
                    <p>Before we start, you'll need to have some KOIN in your wallet and set up the Kondor wallet to interact with the Koinos blockchain.</p>
                    <ul>
                        <li><strong>Acquire KOIN:</strong>
                        <ul>
                            <li>You can acquire KOIN from several platforms:</li>
                            <li><Link href="https://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae" className="text-warning">Uniswap (DEX)</Link></li>
                            <li><Link href="https://www.mexc.com/exchange/KOIN_USDT" className="text-warning">MEXC (CEX)</Link></li>
                            <li><Link href="https://bingx.com/en/spot/KOINUSDT/" className="text-warning">BingX (CEX)</Link></li>
                            <li><Link href="https://www.coinstore.com/#/spot/KOINUSDT" className="text-warning">Coinstore (CEX)</Link></li>
                            <li><Link href="https://exchange.lcx.com/trade/KOIN-EUR" className="text-warning">LCX (CEX)</Link></li>
                            <li><Link href="https://app.koindx.com/swap" className="text-warning">KoinDX (DEX)</Link></li>
                        </ul>
                        </li>
                        <li><strong>Set Up Kondor Wallet:</strong> Download and set up Kondor wallet from <Link href="https://kondorwallet.com" className="text-warning">Kondor Wallet Link</Link>.</li>
                    </ul>

                    {/* Step 2 */}
                    <h3 className="s-30 w-700 mt-4">Step 2: Bridging USDT, ETH, or BTC from Ethereum to Koinos</h3>
                    <ul>
                        <li>Access the <Link href="https://dapp.chainge.finance/?fromChain=ETH&toChain=KOIN&fromToken=USDT&toToken=USDT" className="text-warning">Chainge Bridge</Link>.</li>
                        <li>Connect your Ethereum wallet.</li>
                        <li>Enter the amount of USDT, ETH, or BTC to bridge and input your Koinos address.</li>
                        <li>Click on "Bridge now" to start the process.</li>
                    </ul>

                    {/* Step 3 */}
                    <h3 className="s-30 w-700 mt-4">Step 3: Providing Liquidity on KoinDX</h3>
                    <ul>
                        <li>Visit <Link href="https://app.koindx.com" className="text-warning">KoinDX</Link> and connect your Kondor wallet.</li>
                        <li>Select USDT, ETH, or BTC and KOIN pairing to provide liquidity.</li>
                        <li>Click on "Add Position" to confirm and sign the transaction.</li>
                    </ul>

                    <h3 className="s-30 w-700 mt-4">Conclusion</h3>
                    <p>And that's it! You've successfully participated in the Earn on Koinos promotion, setting yourself up to earn up to 16% yield on your USDT, ETH, or BTC. By following these simple steps, you've acquired KOIN, set up your Kondor wallet, bridged your USDT from Ethereum to Koinos, and provided liquidity on KoinDX. Keep an eye on your positions and enjoy watching your crypto grow!</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}
