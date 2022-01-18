import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          {/* For md screen size */}

          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="/" passHref>
                <h1
                  className="flex items-center text-3xl text-fuchsia-400 cursor-pointer dark:text-white"
                  aria-label="the Crib.">
                 <svg className='h-16' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.63 105.64"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M23.68,100.14A38.92,38.92,0,0,1,7.31,72.46C6.14,61.89,9.1,50.62,15.65,40.74a.39.39,0,0,1,.56-.11.4.4,0,0,1,.11.55C2.48,62.07,5.69,86,24.11,99.46a33.71,33.71,0,0,0,2.19-4.22C13.18,82.72,13.16,71.44,13.15,67.17,13.13,50,30.4,38.83,30.58,38.72a.4.4,0,0,1,.43.68c-.17.11-17.08,11-17,27.72,0,4.59,0,15.14,12.67,27.33a28.67,28.67,0,0,0,1.71-6.15,43.36,43.36,0,0,1-7.78-14.94C16.87,60.51,26.8,50.79,33.25,47.08a.4.4,0,0,1,.55.14.4.4,0,0,1-.15.55c-6.25,3.6-15.88,13-12.32,25.37A42.78,42.78,0,0,0,29,87.84a.43.43,0,0,1,.19.23c3.36,4.08,7.11,6.72,10.25,6.72s6.88-2.64,10.24-6.72a.43.43,0,0,1,.19-.23,42.78,42.78,0,0,0,7.63-14.7C61,60.77,51.39,51.37,45.14,47.77a.4.4,0,1,1,.4-.69C52,50.79,61.93,60.51,58.23,73.36A43.36,43.36,0,0,1,50.45,88.3a29.26,29.26,0,0,0,1.71,6.15C64.81,82.26,64.83,71.71,64.84,67.17,64.86,50.43,48,39.51,47.78,39.4a.41.41,0,0,1-.12-.56.4.4,0,0,1,.55-.12c.18.11,17.45,11.27,17.43,28.41,0,4.3,0,15.59-13.15,28.11a33.71,33.71,0,0,0,2.19,4.22C73.1,86,76.31,62.07,62.47,41.18a.39.39,0,0,1,.12-.55.38.38,0,0,1,.55.11c6.55,9.88,9.51,21.15,8.34,31.72-1.24,11.21-6.9,20.78-16.37,27.68a30.72,30.72,0,0,0,3.61,4.59C68.5,98.64,76.05,85.55,77.55,72A40.92,40.92,0,0,0,64.71,36.94a.4.4,0,0,1,.56-.58A41.7,41.7,0,0,1,78.35,72.1C76.81,86,69,99.45,58.87,105.58a.39.39,0,0,1-.21.06.39.39,0,0,1-.27-.11,32.75,32.75,0,0,1-6.65-10l-.07-.06a.39.39,0,0,1-.1-.34,30.53,30.53,0,0,1-1.8-6c-3.41,4-7.19,6.49-10.37,6.49s-7-2.54-10.38-6.49a30.33,30.33,0,0,1-1.8,6,.39.39,0,0,1-.1.34l-.06.06a33.17,33.17,0,0,1-6.65,10,.43.43,0,0,1-.28.11.42.42,0,0,1-.21-.06C9.69,99.38,1.79,86,.27,72.18c-1-9.37.38-23.09,13-35.22a.4.4,0,0,1,.55.58C1.44,49.44.05,62.9,1.07,72.1c1.48,13.41,9.1,26.48,19,32.63a30.72,30.72,0,0,0,3.61-4.59Z"/><path d="M39.43,77.11a6.53,6.53,0,0,1-3-.78.42.42,0,0,1-.17-.55.41.41,0,0,1,.55-.16,5.38,5.38,0,0,0,5.25,0,.4.4,0,0,1,.43.68,5.85,5.85,0,0,1-3,.8Zm9.35-6.26a.4.4,0,0,1-.4-.4V68.36a7.6,7.6,0,0,1-3.93-1.73.39.39,0,0,1,0-.56A.4.4,0,0,1,45,66a7,7,0,0,0,5.67,1.47h.09A8.1,8.1,0,0,0,52.34,67a.4.4,0,0,1,.47.12l1.6,2.06a.41.41,0,0,1-.32.65.42.42,0,0,1-.32-.16l-1.41-1.82a8.25,8.25,0,0,1-1.08.33L51.79,70a.4.4,0,0,1-.28.49l-.11,0a.41.41,0,0,1-.39-.3l-.52-1.88a8.47,8.47,0,0,1-1.31.07v2a.4.4,0,0,1-.4.4Zm-18.4,0a.4.4,0,0,1-.4-.4v-2a8.47,8.47,0,0,1-1.31-.07l-.52,1.88a.41.41,0,0,1-.39.3l-.11,0a.4.4,0,0,1-.27-.49l.5-1.82a8.25,8.25,0,0,1-1.08-.33l-1.41,1.82a.42.42,0,0,1-.32.16.38.38,0,0,1-.24-.09.39.39,0,0,1-.07-.56l1.59-2.06a.4.4,0,0,1,.47-.12,8.1,8.1,0,0,0,1.59.47h.09A6.94,6.94,0,0,0,34.17,66a.41.41,0,0,1,.57,0,.4.4,0,0,1,0,.56,7.71,7.71,0,0,1-3.94,1.73v2.09a.4.4,0,0,1-.4.4ZM55.73,61.6a.35.35,0,0,1-.24-.08,10.23,10.23,0,0,0-10.3-1.11.4.4,0,1,1-.36-.71A11,11,0,0,1,56,60.88a.4.4,0,0,1,.08.56.39.39,0,0,1-.32.16Zm-32.67,0a.39.39,0,0,1-.32-.16.4.4,0,0,1,.08-.56A11,11,0,0,1,34,59.7a.41.41,0,0,1,.17.54.4.4,0,0,1-.54.17,10.18,10.18,0,0,0-10.29,1.11.38.38,0,0,1-.25.08ZM34.64,83.7A8.55,8.55,0,0,1,35.77,85c.93,1.21,1.9,2.45,3.63,2.45S42.09,86.2,43,85a9.83,9.83,0,0,1,1.13-1.29,6.5,6.5,0,0,1-1.37-.86c-1-.77-1.73-1.32-3.12-.1a.41.41,0,0,1-.53,0c-1.39-1.22-2.12-.67-3.12.1a6.5,6.5,0,0,1-1.37.86Zm4.76,4.54c-2.12,0-3.31-1.53-4.27-2.76A5,5,0,0,0,33.65,84a.45.45,0,0,1-.26-.49.46.46,0,0,1,.4-.39,3.71,3.71,0,0,0,1.73-.9c1-.76,2.14-1.63,3.88-.28,1.73-1.35,2.86-.48,3.87.28a3.71,3.71,0,0,0,1.73.9.46.46,0,0,1,.15.88,4.92,4.92,0,0,0-1.49,1.5c-1,1.23-2.15,2.76-4.26,2.76Z"/><path d="M39.39,11a6.54,6.54,0,0,0-3.28.87l-.06,0,0,0a6.75,6.75,0,0,0-1,.76A6.59,6.59,0,0,0,35.67,23l.4.25v0h.05l0,0h.05l0,0a7.57,7.57,0,0,0,6.5-.19h0l.39-.25a6.6,6.6,0,0,0-.37-11.15h0l0,0A6.4,6.4,0,0,0,40.16,11a6.78,6.78,0,0,0-.77-.05Zm3.39,0C51.12-3.91,65.22.65,65.37.69a.41.41,0,0,1,.25.51.4.4,0,0,1-.51.25c-.56-.18-13.63-4.38-21.64,9.92a7.4,7.4,0,0,1,2.17,10.19c8.74-4.74,19-6.68,24.83-4.52A7.48,7.48,0,0,1,75.38,22c1.91,6.33-.83,13-4.48,15.53a5.45,5.45,0,0,1-3.11,1.08,4.57,4.57,0,0,1-2.68-.9c-.88,2.63-2.33,4.38-4.16,5a4.55,4.55,0,0,1-1.46.23A6.72,6.72,0,0,1,55.16,41c-1.49-1.29-3.8-3.39-6.87-6.25a20.65,20.65,0,0,1,0,4.23.36.36,0,0,1,.1.14.4.4,0,0,1-.17.51,23.58,23.58,0,0,1-3.14,9,.37.37,0,0,1-.1.17,27.91,27.91,0,0,1-4.51,5.68,1.59,1.59,0,0,1-1.11.45,1.61,1.61,0,0,1-1.12-.45,27.47,27.47,0,0,1-4.64-5.9.42.42,0,0,1-.11-.18,23.44,23.44,0,0,1-3-9.05.4.4,0,0,1-.07-.43s0,0,0,0a20.74,20.74,0,0,1,.05-4.09c-2.27,2.12-5.06,4.68-6.87,6.25a6.7,6.7,0,0,1-4.33,1.85,4.49,4.49,0,0,1-1.45-.23c-1.84-.59-3.29-2.34-4.17-5a4.57,4.57,0,0,1-2.68.9,5.45,5.45,0,0,1-3.11-1.08C4.25,34.94,1.5,28.28,3.41,22A7.48,7.48,0,0,1,8.32,17c5.87-2.16,16.09-.22,24.83,4.52A7.41,7.41,0,0,1,34.45,12a7.77,7.77,0,0,1,.87-.67c-8-14.3-21.08-10.1-21.64-9.92a.41.41,0,0,1-.51-.25.41.41,0,0,1,.26-.51C13.57.65,27.67-3.91,36,11a7.4,7.4,0,0,1,4.24-.76,7.3,7.3,0,0,1,2.53.77Zm-3,38.51a22.41,22.41,0,0,1-5-.57,27.62,27.62,0,0,0,4.07,5,.8.8,0,0,0,1.11,0,28.2,28.2,0,0,0,4-4.79,21.94,21.94,0,0,1-4.12.39Zm-5.62-1.55a21.35,21.35,0,0,0,10.32.21,22.74,22.74,0,0,0,3-8.19,21.47,21.47,0,0,1-7.7,1.42,22.76,22.76,0,0,1-8.52-1.68,22.53,22.53,0,0,0,2.9,8.24Zm-3-9.15A21.25,21.25,0,0,0,47.6,39,18.84,18.84,0,0,0,47.44,34a.39.39,0,0,1-.07-.4c-.11-.57-.25-1.14-.41-1.7a19.45,19.45,0,0,1-7.21,1.38,20.77,20.77,0,0,1-7.86-1.58,18.56,18.56,0,0,0-.46,1.89.41.41,0,0,1-.08.41,19,19,0,0,0-.18,4.81Zm.09-7.62a.63.63,0,0,1,0-.19l.06-.09c.1-.3.2-.61.32-.91a39,39,0,0,0-17.31,7.18c.79,2.53,2.09,4.19,3.74,4.72s3.33,0,5-1.47c2-1.73,5.22-4.69,7.59-6.91a20.26,20.26,0,0,1,.57-2.33Zm.88-.26a19.14,19.14,0,0,0,14.58.2c-.15-.45-.32-.9-.5-1.34a.43.43,0,0,1-.09-.22,22.53,22.53,0,0,0-2-3.69.41.41,0,0,1-.31-.37.21.21,0,0,1,0-.08c-.3-.43-.62-.85-1-1.27a8.27,8.27,0,0,1-3.52.78,8.54,8.54,0,0,1-3.4-.71c-.32.4-.62.8-.91,1.2a.19.19,0,0,1,0,.08.41.41,0,0,1-.32.37,22.53,22.53,0,0,0-2,3.69.36.36,0,0,1-.09.22c-.15.38-.3.76-.43,1.14Zm15.37.19a.41.41,0,0,1,.05.09.29.29,0,0,1,0,.18,21.87,21.87,0,0,1,.51,2.13c3.44,3.2,6,5.53,7.59,6.91s3.45,2,5,1.47,2.95-2.19,3.73-4.72A38.9,38.9,0,0,0,47.12,30c.14.37.27.75.39,1.12Zm17.15,5.24c0-.08,0-.15,0-.23a4.81,4.81,0,0,0-1.18-4.31c-3-3.57-11-6.12-18.49-6a23.21,23.21,0,0,1,1.74,3.29,39.34,39.34,0,0,1,17.88,7.21ZM44.51,25c8-.3,16.4,2.35,19.64,6.24a5.56,5.56,0,0,1,1.34,5c0,.19-.09.38-.14.56l.13.09a4,4,0,0,0,5-.11c3.43-2.39,5.92-8.84,4.17-14.63a6.69,6.69,0,0,0-4.42-4.39c-6.12-2.26-17.72.33-26.61,5.89l0,0c.35.44.68.88,1,1.32ZM13.44,36.84c0-.18-.1-.37-.14-.56a5.56,5.56,0,0,1,1.34-5c3.24-3.89,11.64-6.54,19.64-6.24.31-.44.63-.88,1-1.32l0,0c-8.89-5.56-20.5-8.15-26.63-5.89a6.69,6.69,0,0,0-4.42,4.39C2.43,28,4.92,34.43,8.35,36.82a4,4,0,0,0,5,.11l.13-.09Zm20.31-11c-7.5-.16-15.51,2.39-18.49,6a4.81,4.81,0,0,0-1.18,4.31,1.89,1.89,0,0,1,.05.23A39.26,39.26,0,0,1,32,29.12a23.21,23.21,0,0,1,1.74-3.29Z"/></g></g></svg>
                  <span className='pl-4 font-thin tracking-[.3em]'>BEYLA</span>
                  </h1>
              </Link>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <Link href="/">
                    <a className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Domov
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Izdelki
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      O Nas
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center"></div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Link href="/cart" passHref>

                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg
                      className="fill-stroke"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                      <path
                        d="M1 5.7998H25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                      <path
                        d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                  </button>
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
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
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
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
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3"></div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 mb-12 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link href="/">
                    <a className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                      Domov
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                      Izdelki
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                      O Nas
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-full flex justify-items-center">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <Link href="/cart">
                    <a className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      <div>
                        <svg
                          className="fill-stroke"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 5H21"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-base">Košarica</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    <div>
                      <svg
                        className="fill-stroke"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Wishlist</p>
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
