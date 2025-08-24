import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import './extraForHeroSection.scss'

export const ExtraForHeroSection = () => {
  const { t, i18n } = useTranslation();
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  useEffect(() => {
    setSwiperKey(prevKey => prevKey + 1);
  }, [i18n.language]);

  return (
    <div className='extraForHeroSection'>
      <div className='extraForHeroSection__boxes'>
        <div className='extraForHeroSection__desktop'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className='extraForHeroSection__box'>
              <div className='extraForHeroSection__circle'>
                <img
                  src={`pages/financialPlanning/extraForHeroSection__icon${index}.svg`}
                  alt="icon"
                  className='extraForHeroSection__icon'
                />
              </div>
              <p className='extraForHeroSection__text'>
                {t(`financialPlanning.extraForHeroSection.text${index}`)}
              </p>
            </div>
          ))}
        </div>

        <div className='extraForHeroSection__mobile'>
          <Swiper
            key={swiperKey}
            modules={[Autoplay]}
            spaceBetween={1}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={7000}
            allowTouchMove={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.8,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[1, 2, 3, 4].map((index) => (
              <SwiperSlide key={index} className='extraForHeroSection__slide'>
                <div className='extraForHeroSection__box extraForHeroSection__box--mobile'>
                  <div className='extraForHeroSection__circle'>
                    <img
                      src={`pages/financialPlanning/extraForHeroSection__icon${index}.svg`}
                      alt="icon"
                      className='extraForHeroSection__icon'
                    />
                  </div>
                  <p className='extraForHeroSection__text'>
                    {t(`financialPlanning.extraForHeroSection.text${index}`)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
