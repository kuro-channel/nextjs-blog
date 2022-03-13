import Head from "next/head"
import Link from "next/dist/client/link"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                    {/* <script src="https://connect.facebook.net/en_us/sdk.js"/> */}
                </Head>
                <Script
                    src="https://connect.facebook.net/en_us/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log('script loaded correctly!')
                    }
                />
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}