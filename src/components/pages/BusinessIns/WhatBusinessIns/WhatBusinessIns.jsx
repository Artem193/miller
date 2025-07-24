import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whatBusinessIns.scss'

export const WhatBusinessIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="whatBusinessIns container">
      <h1 className="whatBusinessIns__title">{t('businessIns.whatBusinessIns.title')}</h1>
      <div className="whatBusinessIns__rows">
        <div className="whatBusinessIns__row">
          {[1, 2, 3].map((index) => (
            <div key={index} className="whatBusinessIns__item">
              <img
                src={`/miller/pages/businessIns/whatBusinessIns__icon${index}.png`}
                alt="icon"
                className={`whatBusinessIns__icon${index}`}
              />
              <h2 className="whatBusinessIns__subtitle">{t(`businessIns.whatBusinessIns.subtitle${index}`)}</h2>
              <p className="whatBusinessIns__text">{t(`businessIns.whatBusinessIns.text${index}`)}</p>
            </div>
          ))}
        </div>

        <div className="whatBusinessIns__row">
          {[4, 5, 6].map((index) => (
            <div key={index} className="whatBusinessIns__item">
              <img
                src={`/miller/pages/businessIns/whatBusinessIns__icon${index}.png`}
                alt="icon"
                className={`whatBusinessIns__icon${index}`}
              />
              <h2 className="whatBusinessIns__subtitle">{t(`businessIns.whatBusinessIns.subtitle${index}`)}</h2>
              <p className="whatBusinessIns__text">{t(`businessIns.whatBusinessIns.text${index}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}
