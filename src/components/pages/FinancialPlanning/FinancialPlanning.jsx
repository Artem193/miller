import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './financialPlanning.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { ExtraForHeroSection } from './ExtraForHeroSection/ExtraForHeroSection';
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
      </main>
      <Footer />
    </>
  )
}
