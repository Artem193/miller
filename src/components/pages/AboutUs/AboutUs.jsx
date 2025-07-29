import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './aboutUs.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { AdvantagesAboutUs } from './AdvantagesAboutUs/AdvantagesAboutUs';
import { OurTeamAboutUs } from './OurTeamAboutUs/OurTeamAboutUs';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const AboutUs = () => {
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
      <main className='aboutUs'>
        <HeroSectionForServices
          background={'heroSectionAboutUs'}
          title1={t('aboutUs.heroSection.title1')}
          title2={t('aboutUs.heroSection.title2')}
          text={{ __html: t('aboutUs.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('home.heroSection.heroSection__button')}
          />}
        />
        <OurTeamAboutUs />
        <WhyWeForServices
          icons={[
            '/miller/pages/aboutUs/whyWeAboutUs__icon1.svg',
            '/miller/pages/aboutUs/whyWeAboutUs__icon2.svg',
            '/miller/pages/aboutUs/whyWeAboutUs__icon3.svg',
            '/miller/pages/aboutUs/whyWeAboutUs__icon4.svg',
            '/miller/pages/aboutUs/whyWeAboutUs__icon5.svg',
            '/miller/pages/aboutUs/whyWeAboutUs__icon6.svg',
          ]}
          title={t('aboutUs.whyWeAboutUs.title')}
          text={(i) => t(`aboutUs.whyWeAboutUs.text${i}`)}
        />
        <AdvantagesAboutUs />
        <ProcessForServices
          title={t('aboutUs.processAboutUs.title')}
          text={(i) => t(`aboutUs.processAboutUs.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`aboutUs.processAboutUs.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`aboutUs.processAboutUs.textDesk${i}`)}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
