import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './importantInvestmentFunds.scss';

export const ImportantInvestmentFunds = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="importantInvestmentFunds container">
      <img
        src="pages/investmentFunds/importantInvestmentFunds__img.webp"
        alt="illustration"
        className="importantInvestmentFunds__img"
      />
      <div className="importantInvestmentFunds__textContent">
        <h1 className="importantInvestmentFunds__title">{t('investmentFunds.importantInvestmentFunds.title')}</h1>
        <ul className="importantInvestmentFunds__list">
          {[1, 2, 3, 4, 5].map((index) => (
            <li
              key={index}
              className="importantInvestmentFunds__item"
            >
              <h2 className="importantInvestmentFunds__item--title">
                {t(`investmentFunds.importantInvestmentFunds.itemTitle${index}`)}
              </h2>
              <p className="importantInvestmentFunds__item--text">
                {t(`investmentFunds.importantInvestmentFunds.itemText${index}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
