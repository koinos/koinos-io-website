import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"
import RelatedProgram from "@/components/sections/RelatedProgram"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function LordsForsakenQuest() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.lordsForsakenQuest);
  const relatedProgram = useProgramStore((state) => state.programs.taskonQuest);

  const questUrl = "https://taskon.xyz/quest/6984752";

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle="Lord's Forsaken Quest | Koinos"
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

                    {/* Steps */}
                    <h3 className="s-30 w-700 my-4">Lord's Forsaken Launch Quest</h3>
                    <p>Earn yourself a piece of the 1500 KOIN and 18000 FAITH prize pool by playing.</p>
                    <ol>
                      <li>Follow <Link href="https://x.com/lordsforsak3n" className="underline">LordsForsak3n</Link> on X</li>
                      <li>Follow <Link href="https://x.com/KoinosNetwork" className="underline">KoinosNetwork</Link> on X</li>
                      <li>Join <Link href="https://t.me/lordsforsaken" className="underline">Lord's Forsaken on Telegram</Link></li>
                      <li>Join <Link href="https://telegram.koinos.io/" className="underline">Koinos Telegram</Link></li>
                      <li><Link href="https://lordsforsaken.com/" className="underline">Play Lord's Forsaken</Link></li>
                      <li>Post on <Link href="https://x.com/" className="underline">X</Link> with a screenshot of your victory -- be sure to include "Earn $FAITH by playing @lordsforsak3n on @KoinosNetwork " in the text</li>
                      <li>Join <Link href="https://taskon.xyz/Koinos" className="underline">Koinos on TaskOn</Link></li>
                    </ol>

                    <Link
                      href={questUrl}
                      className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                      target="_blank"
                    >
                      Join the Quest
                    </Link>

                  </div>
                </div>
              </section>

              <RelatedProgram program={relatedProgram} message="You can take advantage of yet another TaskOn quest to be eligible for your share of the 1250 USDT prize pool!" />
              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
