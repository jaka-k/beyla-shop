import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CartIcon from './icons/CartIcon';
import Logo from './icons/LogoIcon';
import MenuIcon from './icons/MenuIcon';
import UserIcon from './icons/UserIcon';

export default function Header() {
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const body = document.getElementsByTagName('body');

    if (showMenu) {
      body[0].className = 'overflow-hidden';
    } else {
      body[0].className = '';
    }
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, [router.pathname]);

  return (
    <div className="bg-gray-900">
      <div>
        <div className="relative">
          <div className="bg-gray-900 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/" passHref>
                <h1
                  className="flex items-center text-3xl cursor-pointer hover:stroke-gray-300 hover:text-gray-300 text-white stroke-white"
                  aria-label="Beyla Logo">
                  <Logo className="h-14 stroke-white hover:stroke-gray-300" />
                  <span className="pl-4 pt-2 font-thin tracking-[.3em]">
                    BEYLA
                  </span>
                </h1>
              </Link>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <Link href="/">
                    <a className="text-white text-base  focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Domov
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/61e9aeb603aaf15f42d37dac">
                    <a className="text-white text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Izdelki
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-white text-base focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      O Nas
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden md:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <UserIcon className="h-24 w-24" />
                  </button>

                  <Link href="/cart" passHref>
                    <button
                      aria-label="go to cart"
                      className="hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                      <CartIcon />
                    </button>
                  </Link>
                </div>
                <div className="flex md:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-white hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className=" text-white hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? 'flex' : 'hidden'
            } absolute bg-gray-900 z-10 inset-0 md:hidden flex-col h-screen w-full`}>
            <div className="flex items-center justify-between border-b border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3"></div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                <MenuIcon />
              </button>
            </div>
            <div className="mt-6 mb-12 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link href="/">
                    <a className="text-white flex items-center justify-between hover:underline text-base focus:outline-none focus:ring-2 focus:ring-gray-800">
                      Domov
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/61e9aeb603aaf15f42d37dac">
                    <a className="text-white flex items-center justify-between hover:underline text-base focus:outline-none focus:ring-2 focus:ring-gray-800">
                      Izdelki
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-white flex items-center justify-between hover:underline text-base focus:outline-none focus:ring-2 focus:ring-gray-800">
                      O Nas
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-full flex justify-items-center">
              <ul className="flex flex-col space-y-8 w-full py-10 p-4 bg-gray-800">
                <li>
                  <Link href="/cart">
                    <a className="text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      <div>
                        <CartIcon />
                      </div>
                      <p className="text-base">Košarica</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    <div>
                      <UserIcon />
                    </div>
                    <p className="text-base">Prijava</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
