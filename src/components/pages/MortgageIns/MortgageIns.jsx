import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './mortgageIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionCarIns } from '../CarInsurance/HeroSectionCarIns/HeroSectionCarIns'
// import { About } from './About/About';
// import { ProcessCarIns } from './ProcessCarIns/ProcessCarIns';
// import { WhyWeCarIns } from './WhyWeCarIns/WhyWeCarIns';
// import { FaqCarIns } from './FaqCarIns/FaqCarIns';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const MortgageIns = () => {
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
      <main className='mortgageIns'>
        <HeroSectionCarIns
          title1={t('mortgageIns.heroSection.title1')}
          title2={t('mortgageIns.heroSection.title2')}
          text={{ __html: t('mortgageIns.heroSection.text') }}
        />
        {/* <About />
        <ProcessCarIns />
        <WhyWeCarIns />
        <FaqCarIns /> */}
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
