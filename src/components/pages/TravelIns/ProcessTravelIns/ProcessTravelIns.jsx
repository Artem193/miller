import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './processTravelIns.scss'

export const ProcessTravelIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="processTravelIns container">
      <h1 className="processTravelIns__title">
        {t('travelIns.processTravelIns.title')}
      </h1>
      <div className="processTravelIns__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className={`processTravelIns__box processTravelIns__box--${index}`}>
            <p className={`processTravelIns__item processTravelIns__item--${index}`}>
              {t(`travelIns.processTravelIns.item${index}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
