import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './whatIsInvestmentFunds.scss'

export const WhatIsInvestmentFunds = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='whatIsInvestmentFunds container'>
      <h1 className='whatIsInvestmentFunds__title'>{t('investmentFunds.whatIsInvestmentFunds.title')}</h1>

      <div className='whatIsInvestmentFunds__blocks'>
        {[1, 2, 3].map((index) => (
          <div key={index} className='whatIsInvestmentFunds__block'>
            <img
              src={`/miller/pages/investmentFunds/whatIsInvestmentFunds__img${index}.svg`}
              alt="icon"
              className='whatIsInvestmentFunds__img'
            />
            <div
              className='whatIsInvestmentFunds__name'
              dangerouslySetInnerHTML={{ __html: t(`investmentFunds.whatIsInvestmentFunds.name${index}`) }}
            >
            </div>
            <div className='whatIsInvestmentFunds__text'>{t(`investmentFunds.whatIsInvestmentFunds.text${index}`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

