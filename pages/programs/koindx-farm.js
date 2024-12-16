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

export default function KoinDXFarm() {
  const t = useTranslations('Programs.koindxFarm');
  const commonT = useTranslations('Programs.common');
  const earnOnKoinosT = useTranslations('Programs.earnOnKoinos');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Get metadata from state
  const program = useProgramStore((state) => state.programs.koindxFarm);
  const relatedProgram = useProgramStore((state) => state.programs.earnOnKoinos);

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
                      second: t('featured.details.second')
                    }
                  }
                }} 
              />

              <RelatedProgram
                program={relatedProgram}
                message={t('relatedMessage')}
              />
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
