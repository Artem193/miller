import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './reviews.scss'

export const Reviews = () => {
  const { t, i18n } = useTranslation();
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  useEffect(() => {
    setSwiperKey(prevKey => prevKey + 1);
  }, [i18n.language]);

  return (
    <article className='reviews container'>
      <h1 className='reviews__title'>{t('home.reviews.title')}</h1>

      <Swiper
        key={swiperKey}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <SwiperSlide key={num}>
            <div className='reviews__block'>
              <div className='reviews__person'>
                <div className={`reviews__photo reviews__photo--${num}`}>
                </div>
                <h3 className='reviews__name'>{t(`home.reviews.name${num}`)}</h3>
              </div>
              <p className='reviews__text'>{t(`home.reviews.text${num}`)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}
