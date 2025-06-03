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
      <div className='services__boxes'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className='services__box'>
            <img
              src={`/miller/pages/home/services/services__icon--${index}.svg`}
              alt="icon"
              className='services__icon'
            />
            <div className='services__content'>
              <h2 className='services__subtitle' dangerouslySetInnerHTML={{ __html: t(`home.services.services__name${index}`) }}></h2>
              <p className='services__text'>
                {t(`home.services.services__text${index}`)}
              </p>
              <a href="" className='services__link'>
                {t('home.services.services__link')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
