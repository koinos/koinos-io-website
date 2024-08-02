
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
        {
            name: 'chainge',
            imageLight: '/images/exchanges/chainge.png',
            imageDark: '/images/exchanges/chainge-white.png',
            url: 'https://dapp.chainge.finance/?fromChain=ETH&toChain=KOIN&fromToken=USDT&toToken=KOIN'
        },
        {
            name: 'lcx',
            imageLight: '/images/exchanges/lcx.png',
            imageDark: '/images/exchanges/lcx-white.png',
            url: 'https://exchange.lcx.com/trade/KOIN-EUR'
        },
        {
            name: 'tangem',
            imageLight: '/images/exchanges/tangem.png',
            imageDark: '/images/exchanges/tangem-white.png',
            url: 'https://tangem.com/en/'
        },
        {
            name: 'bff',
            imageLight: '/images/exchanges/bff.png',
            imageDark: '/images/exchanges/bff-white.png',
            url: 'https://blockchainff.com/'
        },
        {
            name: 'rhubarb',
            imageLight: '/images/exchanges/rhubarb.png',
            imageDark: '/images/exchanges/rhubarb-white.png',
            url: 'https://rhubarbmedia.ca/'
        },
        {
            name: 'constellation',
            imageLight: '/images/exchanges/constellation.png',
            imageDark: '/images/exchanges/constellation-white.png',
            url: 'https://constellationnetwork.io/'
        },
        {
            name: 'coinmarketcap',
            imageLight: '/images/exchanges/cmc.png',
            imageDark: '/images/exchanges/cmc-white.png',
            url: 'https://coinmarketcap.com/currencies/koinos/'
        },
        {
            name: 'coingecko',
            imageLight: '/images/exchanges/cg.png',
            imageDark: '/images/exchanges/cg-white.png',
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
