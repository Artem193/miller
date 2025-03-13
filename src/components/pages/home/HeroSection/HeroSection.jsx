import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Circles } from './Circle/Circles';

import "swiper/css";
import './heroSection.scss'

export const HeroSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='heroSection container'>
      <div className='heroSection__flex'>
        <div className='heroSection__textInfo'>
          <h1 className='heroSection__title'>
            {t('heroSection.heroSection__title')}
          </h1>
          <div className='heroSection__circles--mob'>
            <Circles />
          </div>
          <img src='/miller/heroSectionPhoto.png' className='heroSection__photo--mob' alt='Photo'></img>
          <div className='heroSection__circles--mobBottom'>
            <Circles />
          </div>
          <p className='heroSection__text'>
            {t('heroSection.heroSection__text')}
          </p>
          <button className='heroSection__button'>
            {t('heroSection.heroSection__button')}
          </button>
        </div>
        <div className='heroSection__media'>
          <div className='heroSection__circles'>
            <Circles />
          </div>
          <img src='/miller/heroSectionPhoto.png' className='heroSection__photo' alt='Photo'></img>
          <div className='heroSection__circles heroSection__circles--bottom'>
            <Circles />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
        speed={4000}
        allowTouchMove={false}
      >
        <SwiperSlide><div className="heroSection__slide">1</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">2</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">3</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">4</div></SwiperSlide>
      </Swiper>
    </section>
  )
}
