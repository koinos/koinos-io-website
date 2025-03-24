import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/Team"


export default function TeamPage() {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark light-hero-header"
        headTitle="Who We Are | Koinos"
      >

        <Team />
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}
