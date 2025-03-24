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

export default function LordsForsakenQuest() {
  const t = useTranslations('Programs.lordsForsakenQuest');
  const commonT = useTranslations('Programs.common');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.lordsForsakenQuest);

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
              <ProgramHeader 
                program={{
                  ...program,
                  featured: {
                    title: t('featured.title'),
                    subtitle: t('featured.subtitle'),
                    shortDescription: t('featured.shortDescription'),
                    description: t('featured.description'),
                    keyPoints: {
                      first: t('featured.keyPoints.first'),
                      second: t('featured.keyPoints.second'),
                      third: t('featured.keyPoints.third')
                    },
                    details: {
                      first: t('featured.details.first'),
                      second: t('featured.details.second'),
                      third: t('featured.details.third')
                    }
                  }
                }}
              />

              {/* Guide Section */}
              <section id="featured-program-tutorial" className="mb-5 ct-01 content-section features-section division">
                <div className="mt-5">
                  <div className="mt-5">
                    <h2 className="s-38 w-700 my-4">{t('getStarted')}</h2>

                    {/* Steps */}
                    <h3 className="s-30 w-700 my-4">{t('questTitle')}</h3>
                    <p>{t('description')}</p>
                    <ol>
                      <li>{t('steps.followLords')} <Link href="https://x.com/lordsforsak3n" className="underline">LordsForsak3n</Link></li>
                      <li>{t('steps.followKoinos')} <Link href="https://x.com/KoinosNetwork" className="underline">KoinosNetwork</Link></li>
                      <li>{t('steps.joinLordsTg')} <Link href="https://t.me/lordsforsaken" className="underline">Lord's Forsaken on Telegram</Link></li>
                      <li>{t('steps.joinKoinosTg')} <Link href="https://telegram.koinos.io/" className="underline">Koinos Telegram</Link></li>
                      <li>{t('steps.playGame')} <Link href="https://lordsforsaken.com/" className="underline">Lord's Forsaken</Link></li>
                      <li>{t('steps.postVictory')}</li>
                      <li>{t('steps.joinTaskon')} <Link href="https://taskon.xyz/Koinos" className="underline">Koinos on TaskOn</Link></li>
                    </ol>

                    <Link
                      href={program.website}
                      className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                      target="_blank"
                    >
                      {t('joinQuest')}
                    </Link>

                  </div>
                </div>
              </section>

              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    
    return {
      props: {
        messages,
        locale: locale
      }
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    return {
      notFound: true
    };
  }
}
