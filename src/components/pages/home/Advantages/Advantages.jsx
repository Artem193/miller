import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './advantages.scss'

export const Advantages = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='advantages container'>
      <h2 className='advantages__title'>{t('home.advantages.advantages__title')}</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {[1, 2, 3].map((num) => (
          <SwiperSlide key={num}>
            <div className='advantages__block'>
              <div className='advantages__img'>
                <div className={`advantages__icon advantages__icon--${num}`}></div>
              </div>
              <h3 className='advantages__name'>{t(`home.advantages.advantages__name${num}`)}</h3>
              <p className='advantages__text'>{t(`home.advantages.advantages__text${num}`)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

