import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-152RXC8WQ2" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-152RXC8WQ2');`,
                    }}
                />

                {/* Basic SEO */}
                <meta name="description" content="Open, replicable safe spaces to learn and collaborate." />

                {/* Open Graph defaults */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Gimbalabs" />
                <meta property="og:description" content="Open, replicable safe spaces to learn and collaborate." />
                <meta property="og:url" content="https://gimbalabs.com/" />
                <meta property="og:image" content="https://gimbalabs.com/gimbalabs_og.png" />
               
                {/* Twitter defaults */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gimbalabs" />
                <meta name="twitter:description" content="Open, replicable safe spaces to learn and collaborate." />
                <meta name="twitter:image" content="https://gimbalabs.com/gimbalabs_og.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
