import Link from 'next/link';
import React from 'react';

function AltButton ({ className, children, href }) {
  return (
    <>
      {href ? (
        <Link href={href} passhref>
          <button
            type="button"
            className={`flex w-10 h-10 px-10 bg-gray-200 p-0 border-0 items-center justify-center text-gray-500 rounded active:scale-90 duration-150 hover:shadow-xl ${className}`}>
            {children}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={`flex w-10 h-10 px-10 bg-gray-200 p-0 border-0 items-center justify-center text-gray-500 rounded active:scale-90 duration-150 hover:shadow-xl ${className}`}>
          {children}
        </button>
      )}
    </>
  );
}

export default AltButton;
