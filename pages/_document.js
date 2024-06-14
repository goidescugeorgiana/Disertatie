// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* Add your CSS files here */}
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
