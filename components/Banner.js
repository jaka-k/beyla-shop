import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Banner = () => {
  return (
    <div className="relative h-[150px] sm:h-[240px] lg:h-[250px] xl:h-[300px] 2xl:h-[500px]">
            <Image src="https://images.unsplash.com/photo-1496571330383-9b977f4a021d" layout="fill" objectFit="cover" alt="hero image" />
            <div className="absolute w-full text-center bottom-2 space-y-2">
                <p className="text-sm sm:text-lg">Nova čebelica? Registriraj se in prejmi 10% popusta!</p>
                <Button className="" actionName="Registracija"/>
            </div>
        </div>
  );
};

export default Banner;
