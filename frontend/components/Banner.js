import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Banner = () => {
  return (
    <section>
    <div className="relative h-[120px] sm:h-[200px] lg:h-[220px] xl:h-[240px] 2xl:h-[240px]">
            <Image src="https://images.unsplash.com/photo-1496571330383-9b977f4a021d" layout="fill" objectFit="cover" alt="hero image" />
            <div className="absolute w-full flex flex-col items-center text-center bottom-2 space-y-2">
            </div>
        </div>
    </section>
  );
};

export default Banner;
