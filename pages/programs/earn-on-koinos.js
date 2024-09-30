import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import FeaturedProgramHeader from "@/components/sections/FeaturedProgramHeader"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function EarnOnKoinos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Fetch the earnOnKoinos program data from the store
  const program = useProgramStore((state) => state.programs.earnOnKoinos);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <FeaturedProgramHeader program={program} />

              {/* Tutorial Section */}
              <section id="featured-program-tutorial" className="mb-5 ct-01 content-section features-section division">
                <div className="mt-5">
                  <div className="mt-5">
                    <h2 className="s-38 w-700 my-4">Earn on Koinos Tutorial</h2>
                    <p>Welcome to this quick guide on how to participate in the Earn on Koinos promotion, where you can earn up to 16% yield on your USDT by bridging it from Ethereum to Koinos and providing liquidity on KoinDX. We will do this in three steps, let's dive right in!</p>

                    {/* Step 1 */}
                    <h3 className="s-30 w-700 my-4">Step 1: Acquiring KOIN and Setting Up Kondor</h3>
                    <p>Before we start, you'll need to have some KOIN in your wallet and set up the Kondor wallet to interact with the Koinos blockchain.</p>
                    <ul>
                      <li><strong>Acquire KOIN:</strong>
                        <ul>
                          <li>You can acquire KOIN from several platforms:</li>
                          <li><Link href="https://app.uniswap.org/explore/tokens/ethereum/0xed11c9bcf69fdd2eefd9fe751bfca32f171d53ae" className="underline">Uniswap (DEX)</Link></li>
                          <li><Link href="https://www.mexc.com/exchange/KOIN_USDT" className="underline">MEXC (CEX)</Link></li>
                          <li><Link href="https://bingx.com/en/spot/KOINUSDT/" className="underline">BingX (CEX)</Link></li>
                          <li><Link href="https://www.coinstore.com/#/spot/KOINUSDT" className="underline">Coinstore (CEX)</Link></li>
                          <li><Link href="https://exchange.lcx.com/trade/KOIN-EUR" className="underline">LCX (CEX)</Link></li>
                          <li><Link href="https://app.koindx.com/swap" className="underline">KoinDX (DEX)</Link></li>
                        </ul>
                      </li>
                      <li><strong>Set Up Kondor Wallet:</strong> Download and set up Kondor wallet from <Link href="https://kondorwallet.com" className="underline">Kondor Wallet Link</Link>.</li>
                    </ul>

                    {/* Step 2 */}
                    <h3 className="s-30 w-700 my-4">Step 2: Bridging USDT, ETH, or BTC to Koinos</h3>
                    <ul>
                      <li>Access the <Link href="https://dapp.chainge.finance/?fromChain=ETH&toChain=KOIN&fromToken=USDT&toToken=USDT" className="underline">Chainge Bridge</Link>.</li>
                      <li>Connect your source chain wallet.</li>
                      <li>Enter the amount of USDT, ETH, or BTC to bridge and input your Koinos address.</li>
                      <li>Click on "Bridge now" to start the process.</li>
                    </ul>

                    {/* Step 3 */}
                    <h3 className="s-30 w-700 my-4">Step 3: Providing Liquidity on KoinDX</h3>
                    <ul>
                      <li>Visit <Link href="https://app.koindx.com" className="underline">KoinDX</Link> and connect your Kondor wallet.</li>
                      <li>Select USDT, ETH, or BTC and KOIN pairing to provide liquidity.</li>
                      <li>Click on "Add Position" to confirm and sign the transaction.</li>
                    </ul>

                    <h3 className="s-30 w-700 my-4">Conclusion</h3>
                    <p className="mb-5">And that's it! You've successfully participated in the Earn on Koinos promotion, setting yourself up to earn up to 16% yield on your USDT, ETH, or BTC. By following these simple steps, you've acquired KOIN, set up your Kondor wallet, bridged your USDT from Ethereum to Koinos, and provided liquidity on KoinDX. Keep an eye on your positions and enjoy watching your crypto grow!</p>
                  </div>
                </div>
              </section>

              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
