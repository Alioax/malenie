import Link from 'next/link'
import Image from 'next/image'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Card = (props) => {

    return (
        <div className='col mb-4 '>
            <div className='d-flex flex-column'>
                <Image src={props.image} className='img-fluid' />
                <div className='shadow bg-white'>
                    <h6 className='p-3 h6 mb-0 border-bottom border-1 border-light'>{props.title} Gap</h6>
                    <div className='d-flex justify-content-between '>
                        <div className='pe-3 py-2'>
                            <span className='fw-bold h5 mb-0 ps-1'>{props.price}</span>
                            <span className='small'>هزار تومان</span>
                        </div>
                        <div>
                            <Link href="/سبد خرید"><a><div  className=' d-inline-flex align-items-center justify-content-center text-white px-3 h1 mb-0 w-100 h-100 bg-primary'>
                                <AddShoppingCartIcon />                        </div></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card