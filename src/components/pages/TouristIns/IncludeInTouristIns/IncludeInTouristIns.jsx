import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './includeInTouristIns.scss'

export const IncludeInTouristIns = ({ title, arr, pack }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="includeInTouristIns container">
      <h1 className="includeInTouristIns__title">{title}</h1>
      <div className="includeInTouristIns__items">
        {arr.map((index) => (
          <div
            key={index}
            className="includeInTouristIns__item"
          >
            <img
              src={`/miller/pages/touristIns/${pack}/item--${index}.svg`}
              alt="icon"
              className="includeInTouristIns__icon"
            />
            <h2 className="includeInTouristIns__subtitle">
              {t(`touristIns.${pack}.subtitle${index}`)}
            </h2>
            <p className="includeInTouristIns__text">
              {t(`touristIns.${pack}.text${index}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}