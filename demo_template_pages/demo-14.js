import Layout from "@/components/layout/Layout"
import Banner7_4 from "@/components/sections/Banner7_4"
import Brands1_12 from "@/components/sections/Brands1_12"
import Ct01_17 from "@/components/sections/Ct01_17"
import Ct01_18 from "@/components/sections/Ct01_18"
import Ct02_28 from "@/components/sections/Ct02_28"
import Ct02_29 from "@/components/sections/Ct02_29"
import Ct04_8 from "@/components/sections/Ct04_8"
import Faqs3_10 from "@/components/sections/Faqs3_10"
import Features11_2 from "@/components/sections/Features11_2"
import Features13_6 from "@/components/sections/Features13_6"
import Features2_12 from "@/components/sections/Features2_12"
import Hero14 from "@/components/sections/Hero14"
import Integrations1_4 from "@/components/sections/Integrations1_4"
import Lnk1_14 from "@/components/sections/Lnk1_14"
import Lnk2_14 from "@/components/sections/Lnk2_14"
import Lnk3_10 from "@/components/sections/Lnk3_10"
import Pricing3 from "@/components/sections/Pricing3"
import Reviews2_4 from "@/components/sections/Reviews2_4"
import Statistic1_11 from "@/components/sections/Statistic1_11"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero14 />
                <Statistic1_11 />
                <hr className="divider" />
                <Features11_2 />
                <Lnk1_14 />
                <Ct02_28 />
                <Ct01_17 />
                <Features2_12 />
                <Lnk2_14 />
                <Lnk3_10 />
                <Features13_6 />
                <Ct01_18 />
                <Ct02_29 />
                <Reviews2_4 />
                <Brands1_12 />
                <Pricing3 />
                <Ct04_8 />
                <Integrations1_4 />
                <Faqs3_10 />
                <Banner7_4 />
            </Layout>
        </>
    )
}