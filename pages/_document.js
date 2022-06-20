import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="fa-IR" dir="rtl">
            <Head >
                <title>فروشگاه مانلی | Manelie Clothing</title>
                <meta name="description" content="فروشگاه مانلی، تجربه ای دلنشین از خرید." />
                <link rel="icon" href="/vercel.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Vazirmatn:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}