import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from './Button/Button'

import "swiper/css";
import './heroSection.scss';

import Arel from '/pages/home/heroSection/insCompanies/Arel.png';
import Klal from '/pages/home/heroSection/insCompanies/Klal.png';
import Shomera from '/pages/home/heroSection/insCompanies/Shomera.png';
import Shlomo from '/pages/home/heroSection/insCompanies/Shlomo.png';
import Fenix from '/pages/home/heroSection/insCompanies/Fenix.png';
import Migdal from '/pages/home/heroSection/insCompanies/Migdal.png';

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
        <h1 className='heroSection__title heroSection__title--mob'>{t('home.heroSection.heroSection__title')}</h1>
        <div className='heroSection__flex'>
          <div className='heroSection__textContent'>
            <h1 className='heroSection__title heroSection__title--desktop'>{t('home.heroSection.heroSection__title')}</h1>
            <p className='heroSection__text' dangerouslySetInnerHTML={{ __html: t('home.heroSection.heroSection__text') }}></p>
            <Button textButton={t('home.heroSection.heroSection__button')} />
          </div>
          <div className='heroSection__person'>
            <img src='/miller/pages/home/heroSection/heroSectionPhoto.png' className='heroSection__photo' alt='Photo' />
            <Link to='/MillerAnatoliy' className="heroSection__signature--link">
              <p className="heroSection__signature" dangerouslySetInnerHTML={{ __html: t('home.heroSection.heroSection__signature') }}></p>
            </Link>
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
