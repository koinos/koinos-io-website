import Layout from "@/components/layout/Layout"
import Banner13_11 from "@/components/sections/Banner13_11"
import Brands1_19 from "@/components/sections/Brands1_19"
import Ct01_30 from "@/components/sections/Ct01_30"
import Ct02_46 from "@/components/sections/Ct02_46"
import Ct02_47 from "@/components/sections/Ct02_47"
import Ct02_48 from "@/components/sections/Ct02_48"
import Ct04_17 from "@/components/sections/Ct04_17"
import Faqs3_14 from "@/components/sections/Faqs3_14"
import Features11_11 from "@/components/sections/Features11_11"
import Features2_22 from "@/components/sections/Features2_22"
import Features7_3 from "@/components/sections/Features7_3"
import Hero24 from "@/components/sections/Hero24"
import Integrations2_10 from "@/components/sections/Integrations2_10"
import Lnk1_24 from "@/components/sections/Lnk1_24"
import Lnk2_23 from "@/components/sections/Lnk2_23"
import Lnk3_16 from "@/components/sections/Lnk3_16"
import Pricing3 from "@/components/sections/Pricing3"
import Rating1_8 from "@/components/sections/Rating1_8"
import Reviews2_9 from "@/components/sections/Reviews2_9"
import Statistic1_20 from "@/components/sections/Statistic1_20"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-light">
                <Hero24 />
                <Brands1_19 />
                <Lnk1_24 />
                <Features7_3 />
                <Ct02_46 />
                <Features2_22 />
                <Lnk2_23 />
                <Features11_11 />
                <hr className="divider" />
                <Statistic1_20 />
                <hr className="divider" />
                <Ct02_47 />
                <Ct04_17 />
                <Lnk3_16 />
                <Ct01_30 />
                <Integrations2_10 />
                <Ct02_48 />
                <Reviews2_9 />
                <Rating1_8 />
                <hr className="divider" />
                <Pricing3 />
                <Faqs3_14 />
                <Banner13_11 />
            </Layout>
        </>
    )
}