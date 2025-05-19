import Layout from "@/components/layout/Layout";
import Partners from "@/components/sections/Partners";
import Roadmap from "@/components/sections/Roadmap";
import KoinosAdvantage from "@/components/sections/KoinosAdvantage";
import KoinosHero from "@/components/sections/KoinosHero";
import Wallets from "@/components/sections/Wallets";
import MediumBlog from "@/components/sections/MediumBlog";
import FeatureCommunity from "@/components/sections/FeatureCommunity"
import FeatureEcosystem from "@/components/sections/FeatureEcosystem"
import WhereToGetKOIN from "@/components/sections/WhereToGetKOIN"
import TokenAllocation from "@/components/sections/TokenAllocation"
import FeaturedProgram from "@/components/sections/FeaturedProgram"

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function IndexPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark light-hero-header"
        headerTitle="Web3 for Everyone | Koinos"
      >
        <KoinosHero />

        <FeaturedProgram />

        <FeatureEcosystem />

        <FeatureCommunity />

        <TokenAllocation />

        <Partners />

        <WhereToGetKOIN />

        <MediumBlog />

        <KoinosAdvantage />

        <Wallets />

        <Roadmap />

        <hr className="divider" />
      </Layout>
    </>
  );
}
