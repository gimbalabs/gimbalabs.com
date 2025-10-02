import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
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
