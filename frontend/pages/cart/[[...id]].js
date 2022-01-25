import Head from 'next/head';
import { Link } from 'next/link';
import React, { useEffect, useState } from 'react';
import CartProduct from '../../components/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useRouter } from 'next/router';

function cart() {
  const [sumQty, setSumQty] = useState(0);
  const router = useRouter();
  const productId = router.query.id;
  const qty = router.query.qty ? Number(router.query.qty) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const totalQuantity = cartItems.reduce((a, b) => {
    return a + b.qty;
  }, 0);
  const totalSum = cartItems.reduce((a, b) => {
    return a + (b.qty * b.price)
  }, 0)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  return (
    <>
      <Head>
        <title>Beyla - Apicosmetics</title>
        <meta
          name="beyla apicosmetics shop"
          content="Beyla Apicosmetics - Natural Skincare"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-100 pt-6">
        <a
          onClick={() => router.back()}
          className="flex cursor-pointer font-semibold text-indigo-600 text-sm ml-4 pl-12">
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512">
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Nadaljuj z Nakupom
        </a>
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row shadow-md my-10">
            <div className="p-2 lg:w-3/4 bg-white lg:p-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-lg lg:text-2xl">Košarica</h1>
                <h2 className="font-semibold text-lg lg:text-2xl">
                  {totalQuantity} Izdelki
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Izdelki
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Količina
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Cena
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                  Skupaj
                </h3>
              </div>
              {cartItems
                ? cartItems.map((item) => {
                    return (
                      <CartProduct
                        key={item.image}
                        product={item.product}
                        name={item.name}
                        price={item.price}
                        qty={item.qty}
                        image={item.image}
                      />
                    );
                  })
                : ''}
            </div>

            <div id="summary" className=" px-8 py-10">
              <h1 className="font-semibod text-2xl border-b pb-8">Naročilo</h1>

              <div className="flex justify-between">
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Dostava
                </label>
                <select className="block p-2 text-gray-600 text-sm">
                  <option>Standard Dostava - $10.00</option>
                  <option>Hitra Dostava - $18.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promocijska Koda
                </label>
                <input
                  defaultValue={'SALE10'}
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Uporabi
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Skupaj</span>
                  <span>€ {totalSum}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Plačaj
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default cart;
