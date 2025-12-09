import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantAccidentIns.scss';

export const ImportantAccidentIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantAccidentIns container">
      <img
        src="pages/accidentIns/importantAccidentIns__img.webp"
        alt="illustration"
        className="importantAccidentIns__img"
      />
      <div className="importantAccidentIns__textContent">
        <h1 className="importantAccidentIns__title">{t('accidentIns.importantAccidentIns.title')}</h1>
        <ul className="importantAccidentIns__list">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <li
              key={index}
              className="importantAccidentIns__item"
            >
              <h2 className="importantAccidentIns__item--title">
                {t(`accidentIns.importantAccidentIns.itemTitle${index}`)}
              </h2>
              <p className="importantAccidentIns__item--text">
                {t(`accidentIns.importantAccidentIns.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
