
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    centerInsufficientSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 4,
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
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    },
}


export default function BrandSlider() {

    const brands = [
        {
            name: 'mexc',
            imageLight: '/images/sections/partners/mexc.png',
            imageDark: '/images/sections/partners/mexc-white.png',
            url: 'https://www.mexc.com/price/KOIN'
        },
        {
            name: 'coinstore',
            imageLight: '/images/sections/partners/coinstore.png',
            imageDark: '/images/sections/partners/coinstore-white.png',
            url: 'https://www.coinstore.com/#/spot/KOINUSDT'
        },
        {
            name: 'chainge',
            imageLight: '/images/sections/partners/chainge.png',
            imageDark: '/images/sections/partners/chainge-white.png',
            url: 'https://dapp.chainge.finance/?fromChain=ETH&toChain=KOIN&fromToken=USDT&toToken=KOIN'
        },
        {
            name: 'lcx',
            imageLight: '/images/sections/partners/lcx.png',
            imageDark: '/images/sections/partners/lcx-white.png',
            url: 'https://exchange.lcx.com/trade/KOIN-EUR'
        },
        {
            name: 'tangem',
            imageLight: '/images/sections/partners/tangem.png',
            imageDark: '/images/sections/partners/tangem-white.png',
            url: 'https://tangem.com/en/'
        },
        {
            name: 'bff',
            imageLight: '/images/sections/partners/bff.png',
            imageDark: '/images/sections/partners/bff-white.png',
            url: 'https://blockchainff.com/'
        },
        {
            name: 'rhubarb',
            imageLight: '/images/sections/partners/rhubarb.png',
            imageDark: '/images/sections/partners/rhubarb-white.png',
            url: 'https://rhubarbmedia.ca/'
        },
        {
            name: 'constellation',
            imageLight: '/images/sections/partners/constellation.png',
            imageDark: '/images/sections/partners/constellation-white.png',
            url: 'https://constellationnetwork.io/'
        },
        {
            name: 'coinmarketcap',
            imageLight: '/images/sections/partners/cmc.png',
            imageDark: '/images/sections/partners/cmc-white.png',
            url: 'https://coinmarketcap.com/currencies/koinos/'
        },
        {
            name: 'coingecko',
            imageLight: '/images/sections/partners/cg.png',
            imageDark: '/images/sections/partners/cg-white.png',
            url: 'https://www.coingecko.com/en/coins/koinos'
        }
    ];

    const duplicatedBrands = [...brands];

    return (
        <>
        <Swiper {...swiperOptions} className="brands-carousel-5 justify-content d-none d-md-block">
          {duplicatedBrands.map((brand, index) => (
            <SwiperSlide className="brand-logo" key={`${brand.name}-${index}`}>
              <Link href={brand.url} target="_blank">
                <img className="img-fluid light-theme-img" src={brand.imageLight} alt={`${brand.name}-logo`} />
              </Link>
              <Link href={brand.url} target="_blank">
                <img className="img-fluid dark-theme-img" src={brand.imageDark} alt={`${brand.name}-logo`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-block d-md-none">
          {brands.map((brand) => (
            <div className="brand-logo" key={brand.name}>
              <Link href={brand.url} target="_blank">
                <img style={{ height: "100px" }} className="light-theme-img" src={brand.imageLight} alt={`${brand.name}-logo`} />
              </Link>
              <Link href={brand.url} target="_blank">
                <img style={{ height: "100px" }} className="dark-theme-img" src={brand.imageDark} alt={`${brand.name}-logo`} />
              </Link>
            </div>
          ))}
        </div>
      </>
    )
}
