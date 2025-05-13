import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './carInsurance.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { AboutForServices } from '../../ComponentsForServices/AboutForServices/AboutForServices';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

import { CalcCarIns } from './CalcCarIns/CalcCarIns';

export const CarInsurance = () => {
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
      <main className='carInsurance'>
        <HeroSectionForServices
          background={'heroSectionCarIns'}
          title1={t('carInsurance.heroSection.title1')}
          title2={t('carInsurance.heroSection.title2')}
          text={{ __html: t('carInsurance.heroSection.text') }}
        />
        <AboutForServices
          arrayIndexes={[1, 2, 3]}
          title={t('carInsurance.aboutCarIns.title')}
          textMod={
            <p className="aboutForServices__text--mortgage">
              {t('carInsurance.aboutCarIns.text')}
            </p>
          }
          nameBox={(i) => t(`carInsurance.aboutCarIns.nameBox${i}`)}
          textBox={(i) => t(`carInsurance.aboutCarIns.textBox${i}`)}
          calc={<CalcCarIns />}
        />
        <ProcessForServices
          text={(i) => t(`carInsurance.processCarIns.text${i}`)}
          titleDesk={(i) => t(`carInsurance.processCarIns.titleDesk${i}`)}
          textDesk={(i) => t(`carInsurance.processCarIns.textDesk${i}`)}
        />
        <WhyWeForServices
          icons={[
            '/miller/whyWeCarIns__icon1.svg',
            '/miller/whyWeCarIns__icon2.svg',
            '/miller/whyWeCarIns__icon3.svg',
            '/miller/whyWeCarIns__icon4.svg',
            '/miller/whyWeCarIns__icon5.svg',
            '/miller/whyWeCarIns__icon6.svg',
          ]}
          title={t('carInsurance.whyWeCarIns.title')}
          text={(i) => t(`carInsurance.whyWeCarIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`carInsurance.faqCarIns.question${index}`)}
              answer={t(`carInsurance.faqCarIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`carInsurance.faqCarIns.question${index}`)}
              answer={t(`carInsurance.faqCarIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
