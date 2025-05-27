import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './touristIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyInsuranceForTourist } from './WhyInsuranceForTourist/WhyInsuranceForTourist';
import { IncludeInTouristIns } from './IncludeInTouristIns/IncludeInTouristIns';
import { ImportantTouristIns } from './ImportantTouristIns/ImportantTouristIns';
import { StatForm } from '../../StatForm/StatForm';
import { AboutForServices } from '../../ComponentsForServices/AboutForServices/AboutForServices';
import { CalcTouristIns } from './CalcTouristIns/CalcTouristIns';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const TouristIns = () => {
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
      <main className='touristIns'>
        <HeroSectionForServices
          background={'heroSectionTouristIns'}
          title1={t('touristIns.heroSection.title1')}
          title2={t('touristIns.heroSection.title2')}
          text={{ __html: t('touristIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('touristIns.heroSection.button')}
          />}
        />
        <WhyInsuranceForTourist />
        <IncludeInTouristIns
          title={t('touristIns.baseTouristIns.title')}
          arr={[1, 2, 3, 4, 5, 6]}
          pack='baseTouristIns'
        />
        <IncludeInTouristIns
          title={t('touristIns.extraTouristIns.title')}
          arr={[1, 2, 3]}
          pack='extraTouristIns'
        />
        <ImportantTouristIns />
        <StatForm />
        <ProcessForServices
          title={t('carInsurance.processCarIns.title')}
          text={(i) => t(`touristIns.processTouristIns.text${i}`)}
          titleDesk={(i) => t(`touristIns.processTouristIns.titleDesk${i}`)}
          textDesk={(i) => t(`touristIns.processTouristIns.textDesk${i}`)}
        />
        <WhyWeForServices
          icons={[
            '/miller/pages/touristIns/whyWeTouristIns__icon1.svg',
            '/miller/pages/touristIns/whyWeTouristIns__icon2.svg',
            '/miller/pages/touristIns/whyWeTouristIns__icon3.svg',
            '/miller/pages/touristIns/whyWeTouristIns__icon4.svg',
            '/miller/pages/touristIns/whyWeTouristIns__icon5.svg',
            '/miller/pages/touristIns/whyWeTouristIns__icon6.svg',
          ]}
          title={t('touristIns.whyWeTouristIns.title')}
          text={(i) => t(`touristIns.whyWeTouristIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3, 4].map((index) => (
            <Explanation
              key={index}
              question={t(`touristIns.faqTouristIns.question${index}`)}
              answer={t(`touristIns.faqTouristIns.answer${index}`)} />
          ))}
          box2={[5, 6, 7].map((index) => (
            <Explanation
              key={index}
              question={t(`touristIns.faqTouristIns.question${index}`)}
              answer={t(`touristIns.faqTouristIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
