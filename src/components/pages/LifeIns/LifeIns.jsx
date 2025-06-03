import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './lifeIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyLifeIns } from './WhyLifeIns/WhyLifeIns.';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const LifeIns = () => {
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
      <main className='lifeIns'>
        <HeroSectionForServices
          background={'heroSectionLifeIns'}
          title1={t('lifeIns.heroSection.title1')}
          title2={t('lifeIns.heroSection.title2')}
          text={{ __html: t('lifeIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('lifeIns.heroSection.button')}
          />}
        />
        <WhyLifeIns />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
