import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './exampleInvestmentFunds.scss'

export const ExampleInvestmentFunds = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="exampleInvestmentFunds container">
      <h1 className="exampleInvestmentFunds__title">
        {t('investmentFunds.exampleInvestmentFunds.title')}
      </h1>

      <div className="exampleInvestmentFunds__tableWrapper">
        <div className="exampleInvestmentFunds__tableDesktop">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className={`exampleInvestmentFunds__cell exampleInvestmentFunds__cell--${index + 1}`}>
              <p
                className={`exampleInvestmentFunds__value exampleInvestmentFunds__value--${index + 1}`}
                dangerouslySetInnerHTML={{ __html: t(`investmentFunds.exampleInvestmentFunds.value${index + 1}`) }}
              >
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
