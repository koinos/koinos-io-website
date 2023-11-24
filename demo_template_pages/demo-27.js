import Layout from "@/components/layout/Layout"
import Banner3_6 from "@/components/sections/Banner3_6"
import Brands1_22 from "@/components/sections/Brands1_22"
import Ct01_36 from "@/components/sections/Ct01_36"
import Ct01_37 from "@/components/sections/Ct01_37"
import Ct02_50 from "@/components/sections/Ct02_50"
import Ct02_51 from "@/components/sections/Ct02_51"
import Ct02_52 from "@/components/sections/Ct02_52"
import Ct08_6 from "@/components/sections/Ct08_6"
import Faqs3_16 from "@/components/sections/Faqs3_16"
import Features12_11 from "@/components/sections/Features12_11"
import Features2_25 from "@/components/sections/Features2_25"
import Features5_14 from "@/components/sections/Features5_14"
import Features7_5 from "@/components/sections/Features7_5"
import Hero27 from "@/components/sections/Hero27"
import Integrations2_12 from "@/components/sections/Integrations2_12"
import Lnk1_27 from "@/components/sections/Lnk1_27"
import Lnk2_26 from "@/components/sections/Lnk2_26"
import Lnk3_19 from "@/components/sections/Lnk3_19"
import Rating1_11 from "@/components/sections/Rating1_11"
import Reviews1_13 from "@/components/sections/Reviews1_13"
import Statistic1_22 from "@/components/sections/Statistic1_22"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark light-hero-header">
                <Hero27 />
                <Lnk1_27 />
                <Ct02_50 />
                <Ct01_36 />
                <Features7_5 />
                <Ct02_51 />
                <Lnk2_26 />
                <Brands1_22 />
                <hr className="divider" />
                <Lnk3_19 />
                <Features12_11 />
                <Ct02_52 />
                <Features5_14 />
                <Statistic1_22 />
                <hr className="divider" />
                <Ct08_6 />
                <Ct01_37 />
                <Features2_25 />
                <Integrations2_12 />
                <Faqs3_16 />
                <Reviews1_13 />
                <Rating1_11 />
                <Banner3_6 />
            </Layout>
        </>
    )
}