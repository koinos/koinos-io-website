import Layout from "@/components/layout/Layout";
import Partners from "@/components/sections/Partners";
import Roadmap from "@/components/sections/Roadmap";
import KoinosAdvantage from "@/components/sections/KoinosAdvantage";
import Hero27 from "@/components/sections/Hero27";
import Integrations1_1 from "@/components/sections/Integrations1_1";
import ChainStatistics from "@/components/sections/ChainStatistics";
import Community from "@/components/sections/Community";
import Wallets from "@/components/sections/Wallets";
import MediumBlog from "@/components/sections/MediumBlog";
import FeatureCommunity from "@/components/sections/FeatureCommunity"
import FeatureEcosystem from "@/components/sections/FeatureEcosystem"
import WhereToGetKOIN from "@/components/sections/WhereToGetKOIN"
import TokenAllocation from "@/components/sections/TokenAllocation"

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <Hero27 />

        <ChainStatistics />

        <WhereToGetKOIN />

        <MediumBlog />

        <FeatureCommunity />

        <FeatureEcosystem />

        <Partners />

        <KoinosAdvantage />

        <Integrations1_1 />

        <Wallets />

        <TokenAllocation />

        <Community />

        <Roadmap />

        <hr className="divider" />
      </Layout>
    </>
  );
}
