import Link from 'next/link'
import Image from 'next/image'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = (props) => {

    return (
        <>
            <div className="bg-light py-5">
                <div className="container text-center">

                    <h2 className="d-flex fw-bold align-items-center display-5 mb-5 text-center text-nowrap">
                        <span className="line bg-dark"></span>
                        <span className="px-4">
                            <h2 className='text-center'>افتخارات مانلی</h2>
                        </span>
                        <span className="line bg-dark"></span>
                    </h2>
                    <div className="d-flex row row-cols-lg-4  row-cols-1">
                        <div className="col">
                            <div className="px-3 py-4 bg-white ">
                                <p className="fw-bold mb-3 display-5">36</p>
                                <span className="h5 text-muted mb-0">فروش امروز</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="px-3 py-4 bg-white ">
                                <p className="fw-bold mb-3 display-5">345</p>
                                <span className="h5 text-muted mb-0">محصول جدید ماهانه</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="px-3 py-4 bg-white ">
                                <p className="fw-bold mb-3 display-5">25612</p>
                                <span className="h5 text-muted mb-0">فروش تا کنون</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="px-3 py-4 bg-white ">
                                <p className="fw-bold mb-3 display-5">2215</p>
                                <span className="h5 text-muted mb-0">مشتری ثابت</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-5">
                <div className="container text-white">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col">
                            <h3 className=" h1  mb-0">
                                مانلی - 1402
                            </h3>
                        </div>
                        <div className="col">
                            <p className="h3 mb-3 fw-bold">درباره</p>
                            <p>
                                مانلی یک عمده فروشی مجازی است. هدف ما آسان کردن خرید برای مشتریان خود است.
                            </p>
                            <div className=' d-flex mb-2 align-items-center'>
                                <WhatsAppIcon className='ms-1' />
                                <span dir='ltr'>+989651368735</span>
                            </div>
                            <div className=' d-flex mb-2 align-items-center'>
                                <MailOutlineIcon className='ms-1' />
                                <span dir='ltr'>malenie@gmail.com</span>
                            </div>
                            <div className=' d-flex align-items-center'>
                                <TelegramIcon className='ms-1' />
                                <span dir='ltr'>@Malenie</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer