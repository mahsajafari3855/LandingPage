import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* GTM code to be added in the <head> section */}

          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtm.js?id=GTM-WT7K7LBS`}
          />
        </Head>
        <body>
          {/* GTM code to be added immediately after the opening <body> tag */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WT7K7LBS"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
