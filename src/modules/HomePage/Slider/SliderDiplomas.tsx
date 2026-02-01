import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import styles from './SliderDiplomas.module.css';
import './SliderDiplomas.css';

import diploma1 from '../../../resources/swiper/displom-psihologa-yulii-polikarpovoj.jpg';
import diploma2 from '../../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-1.jpg';
import diploma3 from '../../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-2.jpg';
import diploma4 from '../../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-3.jpg';
import diploma5 from '../../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-4.jpg';
import diploma6 from '../../../resources/swiper/sertifikat-psihologa-yulii-polikarpovoj-5.jpg';
import diploma7 from '../../../resources/swiper/udostoverenie-psihologa-yulii-polikarpovoj.jpg';

export const SliderDiplomas = () => {
    const diplomas = [
        { id: 1, src: diploma1, alt: 'diploma1' },
        { id: 2, src: diploma2, alt: 'diploma2' },
        { id: 3, src: diploma3, alt: 'diploma3' },
        { id: 4, src: diploma4, alt: 'diploma4' },
        { id: 5, src: diploma5, alt: 'diploma5' },
        { id: 6, src: diploma6, alt: 'diploma6' },
        { id: 7, src: diploma7, alt: 'diploma7' },
    ];

    return (
        // <div className={styles.sliderContainer}>
        <div className='sliderContainer'>
            <Swiper
                modules={[
                    Navigation, 
                    Pagination, 
                    // Autoplay
                ]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                }}
                loop={false}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                // speed={600}
                // className={styles.swiper}
                className='swiper'
            >
                {diplomas.map((diploma) => (
                    <SwiperSlide key={diploma.id}>
                        {/* <div className={styles.slide}> */}
                        <div className='slide'>
                            <img 
                                src={diploma.src} 
                                alt={diploma.alt}
                                // className={styles.diplomaImage}
                                className='diplomaImage'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* <div className={styles.sliderCaption}> */}
            <div className='sliderCaption'>
                <p>Мои дипломы и сертификаты</p>
            </div>
        </div>
    );
};