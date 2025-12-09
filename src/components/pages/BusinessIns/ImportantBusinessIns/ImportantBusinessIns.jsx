import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantBusinessIns.scss';

export const ImportantBusinessIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantBusinessIns container">
      <img
        src="pages/businessIns/importantBusinessIns__img.webp"
        alt="illustration"
        className="importantBusinessIns__img"
      />
      <div className="importantBusinessIns__textContent">
        <h1 className="importantBusinessIns__title">{t('businessIns.importantBusinessIns.title')}</h1>
        <p className="importantBusinessIns__text">{t('businessIns.importantBusinessIns.text')}</p>
        <ul className="importantBusinessIns__list">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <li
              key={index}
              className="importantBusinessIns__item"
            >
              <h2 className="importantBusinessIns__item--title">
                {t(`businessIns.importantBusinessIns.itemTitle${index}`)}
              </h2>
              <p className="importantBusinessIns__item--text">
                {t(`businessIns.importantBusinessIns.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
