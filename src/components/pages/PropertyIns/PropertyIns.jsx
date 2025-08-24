import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './propertyIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { CoverPropertyIns } from './CoverPropertyIns/CoverPropertyIns';
import { WhatCanPropertyIns } from './WhatCanPropertyIns/WhatCanPropertyIns';
import { CostPropertyIns } from './CostPropertyIns/CostPropertyIns';
import { MistakesPropertyIns } from './MistakesPropertyIns/MistakesPropertyIns';
import { ImportantPropertyIns } from './ImportantPropertyIns/ImportantPropertyIns';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const PropertyIns = () => {
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
      <main className='propertyIns'>
        <HeroSectionForServices
          background={'heroSectionPropertyIns'}
          title1={t('propertyIns.heroSection.title1')}
          title2={t('propertyIns.heroSection.title2')}
          text={{ __html: t('propertyIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('propertyIns.heroSection.button')}
          />}
        />
        <CoverPropertyIns />
        <WhatCanPropertyIns />
        <CostPropertyIns />
        <MistakesPropertyIns />
        <ImportantPropertyIns />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`propertyIns.faqPropertyIns.question${index}`)}
              answer={t(`propertyIns.faqPropertyIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`propertyIns.faqPropertyIns.question${index}`)}
              answer={t(`propertyIns.faqPropertyIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
