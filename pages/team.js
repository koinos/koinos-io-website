import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/Team"
import { useRouter } from "next/router"
import LocalizedHead from "@/components/i18n/LocalizedHead"


export default function TeamPage() {
  const router = useRouter()
  const isSpanish = router.locale === "es"
  const headTitle = isSpanish ? "Quiénes somos | Koinos" : "Who We Are | Koinos"
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        headerCls="navbar-dark light-hero-header"
        headTitle={headTitle}
      >
        <LocalizedHead
          pathname="/team"
          title={headTitle}
          description={isSpanish ? "Conoce al equipo y a los colaboradores de la comunidad de Koinos." : "Meet the Koinos team and community contributors."}
        />
        <Team />
      </Layout>
    </>
  )
}
