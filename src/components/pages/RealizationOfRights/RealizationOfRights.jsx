import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './realizationOfRights.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { IncludeRealizationOfRights } from './IncludeRealizationOfRights/IncludeRealizationOfRights';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { StatForm } from '../../StatForm/StatForm'
import { ImportantRealizationOfRights } from './ImportantRealizationOfRights/ImportantRealizationOfRights';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const RealizationOfRights = () => {
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
      <main className='realizationOfRights'>
        <HeroSectionForServices
          background={'heroSectionRealizationOfRights'}
          title1={t('realizationOfRights.heroSection.title1')}
          title2={t('realizationOfRights.heroSection.title2')}
          text={{ __html: t('realizationOfRights.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('realizationOfRights.heroSection.button')}
          />}
        />
        <IncludeRealizationOfRights />
        <ProcessForServices
          title={t('realizationOfRights.processAboutUs.title')}
          text={(i) => t(`realizationOfRights.processAboutUs.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`realizationOfRights.processAboutUs.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`realizationOfRights.processAboutUs.textDesk${i}`)}
        />
        <StatForm
          title={t('realizationOfRights.statForm.title')}
        />
        <ImportantRealizationOfRights />
        <WhyWeForServices
          icons={[
            'pages/realizationOfRights/whyWeRealizationOfRights__icon1.svg',
            'pages/realizationOfRights/whyWeRealizationOfRights__icon2.svg',
            'pages/realizationOfRights/whyWeRealizationOfRights__icon3.svg',
            'pages/realizationOfRights/whyWeRealizationOfRights__icon4.svg',
            'pages/realizationOfRights/whyWeRealizationOfRights__icon5.svg',
            'pages/realizationOfRights/whyWeRealizationOfRights__icon6.svg',
          ]}
          title={t('realizationOfRights.whyWeRealizationOfRights.title')}
          text={(i) => t(`realizationOfRights.whyWeRealizationOfRights.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`realizationOfRights.faqRealizationOfRights.question${index}`)}
              answer={t(`realizationOfRights.faqRealizationOfRights.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`realizationOfRights.faqRealizationOfRights.question${index}`)}
              answer={t(`realizationOfRights.faqRealizationOfRights.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
