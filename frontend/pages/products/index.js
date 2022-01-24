import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux';
import ProductDetails from './[id]';


function products() {
 
  

  
    return (
        <>
        <Head>
        <title>Beyla - Apicosmetics</title>
      </Head>
        <section className="text-gray-700 bg-gray-100 body-font overflow-hidden">
        <ProductDetails/>
      </section>
      </>
    )
}

export default products
