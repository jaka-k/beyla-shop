import Head from 'next/head'
import Image from 'next/image'
import AboutBanner from '../components/AboutBanner'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'


export default function Home() {
  return (
    <div className='font-Raleway'>
      <Head>
        <title>Beyla - Apicosmetics</title>
      </Head>
      <Banner/>
      <ProductGrid/>
      <AboutBanner/>
      <Testimonials/>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
