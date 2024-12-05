import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"
import RelatedProgram from "@/components/sections/RelatedProgram"
import { useTranslations } from "next-intl";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function EarnOnKoinos() {
  const t = useTranslations('Programs.earnOnKoinos');

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
        headTitle={t('pageTitle')}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <ProgramHeader program={program} />

              {/* Guide Section */}
              <section id="featured-program-tutorial" className="mb-5 ct-01 content-section features-section division">
                <div className="mt-5">
                  <div className="mt-5">
                    <h2 className="s-38 w-700 my-4">{t('getStarted')}</h2>

                    {/* Step 1 */}
                    <h3 className="s-30 w-700 my-4">{t('step1.title')}</h3>
                    <ol>
                      <li>{t('step1.steps.install')} <Link href="https://chromewebstore.google.com/detail/kondor/ghipkefkpgkladckmlmdnadmcchefhjl" className="underline">Kondor</Link></li>
                      <li>{t('step1.steps.setup')}</li>
                      <li>{t('step1.steps.store')}</li>
                    </ol>

                    {/* Step 2 */}
                    <h3 className="s-30 w-700 my-4">{t('step2.title')}</h3>
                    <ol>
                      <li>{t('step2.steps.access')} <Link href="https://dapp.chainge.finance/earn?chain=KOIN" className="underline">Chainge Bridge</Link></li>
                      <li>{t('step2.steps.connect')}</li>
                      <li>{t('step2.steps.enter')}</li>
                      <li>{t('step2.steps.bridge')}</li>
                    </ol>

                    {/* Step 3 */}
                    <h3 className="s-30 w-700 my-4">{t('step3.title')}</h3>
                    <p>{t('step3.description')}</p>
                    <ol>
                      <li>{t('step3.steps.access')} <Link href="https://dapp.chainge.finance/earn?chain=KOIN" className="underline">Chainge Bridge</Link></li>
                      <li>{t('step3.steps.connect')}</li>
                      <li>{t('step3.steps.claim')}</li>
                    </ol>

                  </div>
                </div>
              </section>

              <RelatedProgram
                program={relatedProgram}
                message={t('koindxFarm.relatedMessage', {}, { fallback: "By using your bridged assets from the Earn on Koinos program and providing liquidity on KoinDX you can maximize your earnings." })}
              />
              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
