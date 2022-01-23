import Image from 'next/image';
import React from 'react';
import Button from './Button';

function AboutElement() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          height="300vw"
          width="300vw"
          alt="hero"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 pt-12 font-medium text-gray-900">
            Knausgaard typewriter readymade marfa
          </h1>
          <p className="mb-8 mt-4 leading-relaxed">
            Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
            live-edge tumeric scenester copper mug flexitarian. Prism vice offal
            plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
          </p>
          <p className="mb-8">
            Fruitcake candy canes apple pie gingerbread marshmallow dessert
            donut. Powder jelly-o pie sesame snaps gingerbread biscuit lollipop
            soufflé. Sesame snaps biscuit gummi bears toffee sugar plum. Jelly-o
            gummies gingerbread gingerbread jujubes tart jelly-o. Pudding
            marshmallow pastry cotton candy pie muffin ice cream dragée
            croissant. Bonbon cake tiramisu pudding lollipop dessert halvah
            lollipop.
          </p>
          <p className="mb-8">
            Dragée tart tiramisu oat cake cupcake candy canes sesame snaps.
            Candy liquorice cake jelly-o cotton candy shortbread tiramisu
            marshmallow. Liquorice pie liquorice bonbon sweet. Pudding carrot
            cake toffee wafer gummies. Toffee powder soufflé cookie tart cake.
            Danish cotton candy gummies fruitcake macaroon cookie toffee. Pie
            marzipan gummies gummies cookie biscuit sesame snaps. Oat cake
            gingerbread fruitcake sweet roll apple pie.
          </p>
          <div className="flex w-full justify-center items-end">
            <Button href="mailto:office@beyla.com">Kontaktiraj Nas</Button>
          </div>
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
          Bear claw jelly gummies bear claw gummies marshmallow cookie.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutElement;
