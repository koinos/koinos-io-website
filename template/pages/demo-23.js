import Layout from "@/components/layout/Layout"
import Banner16_2 from "@/components/sections/Banner16_2"
import Banner7_7 from "@/components/sections/Banner7_7"
import Brands1_18 from "@/components/sections/Brands1_18"
import Ct01_28 from "@/components/sections/Ct01_28"
import Ct01_29 from "@/components/sections/Ct01_29"
import Ct02_44 from "@/components/sections/Ct02_44"
import Ct02_45 from "@/components/sections/Ct02_45"
import Ct03_10 from "@/components/sections/Ct03_10"
import Ct04_16 from "@/components/sections/Ct04_16"
import Features11_10 from "@/components/sections/Features11_10"
import Features12_10 from "@/components/sections/Features12_10"
import Features2_21 from "@/components/sections/Features2_21"
import Features5_12 from "@/components/sections/Features5_12"
import Hero23 from "@/components/sections/Hero23"
import Integrations2_9 from "@/components/sections/Integrations2_9"
import Lnk1_23 from "@/components/sections/Lnk1_23"
import Lnk2_22 from "@/components/sections/Lnk2_22"
import Reviews2_8 from "@/components/sections/Reviews2_8"
import Statistic1_19 from "@/components/sections/Statistic1_19"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero23 />
                <Brands1_18 />
                <hr className="divider" />
                <Lnk1_23 />
                <Ct01_28 />
                <Ct02_44 />
                <Features12_10 />
                <Ct01_29 />
                <Features5_12 />
                <Statistic1_19 />
                <hr className="divider" />
                <Lnk2_22 />
                <Features11_10 />
                <Ct03_10 />
                <Features2_21 />
                <hr className="divider" />
                <Ct04_16 />
                <Integrations2_9 />
                <Ct02_45 />
                <Banner16_2 />
                <Reviews2_8 />
                <Banner7_7 />
                <hr className="divider" />
            </Layout>
        </>
    )
}