import { useState } from "react";
import Layout from "@/components/layout/Layout";
//import Blog1_6 from "@/components/sections/Blog1_6"
import Exchanges from "@/components/sections/Exchanges";
import Roadmap from "@/components/sections/Roadmap";
import Features11_1 from "@/components/sections/Features11_1";
import Hero27 from "@/components/sections/Hero27";
import Integrations1_1 from "@/components/sections/Integrations1_1";
//import Lnk3_13 from "@/components/sections/Lnk3_13"
import Newsletter1_1 from "@/components/sections/Newsletter1_1";
import Statistic5_1 from "@/components/sections/Statistic5_1";
import Team from "@/components/sections/Team";
import Community from "@/components/sections/Community";
import Ct08_1 from "@/components/sections/Ct08_1";
import Wallets from "@/components/sections/Wallets";
import ModalVideo from "react-modal-video";
import MediumBlog from "@/components/sections/MediumBlog";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >
        <ModalVideo
          channel="youtube"
          videoId="2L5ZnZXGCXk"
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
        <Hero27 onOpenModal={() => setModalOpen(true)} />

        <Statistic5_1 />

        <MediumBlog />

        <Exchanges />
        
        { false && <Features11_1 /> }

        < Wallets />

        { false && <Integrations1_1 /> }

        { false && <Team /> }

        { false &&  <Ct08_1 /> }

        { false && <Community /> }

        { false && <Roadmap /> }

        {/*
          <Blog1_6 />
          <Newsletter1_1 />
        */}

        <hr className="divider" />
      </Layout>
    </>
  );
}
