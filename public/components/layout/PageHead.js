import Head from 'next/head'

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <>
          <title>{headTitle ? headTitle : "Martex - Software, App, SaaS & Startup Nextjs Landing Pages Pack"}</title>
          
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Z72Z9YG2G"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-348XXW1GR2');
              `,
            }}
          />
        </>
      </Head>
    </>
  )
}

export default PageHead
