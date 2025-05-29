import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './businessIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { RisksBusinessIns } from './RisksBusinessIns/RisksBusinessIns';
import { WhatBusinessIns } from './WhatBusinessIns/WhatBusinessIns';
import { ImportantBusinessIns } from './ImportantBusinessIns/ImportantBusinessIns';
import { RightBusinessIns } from './RightBusinessIns/RightBusinessIns';
import { HowWeWorkBusinessIns } from './HowWeWorkBusinessIns/HowWeWorkBusinessIns';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const BusinessIns = () => {
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
      <main className='businessIns'>
        <HeroSectionForServices
          background={'heroSectionBusinessIns'}
          title1={t('businessIns.heroSection.title1')}
          title2={t('businessIns.heroSection.title2')}
          text={{ __html: t('businessIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('businessIns.heroSection.button')}
          />}
        />
        <RisksBusinessIns />
        <WhatBusinessIns />
        <ImportantBusinessIns />
        <RightBusinessIns />
        <HowWeWorkBusinessIns />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`businessIns.faqBusinessIns.question${index}`)}
              answer={t(`businessIns.faqBusinessIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`businessIns.faqBusinessIns.question${index}`)}
              answer={t(`businessIns.faqBusinessIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
