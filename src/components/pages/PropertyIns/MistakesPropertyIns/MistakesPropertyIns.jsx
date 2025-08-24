import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './mistakesPropertyIns.scss'

export const MistakesPropertyIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="mistakesPropertyIns container">
      <h1 className="mistakesPropertyIns__title">
        {t('propertyIns.mistakesPropertyIns.title')}
      </h1>

      <div className="mistakesPropertyIns__boxes">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="mistakesPropertyIns__box">
            <img
              src="pages/propertyIns/mistakesPropertyIns__icon--cross.svg"
              alt=""
              className="mistakesPropertyIns__icon"
            />
            <p
              className="mistakesPropertyIns__mistake"
              dangerouslySetInnerHTML={{ __html: t(`propertyIns.mistakesPropertyIns.mistake${index}`) }}
            >
            </p>
          </div>
        ))}
      </div>

      <h2 className="mistakesPropertyIns__subtitle">{t('propertyIns.mistakesPropertyIns.subtitle')}</h2>
      <div className="mistakesPropertyIns__box mistakesPropertyIns__box--green">
        <img
          src="pages/propertyIns/mistakesPropertyIns__icon--check.svg"
          alt=""
          className="mistakesPropertyIns__icon"
        />
        <p className="mistakesPropertyIns__text">{t('propertyIns.mistakesPropertyIns.text')}</p>
      </div>
    </section>
  )
}
