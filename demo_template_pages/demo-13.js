import Layout from "@/components/layout/Layout"
import Banner13_5 from "@/components/sections/Banner13_5"
import Brands1_11 from "@/components/sections/Brands1_11"
import Ct01_15 from "@/components/sections/Ct01_15"
import Ct01_16 from "@/components/sections/Ct01_16"
import Ct02_27 from "@/components/sections/Ct02_27"
import Ct03_6 from "@/components/sections/Ct03_6"
import Ct04_7 from "@/components/sections/Ct04_7"
import Faqs3_9 from "@/components/sections/Faqs3_9"
import Features13_5 from "@/components/sections/Features13_5"
import Features1_2 from "@/components/sections/Features1_2"
import Features5_8 from "@/components/sections/Features5_8"
import Hero13 from "@/components/sections/Hero13"
import Integrations2_6 from "@/components/sections/Integrations2_6"
import Lnk1_13 from "@/components/sections/Lnk1_13"
import Lnk2_13 from "@/components/sections/Lnk2_13"
import Reviews2_3 from "@/components/sections/Reviews2_3"
import Statistic5_3 from "@/components/sections/Statistic5_3"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero13 />
                <Statistic5_3 />
                <hr className="divider" />
                <Features13_5 />
                <Lnk1_13 />
                <Ct02_27 />
                <Lnk2_13 />
                <Ct01_15 />
                <Ct03_6 />
                <Features1_2 />
                <Integrations2_6 />
                <Ct01_16 />
                <Features5_8 />
                <Reviews2_3 />
                <Brands1_11 />
                <Ct04_7 />
                <Faqs3_9 />
                <Banner13_5 />
            </Layout>
        </>
    )
}