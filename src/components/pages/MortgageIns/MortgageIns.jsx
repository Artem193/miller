import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './mortgageIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { AboutForServices } from '../../ComponentsForServices/AboutForServices/AboutForServices';
import { MistakesMortgage } from './MistakesMortgage/MistakesMortgage';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { StatForm } from '../../StatForm/StatForm'
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

import { CalcMortgageIns } from './CalcMortgageIns/CalcMortgageIns';

export const MortgageIns = () => {
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
      <main className='mortgageIns'>
        <HeroSectionForServices
          background={'heroSectionMortgageIns'}
          title1={t('mortgageIns.heroSection.title1')}
          title2={t('mortgageIns.heroSection.title2')}
          text={{ __html: t('mortgageIns.heroSection.text') }}
          textAddClass='text'
          button={<Button
            addClass='heroSectionForServices__button'
            textButton={t('mortgageIns.heroSection.button')}
          />}
        />
        <AboutForServices
          arrayIndexes={[1, 2]}
          title={t('mortgageIns.mortgageAbout.title')}
          textMod={
            <p className="aboutForServices__text--mortgage">
              {t('mortgageIns.mortgageAbout.text')}
            </p>
          }
          nameBox={(i) => t(`mortgageIns.mortgageAbout.nameBox${i}`)}
          textBox={(i) => t(`mortgageIns.mortgageAbout.textBox${i}`)}
          calc={<CalcMortgageIns />}
        />
        <MistakesMortgage />
        <ProcessForServices
          title={t('mortgageIns.processMortgageIns.title')}
          text={(i) => t(`mortgageIns.processMortgageIns.text${i}`)}
          titleDesk={(i) => (
            <span dangerouslySetInnerHTML={{ __html: t(`mortgageIns.processMortgageIns.titleDesk${i}`) }} />
          )}
          textDesk={(i) => t(`mortgageIns.processMortgageIns.textDesk${i}`)}
        />
        <StatForm
          title={t('statForm.title')}
        />
        <WhyWeForServices
          icons={[
            '/miller/pages/carInsurance/whyWeCarIns__icon1.svg',
            '/miller/pages/carInsurance/whyWeCarIns__icon2.svg',
            '/miller/pages/mortgageIns/whyWeMortgageIns__icon3.svg',
            '/miller/pages/mortgageIns/whyWeMortgageIns__icon4.svg',
            '/miller/pages/mortgageIns/whyWeMortgageIns__icon5.svg',
            '/miller/pages/mortgageIns/whyWeMortgageIns__icon6.svg',
          ]}
          title={t('mortgageIns.whyWeMortgageIns.title')}
          text={(i) => t(`mortgageIns.whyWeMortgageIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`mortgageIns.faqMortgageIns.question${index}`)}
              answer={t(`mortgageIns.faqMortgageIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`mortgageIns.faqMortgageIns.question${index}`)}
              answer={t(`mortgageIns.faqMortgageIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
