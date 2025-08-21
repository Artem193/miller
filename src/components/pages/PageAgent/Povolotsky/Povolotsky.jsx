import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './povolotsky.scss'

import { Header } from '../../../Header/Header';
import { PovolotskyPreview } from './PovolotskyPreview/ovolotskyPreview';
import { PovolotskyInfo } from './PovolotskyInfo/PovolotskyInfo';
import { Footer } from '../../../Footer/Footer';

export const Povolotsky = () => {
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
      <main className='povolotsky'>
        <PovolotskyPreview />
        <PovolotskyInfo />
      </main>
      <Footer />
    </>
  )
}
