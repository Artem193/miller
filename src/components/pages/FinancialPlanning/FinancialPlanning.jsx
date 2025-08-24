import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './financialPlanning.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { ExtraForHeroSection } from './ExtraForHeroSection/ExtraForHeroSection';
import { WhyRelevant } from './WhyRelevant/WhyRelevant';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices'
import { ReasonsFinPlan } from './ReasonsFinPlan/ReasonsFinPlan';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const FinancialPlanning = () => {
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
      <main className='financialPlanning'>
        <HeroSectionForServices
          background={'heroSectionFinancialPlanning'}
          title1={t('financialPlanning.heroSection.title1')}
          title2={t('financialPlanning.heroSection.title2')}
          extraForHeroSection={<ExtraForHeroSection />}
          extraForHeroSectionAddClass='extraForHeroSection'
          textButton={t('financialPlanning.heroSection.button')}
        />
        <WhyRelevant />
        <WhyWeForServices
          icons={[
            'pages/carInsurance/whyWeCarIns__icon1.svg',
            'pages/carInsurance/whyWeCarIns__icon2.svg',
            'pages/carInsurance/whyWeCarIns__icon3.svg',
            'pages/financialPlanning/whyWeFinancialPlanning__icon4.svg',
            'pages/financialPlanning/whyWeFinancialPlanning__icon5.svg',
            'pages/financialPlanning/whyWeFinancialPlanning__icon6.svg',
          ]}
          title={t('financialPlanning.whyWeFinancialPlanning.title')}
          text={(i) => t(`financialPlanning.whyWeFinancialPlanning.text${i}`)}
        />
        <ReasonsFinPlan />
        <ProcessForServices
          title={t('financialPlanning.processFinancialPlanning.title')}
          text={(i) => t(`financialPlanning.processFinancialPlanning.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`financialPlanning.processFinancialPlanning.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`financialPlanning.processFinancialPlanning.textDesk${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`financialPlanning.faqFinancialPlanning.question${index}`)}
              answer={t(`financialPlanning.faqFinancialPlanning.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`financialPlanning.faqFinancialPlanning.question${index}`)}
              answer={t(`financialPlanning.faqFinancialPlanning.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
