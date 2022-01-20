import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

function ProductGrid() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto pt-4 pb-16 sm:pb-24 lg:pb-32 lg:max-w-none">
          <h2 className="text-2xl font-bold pt-4 pb-4 text-gray-900">
            Ponudba
          </h2>
          <p className="pt-4">
            Dolor magna eget est lorem. Proin libero nunc consequat interdum
            varius sit amet mattis. Sed risus ultricies tristique nulla aliquet
            enim tortor at auctor. Laoreet id donec ultrices tincidunt arcu.
          </p>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link href="/products" passHref>
                  <Image
                    src="https://images.unsplash.com/photo-1599305090598-fe179d501227"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    layout="fill"
                    className="w-full h-full object-center object-cover"
                  />
                </Link>
              </div>

              <p className="text-base uppercase mt-6 font-semibold text-gray-900">
                Propolis
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €38.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link href="/products" passHref>
                  <Image
                    src="https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28"
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    layout="fill"
                    className="w-full h-full object-center object-cover"
                  />
                </Link>
              </div>

              <p className="text-base mt-6 uppercase font-semibold text-gray-900">
                Beauty
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €32.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Link href="/products" passHref>
                  <Image
                    src="https://images.unsplash.com/photo-1611080541716-4de04385fbae"
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    layout="fill"
                    className="w-full h-full object-center object-cover"
                  />
                </Link>
              </div>
              <p className="text-base uppercase mt-6 font-semibold text-gray-900">
                Power
              </p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  €33.50
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
