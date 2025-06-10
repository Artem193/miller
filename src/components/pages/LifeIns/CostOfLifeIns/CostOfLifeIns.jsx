import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './costOfLifeIns.scss'

export const CostOfLifeIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="costOfLifeIns container">
      <h1 className="costOfLifeIns__title">
        {t('lifeIns.costOfLifeIns.title')}
      </h1>
      <div className="costOfLifeIns__background">
        <div className="costOfLifeIns__box">
          {[1, 2, 3, 4, 5].map((index) => (
            <div className="costOfLifeIns__item" key={index}>
              <img
                src={`/miller/pages/lifeIns/costOfLifeIns__icon${index}.svg`}
                alt="icon"
                className="costOfLifeIns__icon"
              />
              <div className="costOfLifeIns__textContent">
                <h2 className="costOfLifeIns__subtitle">{t(`lifeIns.costOfLifeIns.subtitle${index}`)}</h2>
                <p className="costOfLifeIns__text">{t(`lifeIns.costOfLifeIns.text${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}