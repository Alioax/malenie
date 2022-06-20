import Card from '../components/card'

import bg from '../assets/images/bg.jpg'
import sismooni from '../assets/images/sismooni.jpg'
import cloth1 from '../assets/images/cloth1.jpg'
import cloth2 from '../assets/images/cloth2.jpg'
import cloth3 from '../assets/images/cloth3.jpg'
import cloth4 from '../assets/images/cloth4.jpg'
import cloth5 from '../assets/images/cloth5.webp'
import Footer from '../components/footer'


export default function Products(props) {
    return (
        <div className=" pt-5 container">
            <h2 className="d-flex fw-bold align-items-center display-5 mb-5 text-center text-nowrap">
                <span className="line bg-dark"></span>
                <span className="px-4">
                    محصولات
                </span>
                <span className="line bg-dark"></span>
            </h2>
            <div className='row row-cols-lg-4'>
                <Card image={cloth1} title={'لباس خواب Gap'} price={99} />
                <Card image={cloth2} title={'لباس سیسمونی نایکی پسرانه'} price={59} />
                <Card image={cloth3} title={'لباس کودک آدیداس دخترانه'} price={38} />
                <Card image={cloth4} title={'لباس ساده پسرانه کودک'} price={66} />
                <Card image={cloth1} title={'لباس خواب Gap'} price={99} />
                <Card image={cloth2} title={'لباس سیسمونی نایکی پسرانه'} price={59} />
                <Card image={cloth3} title={'لباس کودک آدیداس دخترانه'} price={38} />
                <Card image={cloth4} title={'لباس ساده پسرانه کودک'} price={66} />
            </div>
        </div>)
}
