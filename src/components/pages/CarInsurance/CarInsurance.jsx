import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './carInsurance.scss'

import { Header } from '../../Header/Header';
import { HeroSectionCarIns } from './HeroSectionCarIns/HeroSectionCarIns';
import { About } from './About/About';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const CarInsurance = () => {
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
      <main className='carInsurance'>
        <HeroSectionCarIns />
        <About />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
