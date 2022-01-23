import Link from 'next/link';
import React from 'react';

function Button({children, className, href}) {
  return (
    <>
      {href ? (
        <Link href={href} passhref>
          <button
           type="button"
           className={`flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded active:scale-90 duration-150 hover:shadow-xl ${className}`}>
            {children}
          </button>
        </Link>
      ) : (
        <button
        type="button"
        className={`flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded active:scale-90 duration-150 hover:shadow-xl ${className}`}>
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
