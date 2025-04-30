import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Circles } from './Circles/Circles';
import { Button } from './Button/Button'

import "swiper/css";
import './heroSection.scss';

import Arel from '/insCompanies/Arel.png';
import Klal from '/insCompanies/Klal.png';
import Shomera from '/insCompanies/Shomera.png';
import Shlomo from '/insCompanies/Shlomo.png';
import Fenix from '/insCompanies/Fenix.png';
import Migdal from '/insCompanies/Migdal.png';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [swiperKey, setSwiperKey] = useState(0);

  const insCompanies = [
    { id: 1, img: Arel },
    { id: 2, img: Klal },
    { id: 3, img: Shomera },
    { id: 4, img: Shlomo },
    { id: 5, img: Fenix },
    { id: 6, img: Migdal },
  ];

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  useEffect(() => {
    setSwiperKey(prevKey => prevKey + 1);
  }, [i18n.language]);

  return (
    <>
      <section className='heroSection container'>
        <h1 className='heroSection__title'>
          {t('home.heroSection.heroSection__title')}
        </h1>
        <h2 className="heroSection__slogan">{t('home.heroSection.slogan')}</h2>
        <div className='heroSection__flex'>
          <div className='heroSection__textInfo'>
            <Circles addClass='circles--homeMob' />
            <img src='/miller/heroSectionPhoto.png' className='heroSection__photo--mob' alt='Photo' />
            <Circles addClass='circles--homeMobBottom' />
            <p className='heroSection__text' dangerouslySetInnerHTML={{ __html: t('home.heroSection.heroSection__text') }}>
            </p>
            <Button />
          </div>
          <div className='heroSection__media'>
            <Circles addClass='circles--home' />
            <img src='/miller/heroSectionPhoto.png' className='heroSection__photo' alt='Photo' />
            <Circles addClass='circles--homeBottom' />
          </div>
        </div>
      </section>
      <Swiper
        key={swiperKey}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
        speed={2000}
        allowTouchMove={false}
      >
        {insCompanies.map((company) => (
          <SwiperSlide key={company.id}>
            <img src={company.img} className="heroSection__slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
