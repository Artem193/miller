import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './healthIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { MedicineHealthIns } from './MedicineHealthIns/MedicineHealthIns';
import { CoverageHealthIns } from './CoverageHealthIns/CoverageHealthIns';
import { ImportantHealthIns } from './ImportantHealthIns/ImportantHealthIns';
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
        <Contacts />
      </main>
      <Footer />
    </>
  )
}