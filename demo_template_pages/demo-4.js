import Layout from "@/components/layout/Layout"
import Banner13_1 from "@/components/sections/Banner13_1"
import Blog1_1 from "@/components/sections/Blog1_1"
import Brands1_3 from "@/components/sections/Brands1_3"
import Ct01_5 from "@/components/sections/Ct01_5"
import Ct01_6 from "@/components/sections/Ct01_6"
import Ct02_8 from "@/components/sections/Ct02_8"
import Ct02_9 from "@/components/sections/Ct02_9"
import Ct03_2 from "@/components/sections/Ct03_2"
import Faqs3_4 from "@/components/sections/Faqs3_4"
import Features2_4 from "@/components/sections/Features2_4"
import Features6_2 from "@/components/sections/Features6_2"
import Features7_6 from "@/components/sections/Features7_6"
import Hero4 from "@/components/sections/Hero4"
import Integrations2_3 from "@/components/sections/Integrations2_3"
import Lnk1_4 from "@/components/sections/Lnk1_4"
import Lnk2_4 from "@/components/sections/Lnk2_4"
import Newsletter1_1 from "@/components/sections/Newsletter1_1"
import Rating1_2 from "@/components/sections/Rating1_2"
import Reviews3_3 from "@/components/sections/Reviews3_3"
import Statistic1_4 from "@/components/sections/Statistic1_4"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero4 />
                <Brands1_3 />
                <hr className="divider" />
                <Features6_2 />
                <hr className="divider" />
                <Lnk1_4 />
                <Features2_4 />
                <Lnk2_4 />
                <Statistic1_4 />
                <hr className="divider" />
                <Ct02_8 />
                <Features7_6 />
                <Ct01_5 />
                <Ct03_2 />
                <Integrations2_3 />
                <Ct02_9 />
                <Ct01_6 />
                <Reviews3_3 />
                <Rating1_2 />
                <hr className="divider" />
                <Faqs3_4 />
                <Banner13_1 />
                <Blog1_1 />
                <hr className="divider" />
                <Newsletter1_1 />
                <hr className="divider" />
            </Layout>
        </>
    )
}