import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './costOfHealthIns.scss'

export const CostOfHealthIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="costOfHealthIns container">
      <h1 className="costOfHealthIns__title">
        {t('healthIns.costOfHealthIns.title')}
      </h1>
      <div className="costOfHealthIns__background">
        <div className="costOfHealthIns__box">
          {[1, 2, 3, 4].map((index) => (
            <div className="costOfHealthIns__item" key={index}>
              <img
                src={`/miller/pages/healthIns/costOfHealthIns__icon${index}.svg`}
                alt="icon"
                className="costOfHealthIns__icon"
              />
              <div className="costOfHealthIns__textContent">
                <h2 className="costOfHealthIns__subtitle">{t(`healthIns.costOfHealthIns.subtitle${index}`)}</h2>
                <p className="costOfHealthIns__text">{t(`healthIns.costOfHealthIns.text${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}