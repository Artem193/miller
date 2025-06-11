import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantTravelIns.scss';

export const ImportantTravelIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantTravelIns container">
      <img
        src="/miller/pages/travelIns/importantTravelIns__img.png"
        alt="illustration"
        className="importantTravelIns__img"
      />
      <div className="importantTravelIns__textContent">
        <h1 className="importantTravelIns__title">{t('travelIns.importantTravelIns.title')}</h1>
        <p className="importantTravelIns__text">{t('travelIns.importantTravelIns.text')}</p>
        <ul className="importantTravelIns__list">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <li
              key={index}
              className="importantTravelIns__item"
            >
              <h2 className="importantTravelIns__item--title">
                {t(`travelIns.importantTravelIns.itemTitle${index}`)}
              </h2>
              <p className="importantTravelIns__item--text">
                {t(`travelIns.importantTravelIns.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
