import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"
import RelatedProgram from "@/components/sections/RelatedProgram"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function EarnOnKoinos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.earnOnKoinos);
  const relatedProgram = useProgramStore((state) => state.programs.koindxFarm)

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle="Earn on Koinos | Koinos"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <ProgramHeader program={program} />

              {/* Guide Section */}
              <section id="featured-program-tutorial" className="mb-5 ct-01 content-section features-section division">
                <div className="mt-5">
                  <div className="mt-5">
                    <h2 className="s-38 w-700 my-4">Let's Get Started!</h2>

                    {/* Step 1 */}
                    <h3 className="s-30 w-700 my-4">Step 1: Setup your Koinos wallet</h3>
                    <ol>
                      <li>Go to the Chrome Webstore and install <Link href="https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl" className="underline">Kondor</Link></li>
                      <li>Follow the setup steps to create your Koinos wallet.</li>
                      <li>Safely store your seed phrase!</li>
                    </ol>

                    {/* Step 2 */}
                    <h3 className="s-30 w-700 my-4">Step 2: Bridging USDT, ETH, or BTC to Koinos</h3>
                    <ol>
                      <li>Use any supported bridge to transfer your assets to Koinos.</li>
                      <li>Connect your source chain wallet.</li>
                      <li>Enter the amount of USDT, ETH, or BTC to bridge and input your Koinos address.</li>
                      <li>Complete the bridge process following the provider's instructions.</li>
                    </ol>

                    {/* Step 3 */}
                    <h3 className="s-30 w-700 my-4">Step 3: Provide Liquidity</h3>
                    <p>If you are providing liquidity for <Link href="https://koindx.com" className="underline">KoinDX</Link> on the <strong>KOIN-USDT</strong>, <strong>KOIN-ETH</strong>, <strong>KOIN-BTC</strong> pools, your APY will be distributed to you automatically.</p>
                    <ol>
                      <li>Visit <Link href="https://koindx.com" className="underline">KoinDX</Link> to provide liquidity.</li>
                      <li>Connect your Koinos wallet.</li>
                      <li>Add liquidity to eligible pools to maximize your returns.</li>
                    </ol>

                  </div>
                </div>
              </section>

              <RelatedProgram
                program={relatedProgram}
                message={"By using your bridged assets from the Earn on Koinos program and providing liquidity on KoinDX you can maximize your earnings."}
              />
              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
