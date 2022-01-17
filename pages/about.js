import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function about() {
  return (
    <div>
      <Head>
        <title>Beyla - Apicosmetics</title>
        <meta
          name="beyla apicosmetics shop"
          content="Beyla Apicosmetics - Natural Skincare"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}

export default about;
