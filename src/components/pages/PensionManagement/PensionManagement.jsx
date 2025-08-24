import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './pensionManagement.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { PassivePensionManagement } from './PassivePensionManagement/PassivePensionManagement';
import { TroublesPensionManagement } from './TroublesPensionManagement/TroublesPensionManagement';
import { HelpPensionManagement } from './HelpPensionManagement/HelpPensionManagement';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const PensionManagement = () => {
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
      <main className='pensionManagement'>
        <HeroSectionForServices
          background={'heroSectionPensionManagement'}
          title1={t('pensionManagement.heroSection.title1')}
          title2={t('pensionManagement.heroSection.title2')}
          text={{ __html: t('pensionManagement.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('pensionManagement.heroSection.button')}
          />}
        />
        <PassivePensionManagement />
        <TroublesPensionManagement />
        <HelpPensionManagement />
        <ProcessForServices
          title={t('pensionManagement.processPensionManagement.title')}
          text={(i) => t(`pensionManagement.processPensionManagement.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`pensionManagement.processPensionManagement.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`pensionManagement.processPensionManagement.textDesk${i}`)}
        />
        <WhyWeForServices
          icons={[
            'pages/carInsurance/whyWeCarIns__icon1.svg',
            'pages/carInsurance/whyWeCarIns__icon2.svg',
            'pages/pensionManagement/whyWePensionManagement__icon3.svg',
            'pages/pensionManagement/whyWePensionManagement__icon4.svg',
            'pages/pensionManagement/whyWePensionManagement__icon5.svg',
            'pages/pensionManagement/whyWePensionManagement__icon6.svg',
          ]}
          title={t('pensionManagement.whyWePensionManagement.title')}
          text={(i) => t(`pensionManagement.whyWePensionManagement.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2].map((index) => (
            <Explanation
              key={index}
              question={t(`pensionManagement.faqPensionManagement.question${index}`)}
              answer={t(`pensionManagement.faqPensionManagement.answer${index}`)} />
          ))}
          box2={[3, 4].map((index) => (
            <Explanation
              key={index}
              question={t(`pensionManagement.faqPensionManagement.question${index}`)}
              answer={t(`pensionManagement.faqPensionManagement.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
