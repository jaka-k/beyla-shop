import Head from 'next/head';
import React from 'react';
import AboutElement from '../components/AboutElement';


function about() {
  return (
    <div>
      <Head>
        <title>Beyla - Apicosmetics</title>
      </Head>
      <AboutElement/>
      
    </div>
  );
}

export default about;
