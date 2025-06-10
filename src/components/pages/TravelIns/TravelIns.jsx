import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './travelIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyInsuranceForTravel } from './WhyInsuranceForTravel/WhyInsuranceForTravel';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { WhatCoverTravelIns } from './WhatCoverTravelIns/WhatCoverTravelIns';
import { StatForm } from '../../StatForm/StatForm';
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