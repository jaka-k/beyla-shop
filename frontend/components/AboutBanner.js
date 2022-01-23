import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AltButton from './AltButton';

function AboutBanner() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <section className="text-gray-600 body-font max-w-2xl pt-4 pb-16 sm:pb-24 lg:pb-32 lg:max-w-none">
        <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              height="400vw"
              width="400vw"
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ustvarjanje naravnih kozmetičnih produktov je v družini
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
                  <AltButton href="/about">Več...</AltButton>
                
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;
