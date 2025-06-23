import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantRealizationOfRights.scss';

export const ImportantRealizationOfRights = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantRealizationOfRights container">
      <img
        src="/miller/pages/realizationOfRights/importantRealizationOfRights__img.png"
        alt="illustration"
        className="importantRealizationOfRights__img"
      />
      <div className="importantRealizationOfRights__textContent">
        <h1 className="importantRealizationOfRights__title">{t('realizationOfRights.importantRealizationOfRights.title')}</h1>
        <ul className="importantRealizationOfRights__list">
          {[1, 2, 3, 4, 5].map((index) => (
            <li
              key={index}
              className="importantRealizationOfRights__item"
            >
              <h2 className="importantRealizationOfRights__item--title">
                {t(`realizationOfRights.importantRealizationOfRights.itemTitle${index}`)}
              </h2>
              <p className="importantRealizationOfRights__item--text">
                {t(`realizationOfRights.importantRealizationOfRights.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
