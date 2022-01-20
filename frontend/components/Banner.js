import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Banner = () => {
  return (
    <section>
    <div className="relative h-[120px] sm:h-[200px] lg:h-[220px] xl:h-[240px] 2xl:h-[240px]">
            <Image src="https://images.unsplash.com/photo-1496571330383-9b977f4a021d" layout="fill" objectFit="cover" alt="hero image" />
            <div className="absolute w-full flex flex-col items-center text-center bottom-2 space-y-2">
              <div className='self-center'>
                <Button className="font-medium m-auto items-center justify-center mr-2 mb-2">Registracija</Button>
                <p className="font-bold lg:text-xl sm:text-lg drop-shadow-2xl">Nova čebelica? Registriraj se in prejmi 10% popusta!</p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default Banner;
