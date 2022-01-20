import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'

function cart() {
    return (
        <>
        <Head>
        <title>Beyla - Apicosmetics</title>
        <meta name="beyla apicosmetics shop" content="Beyla Apicosmetics - Natural Skincare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className="bg-gray-100">
        <a href="#" className="flex font-semibold text-indigo-600 text-sm ml-4 mt-6">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Nadaljuj z Nakupom
        </a>
  <div className="container mx-auto mt-10">
    <div className="flex flex-col lg:flex-row shadow-md my-10">
      <div className="p-2 lg:w-3/4 bg-white lg:p-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-lg lg:text-2xl">Košarica</h1>
          <h2 className="font-semibold text-lg lg:text-2xl">3 Izdelki</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Količina</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Cena</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Skupaj</h3>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> {/* product */}
            <div className="w-20">
              <Image className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" height="500vw" width="500vw"/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Iphone 6S</span>
              <span className="text-red-500 text-xs">Apple</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        </div>

        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> {/* product */}
            <div className="w-20">
              <Image className="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt="" height="500vw" width="500vw"/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Xiaomi Mi 20000mAh</span>
              <span className="text-red-500 text-xs">Xiaomi</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
        </div>

        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> {/* product */}
            <div className="w-20">
              <Image className="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt="" height="500vw" width="500vw"/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">Airpods</span>
              <span className="text-red-500 text-xs">Apple</span>
              <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
          <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
        </div>

        
      </div>

      <div id="summary" className=" px-8 py-10">
        <h1 className="font-semibod text-2xl border-b pb-8">Naročilo</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Izdelki 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Dostava</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard Dostava - $10.00</option>
            <option>Hitra Dostava - $18.00</option>
          </select>
        </div>
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promocijska Koda</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Uporabi</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Skupaj</span>
            <span>$600</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Plačaj</button>
        </div>
      </div>

    </div>
      
  </div>
</body>
        </>
    )
}

export default cart
