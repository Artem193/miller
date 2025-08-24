import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './healthIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { MedicineHealthIns } from './MedicineHealthIns/MedicineHealthIns';
import { CoverageHealthIns } from './CoverageHealthIns/CoverageHealthIns';
import { ImportantHealthIns } from './ImportantHealthIns/ImportantHealthIns';
import { CostOfHealthIns } from './CostOfHealthIns/CostOfHealthIns';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const HealthIns = () => {
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
      <main className='healthIns'>
        <HeroSectionForServices
          background={'heroSectionHealthIns'}
          title1={t('healthIns.heroSection.title1')}
          title2={t('healthIns.heroSection.title2')}
          text={{ __html: t('healthIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('healthIns.heroSection.button')}
          />}
        />
        <MedicineHealthIns />
        <CoverageHealthIns />
        <ImportantHealthIns />
        <CostOfHealthIns />
        <WhyWeForServices
          icons={[
            'pages/healthIns/whyWeHealthIns__icon1.svg',
            'pages/healthIns/whyWeHealthIns__icon2.svg',
            'pages/healthIns/whyWeHealthIns__icon3.svg',
            'pages/healthIns/whyWeHealthIns__icon4.svg',
            'pages/healthIns/whyWeHealthIns__icon5.svg',
            'pages/healthIns/whyWeHealthIns__icon6.svg',
          ]}
          title={t('healthIns.whyWeHealthIns.title')}
          text={(i) => t(`healthIns.whyWeHealthIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`healthIns.faqHealthIns.question${index}`)}
              answer={t(`healthIns.faqHealthIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`healthIns.faqHealthIns.question${index}`)}
              answer={t(`healthIns.faqHealthIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
