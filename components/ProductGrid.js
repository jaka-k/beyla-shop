import Image from 'next/image'
import React from 'react'

function ProductGrid() {
    return (
        <div className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto pt-4 pb-16 sm:pb-24 lg:pb-32 lg:max-w-none">
      <h2 className="text-xl text-gray-900">Ponudba</h2>
      <p className='pt-4'>Dolor magna eget est lorem. Proin libero nunc consequat interdum varius sit amet mattis. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Laoreet id donec ultrices tincidunt arcu.</p>

      <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <div className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image src="https://images.unsplash.com/photo-1599305090598-fe179d501227" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." layout='fill' className="w-full h-full object-center object-cover"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Healing
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Propolis</p>
        </div>

        <div className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image src="https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." layout='fill' className="w-full h-full object-center object-cover"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Skin-Repair
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Beauty</p>
        </div>

        <div className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image src="https://images.unsplash.com/photo-1611080541716-4de04385fbae" alt="Collection of four insulated travel bottles on wooden shelf." layout='fill' className="w-full h-full object-center object-cover"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Pain-Relif
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Power</p>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ProductGrid
