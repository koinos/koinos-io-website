import Layout from "@/components/layout/Layout"
import Banner7_5 from "@/components/sections/Banner7_5"
import Brands1_13 from "@/components/sections/Brands1_13"
import Ct01_19 from "@/components/sections/Ct01_19"
import Ct02_30 from "@/components/sections/Ct02_30"
import Ct02_31 from "@/components/sections/Ct02_31"
import Ct04_9 from "@/components/sections/Ct04_9"
import Faqs3_11 from "@/components/sections/Faqs3_11"
import Features11_3 from "@/components/sections/Features11_3"
import Features2_13 from "@/components/sections/Features2_13"
import Hero15 from "@/components/sections/Hero15"
import Integrations2_7 from "@/components/sections/Integrations2_7"
import Lnk1_15 from "@/components/sections/Lnk1_15"
import Lnk2_15 from "@/components/sections/Lnk2_15"
import Lnk3_11 from "@/components/sections/Lnk3_11"
import Lnk4_2 from "@/components/sections/Lnk4_2"
import Reviews2_5 from "@/components/sections/Reviews2_5"
import Statistic1_12 from "@/components/sections/Statistic1_12"
import Wswrapper_6 from "@/components/sections/Wswrapper_6"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero15 />
                <Statistic1_12 />
                <hr className="divider" />
                <Features2_13 />
                <Wswrapper_6 />
                <Ct01_19 />
                <Features11_3 />
                <Lnk1_15 />
                <Ct02_30 />
                <Lnk2_15 />
                <Lnk3_11 />
                <Integrations2_7 />
                <Ct02_31 />
                <Ct04_9 />
                <Reviews2_5 />
                <Brands1_13 />
                <hr className="divider" />
                <Faqs3_11 />
                <Lnk4_2 />
                <Banner7_5 />
                <hr className="divider" />
            </Layout>
        </>
    )
}