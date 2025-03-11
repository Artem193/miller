import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
            Страховое агенство Миллер
          </h1>
          <img src='/miller/heroSectionPhoto.png' className='heroSection__photo--mobile' alt='Photo'></img>
          <p className='heroSection__text'>
            Ваш надежный партнер в мире финансов и страхования с более чем 20-летним опытом
          </p>
          <button className='heroSection__button'>
            Задать вопрос
          </button>
        </div>
        <img src='/miller/heroSectionPhoto.png' className='heroSection__photo' alt='Photo'></img>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><div className="heroSection__slide">1</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">2</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">3</div></SwiperSlide>
        <SwiperSlide><div className="heroSection__slide">4</div></SwiperSlide>
      </Swiper>
    </section>
  )
}
