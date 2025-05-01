import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './services.scss';

export const Services = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='services container'>
      <h1 className='services__title'>
        {t('home.services.services__title')}
      </h1>
      <div className='services__row'>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--1"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name' dangerouslySetInnerHTML={{ __html: t('home.services.services__name1') }}>
              </h3>
              <p className='services__text'>
                {t('home.services.services__text1')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--2"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name'>
                {t('home.services.services__name2')}
              </h3>
              <p className='services__text'>
                {t('home.services.services__text2')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
      </div>

      <div className='services__row'>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--3"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name'>
                {t('home.services.services__name3')}
              </h3>
              <p className='services__text'>
                {t('home.services.services__text3')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--4"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name' dangerouslySetInnerHTML={{ __html: t('home.services.services__name4') }}>
              </h3>
              <p className='services__text'>
                {t('home.services.services__text4')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
      </div>

      <div className='services__row'>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--5"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name' dangerouslySetInnerHTML={{ __html: t('home.services.services__name5') }}>
              </h3>
              <p className='services__text'>
                {t('home.services.services__text5')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
        <div className='services__block'>
          <div className='services__img'>
            <div className="services__icon services__icon--6"></div>
          </div>
          <div className='services__content'>
            <div className='services__textContent'>
              <h3 className='services__name'>
                {t('home.services.services__name6')}
              </h3>
              <p className='services__text'>
                {t('home.services.services__text6')}
              </p>
            </div>
            <a href="" className='services__link'>
              {t('home.services.services__link')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
