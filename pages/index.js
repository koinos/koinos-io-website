import { useState } from "react";
import Layout from "@/components/layout/Layout";
//import Blog1_6 from "@/components/sections/Blog1_6"
import Partners from "@/components/sections/Partners";
import Roadmap from "@/components/sections/Roadmap";
import KoinosAdvantage from "@/components/sections/KoinosAdvantage";
import Hero27 from "@/components/sections/Hero27";
import Integrations1_1 from "@/components/sections/Integrations1_1";
//import Lnk3_13 from "@/components/sections/Lnk3_13"
import Newsletter1_1 from "@/components/sections/Newsletter1_1";
import Statistic5_1 from "@/components/sections/Statistic5_1";
import Community from "@/components/sections/Community";
import Ct08_1 from "@/components/sections/Ct08_1";
import Wallets from "@/components/sections/Wallets";
import ModalVideo from "react-modal-video";
import MediumBlog from "@/components/sections/MediumBlog";
import FeatureCommunity from "@/components/sections/FeatureCommunity"
import FeatureEcosystem from "@/components/sections/FeatureEcosystem"
import WhereToGetKOIN from "@/components/sections/WhereToGetKOIN"

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <Hero27 />

        <Statistic5_1 />

        <WhereToGetKOIN />

        <MediumBlog />

        <FeatureCommunity />

        <FeatureEcosystem />

        <Partners />

        <KoinosAdvantage />

        <Integrations1_1 />

        <Wallets />

        <Ct08_1 />

        <Community />

        <Roadmap />

        {/*
          <Blog1_6 />
          <Newsletter1_1 />
        */}

        <hr className="divider" />
      </Layout>
    </>
  );
}
