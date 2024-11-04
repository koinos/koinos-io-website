import Head from 'next/head'

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <>
          <title>{headTitle ? headTitle : "Web3 for Everyone | Koinos"}</title>
        </>
      </Head>
    </>
  )
}

export default PageHead