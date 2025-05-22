import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whyRelevant.scss'

export const WhyRelevant = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="whyRelevant container">
      <h1 className="whyRelevant__title">
        {t('financialPlanning.whyRelevant.title')}
      </h1>
      <p className="whyRelevant__text">
        {t('financialPlanning.whyRelevant.text')}
      </p>
      <div className="whyRelevant__content">
        <img
          src="/miller/pages/financialPlanning/whyRelevant__img.png"
          alt="background"
          className="whyRelevant__img"
        />
        <div className="whyRelevant__boxes">
          <div className="whyRelevant__boxTitle">
            <h2 className="whyRelevant__subtitle">
              {t('financialPlanning.whyRelevant.subtitle')}
            </h2>
          </div>

          <div className="whyRelevant__items">
            <ul className="whyRelevant__list">
              {[1, 2, 3, 4].map((index) => (
                <li key={index} className="whyRelevant__item">{t(`financialPlanning.whyRelevant.item${index}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
