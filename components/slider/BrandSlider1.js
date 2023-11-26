
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    centerInsufficientSlides: true,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4, //5
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4, //5
            // spaceBetween: 30,
        },
    },
}


export default function BrandSlider1() {

    const brands = [
        {
            name: 'mexc',
            imageLight: '/images/exchanges/mexc.png',
            imageDark: '/images/exchanges/mexc-white.png',
            url: 'https://www.mexc.com/price/KOIN'
        },
        {
            name: 'coinstore',
            imageLight: '/images/exchanges/coinstore.png',
            imageDark: '/images/exchanges/coinstore-white.png',
            url: 'https://www.coinstore.com/#/spot/KOINUSDT'
        },
        /*{
            name: 'uniswap',
            imageLight: '/images/exchanges/uniswap.png',
            imageDark: '/images/exchanges/uniswap-white.png',
            url: 'https://app.uniswap.org/swap'
        },*/
        {
            name: 'chainge',
            imageLight: '/images/exchanges/chainge.png',
            imageDark: '/images/exchanges/chainge-white.png',
            url: 'https://www.chainge.finance/info/currencies/KOIN'
        }
    ];

    return (
        <>

            {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}

            <Swiper {...swiperOptions} className="brands-carousel-5 justify-content d-none d-md-block">
                {/* BRAND LOGO IMAGE */}

                {
                    brands.map(brand =>
                        <SwiperSlide className="brand-logo" key={brand.name}>
                            <Link href={brand.url} target="_blank"><img className="img-fluid light-theme-img" src={brand.imageLight} alt={`${brand.name}-logo`}/></Link>
                            <Link href={brand.url} target="_blank"><img className="img-fluid dark-theme-img" src={brand.imageDark} alt={`${brand.name}-logo`}/></Link>
                        </SwiperSlide>
                    )
                }

            </Swiper>

            <div className="d-block d-md-none">
                {
                    brands.map(brand =>
                        <div className="brand-logo" key={brand.name}>
                            <Link href={brand.url} target="_blank"><img style={{height: '100px'}} className="light-theme-img" src={brand.imageLight} alt={`${brand.name}-logo`}/></Link>
                            <Link href={brand.url} target="_blank"><img style={{height: '100px'}} className="dark-theme-img" src={brand.imageDark} alt={`${brand.name}-logo`}/></Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}
