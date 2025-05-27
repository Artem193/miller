import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './coverageHealthIns.scss'

export const CoverageHealthIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="coverageHealthIns container">
      <h1 className="coverageHealthIns__title">{t('healthIns.coverageHealthIns.title')}</h1>
      <p className="coverageHealthIns__explain">{t('healthIns.coverageHealthIns.explain')}</p>
      <div className="coverageHealthIns__items">
        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div
            key={index}
            className="coverageHealthIns__item"
          >
            <img
              src={`/miller/pages/healthIns/coverageHealthIns${index}.svg`}
              alt="icon"
              className="coverageHealthIns__icon"
            />
            <h2 className="coverageHealthIns__subtitle">
              {t(`healthIns.coverageHealthIns.subtitle${index}`)}
            </h2>
            <p className="coverageHealthIns__text">
              {t(`healthIns.coverageHealthIns.text${index}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}