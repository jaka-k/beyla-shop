import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import AboutBanner from '../components/AboutBanner';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import { listProducts } from '../redux/actions/productActions';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts())
  }
  , [dispatch]);

  return (
    <div className="font-Raleway">
      <Head>
        <title>Beyla - Apicosmetics</title>
      </Head>
      <Banner />
      <ProductGrid />
      <AboutBanner />
      <Testimonials />
    </div>
  );
}
