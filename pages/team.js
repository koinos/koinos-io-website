import { useState } from "react"
import Layout from "@/components/layout/Layout"
import TeamComponent from "@/components/sections/TeamComponent"


export default function Team() {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark light-hero-header"
      >

        <TeamComponent />
      </Layout>
    </>
  )
}
