import Layout from "@/components/layout/Layout";
import Partners from "@/components/sections/Partners";
import Roadmap from "@/components/sections/Roadmap";
import KoinosAdvantage from "@/components/sections/KoinosAdvantage";
import KoinosHero from "@/components/sections/KoinosHero";
import ChainStatistics from "@/components/sections/ChainStatistics";
import Wallets from "@/components/sections/Wallets";
import MediumBlog from "@/components/sections/MediumBlog";
import FeatureCommunity from "@/components/sections/FeatureCommunity"
import FeatureEcosystem from "@/components/sections/FeatureEcosystem"
import WhereToGetKOIN from "@/components/sections/WhereToGetKOIN"
import TokenAllocation from "@/components/sections/TokenAllocation"
import FeaturedProgram from "@/components/sections/FeaturedProgram"

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
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

        <ChainStatistics />

        <Wallets />

        <Roadmap />

        <hr className="divider" />
      </Layout>
    </>
  );
}
