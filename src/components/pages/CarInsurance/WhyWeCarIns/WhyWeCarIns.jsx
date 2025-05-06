import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './whyWeCarIns.scss';

export const WhyWeCarIns = () => {
  const { t, i18n } = useTranslation();

  const icons = [
    '/miller/whyWeCarIns__icon1.svg',
    '/miller/whyWeCarIns__icon2.svg',
    '/miller/whyWeCarIns__icon3.svg',
    '/miller/whyWeCarIns__icon4.svg',
    '/miller/whyWeCarIns__icon5.svg',
    '/miller/whyWeCarIns__icon6.svg',
  ]

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='whyWeCarIns container'>
      <h1 className='whyWeCarIns__title'>{t('carInsurance.whyWeCarIns.title')}</h1>
      <div className='whyWeCarIns__boxes'>
        <div className='whyWeCarIns__boxesRowDesk'>
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`whyWeCarIns__box ${index % 2 !== 1 ? 'whyWeCarIns__box--light' : ''}`}
            >
              <img
                src={icons[index - 1]}
                alt="icon"
                className="whyWeCarIns__icon"
              />
              <p
                className={`whyWeCarIns__text ${index % 2 !== 1 ? 'whyWeCarIns__text--light' : ''}`}
              >
                {t(`carInsurance.whyWeCarIns.text${index}`)}
              </p>
            </div>
          ))}
        </div>

        <div className='whyWeCarIns__boxesRowDesk'>
          {[4, 5, 6].map((index) => (
            <div
              key={index}
              className={`whyWeCarIns__box ${index % 2 !== 1 ? 'whyWeCarIns__box--light' : ''}`}
            >
              <img
                src={icons[index - 1]}
                alt="icon"
                className="whyWeCarIns__icon"
              />
              <p
                className={`whyWeCarIns__text ${index % 2 !== 1 ? 'whyWeCarIns__text--light' : ''}`}
              >
                {t(`carInsurance.whyWeCarIns.text${index}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
