import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantPropertyIns.scss';

export const ImportantPropertyIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantPropertyIns container">
      <img
        src="/miller/pages/propertyIns/importantPropertyIns__img.png"
        alt="illustration"
        className="importantPropertyIns__img"
      />
      <div className="importantPropertyIns__textContent">
        <h1 className="importantPropertyIns__title">{t('propertyIns.importantPropertyIns.title')}</h1>
        <ul className="importantPropertyIns__list">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <li
              key={index}
              className="importantPropertyIns__item"
            >
              <h2 className="importantPropertyIns__item--title">
                {t(`propertyIns.importantPropertyIns.itemTitle${index}`)}
              </h2>
              <p className="importantPropertyIns__item--text">
                {t(`propertyIns.importantPropertyIns.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
