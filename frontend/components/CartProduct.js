import Image from 'next/image';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

function CartProduct({ product, name, price, qty, image }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(qty);

  const subtractProductQuantity = () => {
    if (inputValue <= 1) return;
    setInputValue(inputValue - 1);
  };
  const addProductQuantity = () => {
    setInputValue(inputValue + 1);
  };

  useEffect(() => {
    dispatch(addToCart(product, inputValue));
  }, [inputValue]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

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
              onClick={() => removeFromCartHandler(product)}
              className="font-semibold hover:text-red-500 text-gray-500 text-xs">
              Odstrani
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button
            onClick={() => subtractProductQuantity()}
            className="fill-current text-gray-600 text-2xl font-bold w-5 cursor-pointer hover:text-gray-900">
            -
          </button>
          <input
            className="mx-2 border text-center w-8"
            type="text"
            value={inputValue}
            onChange={(e) =>
              dispatch(addToCart(product, Number(e.target.value)))
            }
          />
          <button
            onClick={() => addProductQuantity()}
            className="fill-current text-gray-600 text-2xl font-bold w-5 cursor-pointer hover:text-gray-900">
            +
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">
          €{price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          €{price * inputValue}
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
