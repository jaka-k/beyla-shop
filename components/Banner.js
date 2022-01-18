import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Banner = () => {
  return (
    <div className="relative h-[120px] sm:h-[200px] lg:h-[220px] xl:h-[240px] 2xl:h-[240px]">
            <Image src="https://images.unsplash.com/photo-1496571330383-9b977f4a021d" layout="fill" objectFit="cover" alt="hero image" />
            <div className="absolute w-full text-center bottom-2 space-y-2">
                <Button classAddon="bg-green-400 mr-2 mb-2" actionName="Registracija"/>
                <p className="lg:text-xl sm:text-lg lg:drop-shadow-2xl">Nova čebelica? Registriraj se in prejmi 10% popusta!</p>
            </div>
        </div>
  );
};

export default Banner;
