import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-00HF3CVKYC"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-00HF3CVKYC', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

/*

use framer motion path on image

<script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-00HF3CVKYC"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [] function gtag(){" "}
        {dataLayer.push(arguments)}
        gtag("js", new Date()) gtag("config", "G-00HF3CVKYC")
      </script>

*/
