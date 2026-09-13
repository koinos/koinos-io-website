import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useRouter } from "next/router";
import LocalizedHead from "@/components/i18n/LocalizedHead";

export default function KoinDXFarm() {
  const router = useRouter();
  const isSpanish = router.locale === "es";
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.koindxFarm);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark inner-page-header"
        headTitle="KoinDX Farm | Koinos"
      >
        <LocalizedHead
          pathname="/programs/koindx-farm"
          title="KoinDX Farm | Koinos"
          description={isSpanish ? "Información sobre KoinDX Farm y cómo conseguir KOINDX aportando liquidez." : "Information about KoinDX Farm and earning KOINDX by providing liquidity."}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <ProgramHeader program={program} />
              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
