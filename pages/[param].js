import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
    const router = useRouter()
    const { param } = router.query

    return (
        <div className=' w-100  vh-100 d-flex align-items-center flex-column justify-content-center'>
            <p className='display-1 mb-5 fw-bolder'>{param}</p>
            <Link href='/'><a>بازگشت به صفحه اصلی</a></Link>
        </div>
    )
}

export default Post