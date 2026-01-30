import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SliderBanner.css';

import yuliyaPolikarpova from '../../../resources/img/partner-psiholog-yuliya-polikarpova.jpg'

export const SliderBanner = () => {
    return (
        <div className="slider-container">
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade, Scrollbar, A11y]}
            spaceBetween={0}
    //   effect={'fade'}
    //   slidesPerView={1}
    //   loop={true}
    //   navigation={true}
      // watchSlidesVisibility={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
            className="my-swiper"
        >
        <SwiperSlide>
            <div className='promoIMG'>
                {/* <img src={yuliyaPolikarpova} alt="yuliyaPolikarpova" /> */}
                1
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='promoIMG'>
                {/* <img src={yuliyaPolikarpova} alt="yuliyaPolikarpova" /> */}
                12
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='promoIMG'>
                {/* <img src={yuliyaPolikarpova} alt="yuliyaPolikarpova" /> */}
                13
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    )
}