import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AltButton from './AltButton';
import Button from './Button';

const ProductTile = ({ name, image, category, price, id }) => (
  <div className="group relative">
    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <Link href={`/products/${id}`}>
        <a>
        <Image
          src={image}
          alt="Skincare"
          layout="fill"
          className="w-full h-full object-center object-cover"
          />
          </a>
      </Link>
    </div>

    <p className="text-base uppercase mt-6 mb-6 font-semibold text-gray-900">
      {name}
    </p>
    <div className="flex space-x-12">
      <span className="title-font font-medium text-2xl text-gray-900">
        €{price}
      </span>
      <div className='flex space-x-4'>
      <Button href={`/cart/${id}?qty=1`}>V Košaro</Button>
      <AltButton href={`/products/${id}`}>Več...</AltButton>
      </div>
    </div>
  </div>
)

export default ProductTile;
