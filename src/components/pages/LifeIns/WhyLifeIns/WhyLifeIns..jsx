import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whyLifeIns.scss'

export const WhyLifeIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="whyLifeIns container">
      <h1 className="whyLifeIns__title">{t('lifeIns.whyLifeIns.title')}</h1>
      <p className="whyLifeIns__subtitle">{t('lifeIns.whyLifeIns.subtitle')}</p>

      <div className="whyLifeIns__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className="whyLifeIns__box">
            <img
              src="/miller/pages/lifeIns/whyLifeIns__icon.svg"
              alt="icon"
              className="whyLifeIns__icon"
            />
            <p className="whyLifeIns__text">{t(`lifeIns.whyLifeIns.text${index}`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
