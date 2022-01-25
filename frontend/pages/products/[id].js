import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../redux/actions/productActions';
import Button from '../../components/Button';
import { useState } from 'react';
import Link from 'next/link';

function ProductDetails() {
  const [product, setProduct] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  console.log(products);

  useEffect(() => {
    if (!loading) {
      const product = products.find((p) => {
        console.log(p._id);
        console.log(router.query.id);

        return p._id === router.query.id;
      });
      if (product) {
        setProduct(product);
      }
    }
  }, [products, loading, router]);

  console.log(product);

  return (
    <>
      {!product ? (
        <h2 className="p-12 m-24">Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="container px-5 py-12 mx-auto">
          <nav class="md:ml-auto md:mr-auto mb-12 flex flex-wrap items-center font-semibold justify-center">
            <Link href="/products/61e9aeb603aaf15f42d37dac">
              <a class="mr-5 hover:text-indigo-500 hover:underline">Propolis</a>
            </Link>
            <p className='mr-8'>|</p>
            <Link href="/products/61e9aeb603aaf15f42d37dad">
              <a class="mr-5 hover:text-indigo-500 hover:underline">Beauty</a>
            </Link>
            <p className='mr-8'>|</p>
            <Link href="/products/61e9aeb603aaf15f42d37dae">
              <a class="mr-5 hover:text-indigo-500 hover:underline">Power</a>
            </Link>
          </nav>
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={product.image}
              alt="Skincare cream"
              height="230vw"
              width="230vw"
              className="object-center object-cover"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Količina</span>
                  <div className="relative">
                    <select
                      onChange={(e) => setQty(e.target.value)}
                      defaultValue={qty}
                      className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €{product.price}
                </span>
                <Button href={`/cart/${router.query.id}?qty=${qty}`}>
                  V Košarico
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
