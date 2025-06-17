import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './investmentFunds.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhatIsInvestmentFunds } from './WhatIsInvestmentFunds/WhatIsInvestmentFunds';
import { HelpInvestmentFunds } from './HelpInvestmentFunds/HelpInvestmentFunds';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { ImportantInvestmentFunds } from './ImportantInvestmentFunds/ImportantInvestmentFunds';
import { ExampleInvestmentFunds } from './ExampleInvestmentFunds/ExampleInvestmentFunds';
import { ProcessInvestmentFunds } from './ProcessInvestmentFunds/ProcessInvestmentFunds';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const InvestmentFunds = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <>
      <Header />
      <main className='investmentFunds'>
        <HeroSectionForServices
          background={'heroSectionInvestmentFunds'}
          title1={t('investmentFunds.heroSection.title1')}
          title2={t('investmentFunds.heroSection.title2')}
          text={{ __html: t('investmentFunds.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('investmentFunds.heroSection.button')}
          />}
        />
        <WhatIsInvestmentFunds />
        <HelpInvestmentFunds />
        <ImportantInvestmentFunds />
        <ExampleInvestmentFunds />
        <ProcessInvestmentFunds />
        <WhyWeForServices
          icons={[
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon1.svg',
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon2.svg',
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon3.svg',
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon4.svg',
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon5.svg',
            '/miller/pages/investmentFunds/whyWeInvestmentFunds__icon6.svg',
          ]}
          title={t('investmentFunds.whyWeInvestmentFunds.title')}
          text={(i) => t(`investmentFunds.whyWeInvestmentFunds.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`investmentFunds.faqInvestmentFunds.question${index}`)}
              answer={t(`investmentFunds.faqInvestmentFunds.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`investmentFunds.faqInvestmentFunds.question${index}`)}
              answer={t(`investmentFunds.faqInvestmentFunds.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
