import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <>
                    {headTitle ? headTitle : "Martex - Software, App, SaaS & Startup Nextjs Landing Pages Pack"}
                </>
            </Head>
        </>
    )
}

export default PageHead