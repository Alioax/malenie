import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Card from '../components/card'

import bg from '../assets/images/bg.jpg'
import sismooni from '../assets/images/sismooni.jpg'
import cloth1 from '../assets/images/cloth1.jpg'
import cloth2 from '../assets/images/cloth2.jpg'
import cloth3 from '../assets/images/cloth3.jpg'
import cloth4 from '../assets/images/cloth4.jpg'
import cloth5 from '../assets/images/cloth5.webp'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>


      <main>
        <div className='container min-vh-100'>
          <h1 className='text-center display-5 mb-5 pt-4 text-white fw-bolder'>فروشگاه مانلی</h1>

          <div className=' d-flex gx-lg-5 row row-cols-1 row-cols-lg-3'>
            <div className='col mb-3 mb-lg-0'>
              <Link href='/products'><a>
                <div className='card border-0'>
                  <Image className=' rounded-top card-image-top img-fluid' src={sismooni} alt="Picture of the author" />
                  <div className='card-body'>
                    <h5 className='h1 pb-1 text-center fw-normal'>پسرانه</h5>
                  </div>
                </div>
              </a></Link>
            </div>
            <div className='col mb-3 mb-lg-0'>
              <Link href='/products'><a>
                <div className='card border-0'>
                  <Image className=' rounded-top card-image-top img-fluid' src={sismooni} alt="Picture of the author" />
                  <div className='card-body'>
                    <h5 className='h1 pb-1 text-center fw-normal'>دخترانه</h5>
                  </div>
                </div>
              </a></Link>
            </div>
            <div className='col mb-3 mb-lg-0'>
              <Link href='\products'><a>
                <div className='card border-0'>
                  <Image className=' rounded-top card-image-top img-fluid' src={sismooni} alt="Picture of the author" />
                  <div className='card-body'>
                    <h5 className='h1 pb-1 text-center fw-normal'>سیسمونی</h5>
                  </div>
                </div>
              </a></Link>
            </div>
          </div>
        </div>
        <div class="position-absolute overlay overflow-hidden vh-100 z-index-n1 w-100 top-0 start-50 translate-middle-x">
          <Image className=' img-fluid' src={bg} alt="Picture of the author" />
        </div>
        <div className=' bg-light'>
          <div className=' container pt-5'>
            <h2 className='mb-4'>محصولات پر فروش</h2>
            <div className='row row-cols-1 row-cols-lg-4'>
              <Card image={cloth1} title={'لباس خواب Gap'} price={99} />
              <Card image={cloth2} title={'لباس سیسمونی نایکی پسرانه'} price={59} />
              <Card image={cloth3} title={'لباس کودک آدیداس دخترانه'} price={38} />
              <Card image={cloth4} title={'لباس ساده پسرانه کودک'} price={66} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
{ }