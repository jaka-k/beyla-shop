import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function CartProduct({ product, name, price, qty, image }) {

  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex items-center hover:bg-gray-100 mx px-6 py-5">
        <div className="flex w-2/5">
          {' '}
          {/* product */}
          <div className="w-20">
            <Image
              className="h-24"
              src={image}
              alt=""
              height="500vw"
              width="500vw"
            />
          </div>
          <div className="flex flex-col justify-around ml-4 flex-grow">
            <span className="font-bold text-sm">{name}</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs">
              Odstrani
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg onClick={(e) => dispatch(addToCart(product, qty--))} className="fill-current text-gray-600 w-3 cursor-pointer hover:text-gray-900" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={qty}
            onChange={(e) => dispatch(addToCart(product, Number(e.target.value)))}
          />
          <div >
          <svg onClick={(e) => dispatch(addToCart(product, qty++))} className="fill-current text-gray-600 w-3 cursor-pointer hover:text-gray-900" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
          </div>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          €{price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          €{price * qty}
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
