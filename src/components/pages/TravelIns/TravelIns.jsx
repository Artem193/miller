import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './travelIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyInsuranceForTravel } from './WhyInsuranceForTravel/WhyInsuranceForTravel';
import { WhatCoverTravelIns } from './WhatCoverTravelIns/WhatCoverTravelIns';
import { StatForm } from '../../StatForm/StatForm';
import { ImportantTravelIns } from './ImportantTravelIns/ImportantTravelIns';
import { CostOfTravelIns } from './CostOfTravelIns/CostOfTravelIns';
import { ProcessTravelIns } from './ProcessTravelIns/ProcessTravelIns';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const TravelIns = () => {
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
      <main className='travelIns'>
        <HeroSectionForServices
          background={'heroSectionTravelIns'}
          title1={t('travelIns.heroSection.title1')}
          title2={t('travelIns.heroSection.title2')}
          text={{ __html: t('travelIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('travelIns.heroSection.button')}
          />}
        />
        <WhyInsuranceForTravel />
        <WhatCoverTravelIns />
        <StatForm
          title={t('travelIns.statForm.title')}
        />
        <ImportantTravelIns />
        <CostOfTravelIns />
        <ProcessTravelIns />
        <WhyWeForServices
          icons={[
            '/miller/pages/carInsurance/whyWeCarIns__icon1.svg',
            '/miller/pages/travelIns/whyWeTravelIns__icon2.svg',
            '/miller/pages/travelIns/whyWeTravelIns__icon3.svg',
            '/miller/pages/travelIns/whyWeTravelIns__icon4.svg',
            '/miller/pages/travelIns/whyWeTravelIns__icon5.svg',
            '/miller/pages/travelIns/whyWeTravelIns__icon6.svg',
          ]}
          title={t('travelIns.whyWeTravelIns.title')}
          text={(i) => t(`travelIns.whyWeTravelIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`travelIns.faqTravelIns.question${index}`)}
              answer={t(`travelIns.faqTravelIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`travelIns.faqTravelIns.question${index}`)}
              answer={t(`travelIns.faqTravelIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}