import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './whyWeForServices.scss';

export const WhyWeForServices = ({ icons, title, text }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='whyWeForServices container'>
      <h1 className='whyWeForServices__title'>{title}</h1>
      <div className='whyWeForServices__boxes'>
        <div className='whyWeForServices__boxesRowDesk'>
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`whyWeForServices__box ${index % 2 !== 1 ? 'whyWeForServices__box--light' : ''}`}
            >
              <img
                src={icons[index - 1]}
                alt="icon"
                className="whyWeForServices__icon"
              />
              <p
                className={`whyWeForServices__text ${index % 2 !== 1 ? 'whyWeForServices__text--light' : ''}`}
              >
                {text(index)}
              </p>
            </div>
          ))}
        </div>

        <div className='whyWeForServices__boxesRowDesk'>
          {[4, 5, 6].map((index) => (
            <div
              key={index}
              className={`whyWeForServices__box ${index % 2 !== 1 ? 'whyWeForServices__box--light' : ''}`}
            >
              <img
                src={icons[index - 1]}
                alt="icon"
                className="whyWeForServices__icon"
              />
              <p
                className={`whyWeForServices__text ${index % 2 !== 1 ? 'whyWeForServices__text--light' : ''}`}
              >
                {text(index)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
