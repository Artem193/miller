import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './processLifeIns.scss'

export const ProcessLifeIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="processLifeIns container">
      <h1 className="processLifeIns__title">
        {t('lifeIns.processLifeIns.title')}
      </h1>
      <div className="processLifeIns__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className={`processLifeIns__box processLifeIns__box--${index}`}>
            <p className={`processLifeIns__item processLifeIns__item--${index}`}>
              {t(`lifeIns.processLifeIns.item${index}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
