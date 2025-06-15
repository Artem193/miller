import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whatCanPropertyIns.scss'

export const WhatCanPropertyIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="whatCanPropertyIns container">
      <h1 className="whatCanPropertyIns__title">
        {t('propertyIns.whatCanPropertyIns.title')}
      </h1>
      <p className="whatCanPropertyIns__text">{t('propertyIns.whatCanPropertyIns.text1')}</p>

      <div className="whatCanPropertyIns__tableDesktop">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className={`whatCanPropertyIns__cell whatCanPropertyIns__cell--${index + 1}`}>
            <p
              className={`whatCanPropertyIns__value whatCanPropertyIns__value--${index + 1}`}
              dangerouslySetInnerHTML={{ __html: t(`propertyIns.whatCanPropertyIns.value${index + 1}`) }}
            >
            </p>
          </div>
        ))}
      </div>

      {[4, 7, 10, 13, 16].map((index) => (
        <div className="whatCanPropertyIns__boxMobile" key={index}>
          <h2 className="whatCanPropertyIns__subtitleMobile">{t(`propertyIns.whatCanPropertyIns.value${index}`)}</h2>
          <p className="whatCanPropertyIns__textMobile"><strong>{t('propertyIns.whatCanPropertyIns.value2')}:</strong><br />{t(`propertyIns.whatCanPropertyIns.value${index + 1}`)}</p>
          <p className="whatCanPropertyIns__textMobile whatCanPropertyIns__textMobile--2"><strong>{t(`propertyIns.whatCanPropertyIns.value3`)}:</strong><br />{t(`propertyIns.whatCanPropertyIns.value${index + 2}`)}</p>
        </div>
      ))}

      <p className="whatCanPropertyIns__text whatCanPropertyIns__text--2">{t('propertyIns.whatCanPropertyIns.text2')}</p>
    </section>
  )
}
