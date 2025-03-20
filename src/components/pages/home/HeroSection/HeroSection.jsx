import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Circles } from './Circle/Circles';
import { ModalForm } from "./ModalForm/ModalForm";

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
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
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
        <div className='heroSection__flex'>
          <div className='heroSection__textInfo'>
            <h1 className='heroSection__title'>
              {t('home.heroSection.heroSection__title')}
            </h1>
            <div className='heroSection__circles--mob'>
              <Circles />
            </div>
            <img src='/miller/heroSectionPhoto.png' className='heroSection__photo--mob' alt='Photo' />
            <div className='heroSection__circles--mobBottom'>
              <Circles />
            </div>
            <p className='heroSection__text'>
              {t('home.heroSection.heroSection__text')}
            </p>
            <button className='heroSection__button' onClick={() => setIsModalFormOpen(true)}>
              {t('home.heroSection.heroSection__button')}
            </button>
          </div>
          <div className='heroSection__media'>
            <div className='heroSection__circles'>
              <Circles />
            </div>
            <img src='/miller/heroSectionPhoto.png' className='heroSection__photo' alt='Photo' />
            <div className='heroSection__circles heroSection__circles--bottom'>
              <Circles />
            </div>
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

      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </>
  );
};
