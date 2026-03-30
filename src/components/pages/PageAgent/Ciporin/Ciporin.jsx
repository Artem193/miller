import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './ciporin.scss'

import { Header } from '../../../Header/Header';
import { CiporinPreview } from './CiporinPreview/CiporinPreview';
import { CiporinInfo } from './CiporinInfo/CiporinInfo';
import { Footer } from '../../../Footer/Footer';

export const Ciporin = () => {
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
      <main className='ciporin'>
        <CiporinPreview />
        <CiporinInfo />
      </main>
      <Footer />
    </>
  )
}
