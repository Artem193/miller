import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Header } from '../../Header/Header';
import { HeroSection } from './HeroSection/HeroSection'
import { Services } from './Services/Services';
import { Advantages } from './Advantages/Advantages';
import { Reviews } from './Reviews/Reviews';
import { Contacts } from './Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

import './home.scss'

export const Home = () => {
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
      <main className='home'>
        <HeroSection />
        <Services />
        <Advantages />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
