import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './costAccidentIns.scss'

export const CostAccidentIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="costAccidentIns container">
      <h1 className="costAccidentIns__title">
        {t('accidentIns.costAccidentIns.title')}
      </h1>
      <p className="costAccidentIns__text">{t('accidentIns.costAccidentIns.text1')}</p>

      <div className="costAccidentIns__tableDesktop">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={`costAccidentIns__cell costAccidentIns__cell--${index + 1}`}>
            <p 
            className={`costAccidentIns__value costAccidentIns__value--${index + 1}`}
            dangerouslySetInnerHTML={{ __html: t(`accidentIns.costAccidentIns.value${index + 1}`) }}
            >
            </p>
          </div>
        ))}
      </div>

      <div className="costAccidentIns__boxMobile costAccidentIns__boxMobile--blue">
        <h2 className="costAccidentIns__subtitleMobile">{t('accidentIns.costAccidentIns.value2')}</h2>
        <p className="costAccidentIns__textMobile"><strong>{t('accidentIns.costAccidentIns.value7')}</strong> {t('accidentIns.costAccidentIns.value8')}</p>
        <p className="costAccidentIns__textMobile costAccidentIns__textMobile--2"><strong>{t('accidentIns.costAccidentIns.value10')}</strong> {t('accidentIns.costAccidentIns.value11')}</p>
      </div>

      <div className="costAccidentIns__boxMobile costAccidentIns__boxMobile--yellow">
        <h2 className="costAccidentIns__subtitleMobile">{t('accidentIns.costAccidentIns.value3')}</h2>
        <p className="costAccidentIns__textMobile"><strong>{t('accidentIns.costAccidentIns.value7')}</strong> {t('accidentIns.costAccidentIns.value9')}</p>
        <p className="costAccidentIns__textMobile costAccidentIns__textMobile--2"><strong>{t('accidentIns.costAccidentIns.value10')}</strong> {t('accidentIns.costAccidentIns.value12')}</p>
      </div>

      <p className="costAccidentIns__text costAccidentIns__text--2">{t('accidentIns.costAccidentIns.text2')}</p>
    </section>
  )
}
