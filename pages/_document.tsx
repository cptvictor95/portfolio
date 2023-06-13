import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const MyDocument: React.FC<Document> = () => {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Victor Pudo's full stack web developer website and blog."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
