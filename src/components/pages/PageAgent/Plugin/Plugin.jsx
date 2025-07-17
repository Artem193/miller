import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './plugin.scss'

import { Header } from '../../../Header/Header';
import { PluginPreview } from './PluginPreview/PluginPreview';
import { PluginInfo } from './PluginInfo/PluginInfo';
import { Footer } from '../../../Footer/Footer';

export const Plugin = () => {
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
      <main className='plugin'>
        <PluginPreview />
        <PluginInfo />
      </main>
      <Footer />
    </>
  )
}
