import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './blog.scss';

import { Header } from '../../Header/Header';
import { General } from './General/General';
import { Footer } from '../../Footer/Footer';

export const Blog = () => {
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
      <main className='blog'>
        <General />
      </main>
      <Footer />
    </>
  )
}