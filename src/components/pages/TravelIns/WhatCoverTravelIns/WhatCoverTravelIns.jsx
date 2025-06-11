import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whatCoverTravelIns.scss';

export const WhatCoverTravelIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="whatCoverTravelIns container">
      <h1 className="whatCoverTravelIns__title">
        {t('travelIns.whatCoverTravelIns.title')}
      </h1>

      <div className="whatCoverTravelIns__boxes">
        <div className="whatCoverTravelIns__box">
          <img
            src="/miller/pages/travelIns/whatCoverTravelIns__icon1.svg"
            alt="icon"
            className="whatCoverTravelIns__icon"
          />
          <h2 className="whatCoverTravelIns__subtitle">{t('travelIns.whatCoverTravelIns.subtitle1')}</h2>
          <p className="whatCoverTravelIns__description">{t('travelIns.whatCoverTravelIns.description1')}</p>
          <ul className="whatCoverTravelIns__list">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className="whatCoverTravelIns__item">{t(`travelIns.whatCoverTravelIns.item${index}`)}</li>
            ))}
          </ul>
        </div>

        <div className="whatCoverTravelIns__box">
          <img
            src="/miller/pages/travelIns/whatCoverTravelIns__icon2.svg"
            alt="icon"
            className="whatCoverTravelIns__icon"
          />
          <h2 className="whatCoverTravelIns__subtitle">{t('travelIns.whatCoverTravelIns.subtitle2')}</h2>
          <p className="whatCoverTravelIns__description">{t('travelIns.whatCoverTravelIns.description2')}</p>
          <ul className="whatCoverTravelIns__list">
            {[6, 7, 8, 9].map((index) => (
              <li key={index} className="whatCoverTravelIns__item">{t(`travelIns.whatCoverTravelIns.item${index}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="whatCoverTravelIns__text">{t('travelIns.whatCoverTravelIns.text')}</p>
    </section>
  )
}