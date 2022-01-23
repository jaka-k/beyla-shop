import Image from 'next/image'
import React from 'react'

function Testimonials() {
    return (
        <section className="text-gray-600 mx-auto">
  <div className="container py-24  px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto pt-4 pb-16 sm:pb-24 lg:pb-32 lg:max-w-7xl">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest mb-1">ZADOVOLJNI UPORABNIKI</h2>
      <h1 className="sm:text-3xl mt-4 text-2xl text-gray-900">Pričevanja</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
          <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             <Image className='rounded-full' src="https://i.pravatar.cc/150?img=17" layout="intrinsic" height="180vw" width="180vw" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Janez Novak</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Shortbread muffin sweet marzipan croissant sweet sugar plum halvah. Chupa chups lollipop biscuit chocolate cake tootsie roll sesame snaps cotton candy ice cream donut. Muffin cake chocolate cake tiramisu toffee gummi bears apple pie chocolate cake oat cake.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
          <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             <Image className='rounded-full' src="https://i.pravatar.cc/150?img=27" layout="intrinsic" height="180vw" width="180vw" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Marija Vodušek</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Shortbread muffin sweet marzipan croissant sweet sugar plum halvah. Chupa chups lollipop biscuit chocolate cake tootsie roll sesame snaps cotton candy ice cream donut. Muffin cake chocolate cake tiramisu toffee gummi bears apple pie chocolate cake oat cake.</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             <Image className='rounded-full' src="https://i.pravatar.cc/150?img=5" layout="intrinsic" height="180vw" width="180vw" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Ana Kovačič</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Shortbread muffin sweet marzipan croissant sweet sugar plum halvah. Chupa chups lollipop biscuit chocolate cake tootsie roll sesame snaps cotton candy ice cream donut. Muffin cake chocolate cake tiramisu toffee gummi bears apple pie chocolate cake oat cake.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Testimonials
