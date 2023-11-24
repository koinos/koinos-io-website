import Layout from "@/components/layout/Layout"
import Banner13_10 from "@/components/sections/Banner13_10"
import Blog1_8 from "@/components/sections/Blog1_8"
import Ct01_27 from "@/components/sections/Ct01_27"
import Ct02_41 from "@/components/sections/Ct02_41"
import Ct02_42 from "@/components/sections/Ct02_42"
import Ct02_43 from "@/components/sections/Ct02_43"
import Ct03_9 from "@/components/sections/Ct03_9"
import Features11_9 from "@/components/sections/Features11_9"
import Features12_9 from "@/components/sections/Features12_9"
import Features2_20 from "@/components/sections/Features2_20"
import Features5_11 from "@/components/sections/Features5_11"
import Hero22 from "@/components/sections/Hero22"
import Integrations2_8 from "@/components/sections/Integrations2_8"
import Lnk1_22 from "@/components/sections/Lnk1_22"
import Lnk2_21 from "@/components/sections/Lnk2_21"
import Lnk3_15 from "@/components/sections/Lnk3_15"
import Lnk4_4 from "@/components/sections/Lnk4_4"
import Newsletter1_7 from "@/components/sections/Newsletter1_7"
import Reviews1_12 from "@/components/sections/Reviews1_12"
import Statistic1_18 from "@/components/sections/Statistic1_18"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero22 />
                <Features2_20 />
                <Lnk1_22 />
                <Ct02_41 />
                <Features11_9 />
                <Ct01_27 />
                <Lnk2_21 />
                <Statistic1_18 />
                <hr className="divider" />
                <Features5_11 />
                <Lnk3_15 />
                <hr className="divider" />
                <Features12_9 />
                <Ct02_42 />
                <Integrations2_8 />
                <Ct03_9 />
                <Ct02_43 />
                <Reviews1_12 />
                <Lnk4_4 />
                <Banner13_10 />
                <Blog1_8 />
                <hr className="divider" />
                <Newsletter1_7 />
                <hr className="divider" />
            </Layout>
        </>
    )
}