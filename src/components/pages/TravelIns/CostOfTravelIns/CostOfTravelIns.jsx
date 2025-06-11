import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './costOfTravelIns.scss'

export const CostOfTravelIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="costOfTravelIns container">
      <h1 className="costOfTravelIns__title">
        {t('travelIns.costOfTravelIns.title')}
      </h1>
      <div className="costOfTravelIns__background">
        <div className="costOfTravelIns__box">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className="costOfTravelIns__item" key={index}>
              <img
                src={`/miller/pages/travelIns/costOfTravelIns__icon${index}.svg`}
                alt="icon"
                className="costOfTravelIns__icon"
              />
              <div className="costOfTravelIns__textContent">
                <h2 className="costOfTravelIns__subtitle">{t(`travelIns.costOfTravelIns.subtitle${index}`)}</h2>
                <p className="costOfTravelIns__text">{t(`travelIns.costOfTravelIns.text${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}