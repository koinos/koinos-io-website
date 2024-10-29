import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore";
import JoinTheCommunity from "@/components/sections/JoinTheCommunity"
import ProgramHeader from "@/components/sections/ProgramHeader"
import RelatedProgram from "@/components/sections/RelatedProgram"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function KoinDXFarm() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const program = useProgramStore((state) => state.programs.koindxFarm);
  const relatedProgram = useProgramStore((state) => state.programs.earnOnKoinos);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
        headTitle="KoinDX Farm | Koinos"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              <ProgramHeader program={program} />

              <RelatedProgram
                program={relatedProgram}
                message={"By providing liquidity with your bridged assets from Earn on Koinos, you can earn both APY on USDT, ETH, and BTC as well as KOIN while earning KOINDX simultaneously!"}
              />
              <JoinTheCommunity />
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}
