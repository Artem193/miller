import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './customerSupport.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { HelpCustomerSupport } from './HelpCustomerSupport/HelpCustomerSupport';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const CustomerSupport = () => {
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
      <main className='customerSupport'>
        <HeroSectionForServices
          background={'heroSectionInvestmentFunds'}
          title1={t('customerSupport.heroSection.title1')}
          title2={t('customerSupport.heroSection.title2')}
          text={{ __html: t('customerSupport.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('customerSupport.heroSection.button')}
          />}
        />
        <HelpCustomerSupport />
        <ProcessForServices
          title={t('customerSupport.processCustomerSupport.title')}
          text={(i) => t(`customerSupport.processCustomerSupport.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`customerSupport.processCustomerSupport.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`customerSupport.processCustomerSupport.textDesk${i}`)}
        />
        <WhyWeForServices
          icons={[
            'pages/customerSupport/whyWeCustomerSupport__icon1.svg',
            'pages/customerSupport/whyWeCustomerSupport__icon2.svg',
            'pages/customerSupport/whyWeCustomerSupport__icon3.svg',
            'pages/customerSupport/whyWeCustomerSupport__icon4.svg',
            'pages/customerSupport/whyWeCustomerSupport__icon5.svg',
            'pages/customerSupport/whyWeCustomerSupport__icon6.svg',
          ]}
          title={t('customerSupport.whyWeCustomerSupport.title')}
          text={(i) => t(`customerSupport.whyWeCustomerSupport.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2].map((index) => (
            <Explanation
              key={index}
              question={t(`customerSupport.faqCustomerSupport.question${index}`)}
              answer={t(`customerSupport.faqCustomerSupport.answer${index}`)} />
          ))}
          box2={[3, 4].map((index) => (
            <Explanation
              key={index}
              question={t(`customerSupport.faqCustomerSupport.question${index}`)}
              answer={t(`customerSupport.faqCustomerSupport.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
