import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './processInvestmentFunds.scss'

export const ProcessInvestmentFunds = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="processInvestmentFunds container">
      <h1 className="processInvestmentFunds__title">
        {t('investmentFunds.processInvestmentFunds.title')}
      </h1>
      <div className="processInvestmentFunds__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className={`processInvestmentFunds__box processInvestmentFunds__box--${index}`}>
            <p className={`processInvestmentFunds__item processInvestmentFunds__item--${index}`}>
              {t(`investmentFunds.processInvestmentFunds.item${index}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
