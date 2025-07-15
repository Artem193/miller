import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './millerAnatoliy.scss'

import { Header } from '../../../Header/Header';
import { MillerAnatoliyPreview } from './MillerAnatoliyPreview/MillerAnatoliyPreview';
import { MillerAnatoliyInfo } from './MillerAnatoliyInfo/MillerAnatoliyInfo';
import { Footer } from '../../../Footer/Footer';

export const MillerAnatoliy = () => {
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
        <MillerAnatoliyPreview />
        <MillerAnatoliyInfo />
      </main>
      <Footer />
    </>
  )
}
