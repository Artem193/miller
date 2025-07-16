import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './millerKristina.scss'

import { Header } from '../../../Header/Header';
import { MillerKristinaPreview } from './MillerKristinaPreview/MillerKristinaPreview';
import { MillerKristinaInfo } from './MillerKristinaInfo/MillerKristinaInfo';
import { Footer } from '../../../Footer/Footer';

export const MillerKristina = () => {
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
      <main className='millerAnatoliy'>
        <MillerKristinaPreview />
        <MillerKristinaInfo />
      </main>
      <Footer />
    </>
  )
}
