import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function TaskOnQuest() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.taskonQuest);

  const quest1Url = "https://taskon.xyz/quest/1";
  const quest2Url = "https://taskon.xyz/quest/2";

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
              <ProgramHeader program={program} />

              {/* Guide Section */}
              <section id="featured-program-tutorial" className="mb-5 ct-01 content-section features-section division">
                <div className="mt-5">
                  <div className="mt-5">
                    <h2 className="s-38 w-700 my-4">Let's Get Started!</h2>

                    {/* Step 1 */}
                    <h3 className="s-30 w-700 my-4">TaskOn Community Launch Quest</h3>
                    <p>Earn yourself a piece of the $1,250 USDT prize pool by taking three easy steps.</p>
                    <ol>
                      <li>Follow <Link href="https://x.com/KoinosNetwork" className="underline">KoinosNetwork</Link> on X</li>
                      <li>Join our <Link href="https://telegram.koinos.io/" className="underline">Telegram</Link></li>
                      <li>Join our <Link href="https://taskon.xyz/Koinos" className="underline">TaskOn Community</Link></li>
                    </ol>

                    <Link
                      href={quest1Url}
                      className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                      target="_blank"
                    >
                      Join the Quest
                    </Link>

                    {/* Step 2 */}
                    <h3 className="s-30 w-700 my-4">Lords Forsaken Quest</h3>
                    <p>Earn yourself some KOIN and FAITH by playing Koinos' premiere Play-to-Earn Web3 game, Lords Forsaken!</p>
                    <ol>
                      <li>Download and setup a <Link href="https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl" className="underline">Kondor</Link> wallet</li>
                      <li>Follow <Link href="https://x.com/lordsforsak3n" className="underline">Lords Forsaken</Link> on X</li>
                      <li>Join Lords Forsaken's <Link href="https://t.me/lordsforsaken" className="underline">Telegram</Link></li>
                      <li>Tweet a victory screenshot on X</li>
                    </ol>

                    <Link
                      href={quest2Url}
                      className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                      target="_blank"
                    >
                      Join the Quest
                    </Link>

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
