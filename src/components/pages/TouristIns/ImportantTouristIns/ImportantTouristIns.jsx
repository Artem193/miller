import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantTouristIns.scss';

export const ImportantTouristIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantTouristIns container">
      <img
        src="/miller/pages/touristIns/importantTouristIns/importantTouristIns__img.png"
        alt="illustration"
        className="importantTouristIns__img"
      />
      <div className="importantTouristIns__textContent">
        <h1 className="importantTouristIns__title">{t('touristIns.importantTouristIns.title')}</h1>
        <ul className="importantTouristIns__list">
          {[1, 2, 3, 4, 5].map((index) => (
            <li
              key={index}
              className="importantTouristIns__item"
            >
              <h2 className="importantTouristIns__item--title">
                {t(`touristIns.importantTouristIns.itemTitle${index}`)}
              </h2>
              <p className="importantTouristIns__item--text">
                {t(`touristIns.importantTouristIns.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
