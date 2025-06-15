import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Button } from "../../home/HeroSection/Button/Button";

import './costPropertyIns.scss'

export const CostPropertyIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="costPropertyIns container">
      <h1 className="costPropertyIns__title">
        {t('propertyIns.costPropertyIns.title')}
      </h1>
      <p className="whatCanPropertyIns__text">{t('propertyIns.costPropertyIns.text')}</p>

      <div className="costPropertyIns__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className="costPropertyIns__box">
            <h2 className="costPropertyIns__subtitle">{t(`propertyIns.costPropertyIns.subtitle${index}`)}</h2>
            <div className="costPropertyIns__textFlex">
              <img
                src="/miller/pages/propertyIns/costPropertyIns__icon.svg"
                alt="icon"
                className="costPropertyIns__icon"
              />
              <p className="costPropertyIns__description">{t(`propertyIns.costPropertyIns.description${index}`)}</p>
            </div>
            <Button
              textButton={t(`propertyIns.costPropertyIns.button${index}`)}
              addClass={'costPropertyIns__button'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
