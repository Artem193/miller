import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './permyakov.scss'

import { Header } from '../../../Header/Header';
import { PermyakovPreview } from './PermyakovPreview/PermyakovPreview';
import { PermyakovInfo } from './PermyakovInfo/PermyakovInfo';
import { Footer } from '../../../Footer/Footer';

export const Permyakov = () => {
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
      <main className='permyakov'>
        <PermyakovPreview />
        <PermyakovInfo />
      </main>
      <Footer />
    </>
  )
}
