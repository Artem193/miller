import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './accidentIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { CoverAccidentIns } from './CoverAccidentIns/CoverAccidentIns';
import { CostAccidentIns } from './CostAccidentIns/CostAccidentIns';
import { StatForm } from '../../StatForm/StatForm';
import { ImportantAccidentIns } from './ImportantAccidentIns/ImportantAccidentIns';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const AccidentIns = () => {
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
      <main className='accidentIns'>
        <HeroSectionForServices
          background={'heroSectionTravelIns'}
          title1={t('accidentIns.heroSection.title1')}
          title2={t('accidentIns.heroSection.title2')}
          text={{ __html: t('accidentIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('accidentIns.heroSection.button')}
          />}
        />
        <CoverAccidentIns />
        <CostAccidentIns />
        <StatForm
          title={t('accidentIns.statForm.title')}
        />
        <ImportantAccidentIns />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`accidentIns.faqAccidentIns.question${index}`)}
              answer={t(`accidentIns.faqAccidentIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`accidentIns.faqAccidentIns.question${index}`)}
              answer={t(`accidentIns.faqAccidentIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}