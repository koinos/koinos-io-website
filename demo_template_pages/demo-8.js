import Layout from "@/components/layout/Layout"
import Banner13_2 from "@/components/sections/Banner13_2"
import Brands1_6 from "@/components/sections/Brands1_6"
import Ct02_15 from "@/components/sections/Ct02_15"
import Ct02_16 from "@/components/sections/Ct02_16"
import Ct02_17 from "@/components/sections/Ct02_17"
import Ct04_4 from "@/components/sections/Ct04_4"
import Faqs3_7 from "@/components/sections/Faqs3_7"
import Features12_4 from "@/components/sections/Features12_4"
import Features2_8 from "@/components/sections/Features2_8"
import Features5_6 from "@/components/sections/Features5_6"
import Features6_4 from "@/components/sections/Features6_4"
import Hero8 from "@/components/sections/Hero8"
import Integrations1_3 from "@/components/sections/Integrations1_3"
import Lnk1_8 from "@/components/sections/Lnk1_8"
import Lnk2_8 from "@/components/sections/Lnk2_8"
import Lnk3_6 from "@/components/sections/Lnk3_6"
import Reviews1_5 from "@/components/sections/Reviews1_5"
import Statistic1_8 from "@/components/sections/Statistic1_8"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero8 />
                <Brands1_6 />
                <Features2_8 />
                <Lnk1_8 />
                <Lnk2_8 />
                <Features12_4 />
                <Statistic1_8 />
                <hr className="divider" />
                <Ct02_15 />
                <Lnk3_6 />
                <Features6_4 />
                <hr className="divider" />
                <Ct02_16 />
                <Features5_6 />
                <Integrations1_3 />
                <Ct02_17 />
                <Ct04_4 />
                <Reviews1_5 />
                <Faqs3_7 />
                <Banner13_2 />
            </Layout>
        </>
    )
}