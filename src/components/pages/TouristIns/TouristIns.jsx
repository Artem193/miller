import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './touristIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { AboutForServices } from '../../ComponentsForServices/AboutForServices/AboutForServices';
import { CalcTouristIns } from './CalcTouristIns/CalcTouristIns';
import { ProcessForServices } from '../../ComponentsForServices/ProcessForServices/ProcessForServices';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

export const TouristIns = () => {
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
      <main className='touristIns'>
        <HeroSectionForServices
          background={'heroSectionTouristIns'}
          title1={t('touristIns.heroSection.title1')}
          title2={t('touristIns.heroSection.title2')}
          text={{ __html: t('touristIns.heroSection.text') }}
        />
        <AboutForServices
          arrayIndexes={[1, 2]}
          title={t('touristIns.touristAbout.title')}
          textMod={
            <p className="aboutForServices__text--mortgage">
              {t('touristIns.touristAbout.text')}
            </p>
          }
          nameBox={(i) => t(`touristIns.touristAbout.nameBox${i}`)}
          textBox={(i) => {
            if (i === 1) {
              return [
                t('touristIns.touristAbout.point1'),
                t('touristIns.touristAbout.point2'),
                t('touristIns.touristAbout.point3'),
                t('touristIns.touristAbout.point4'),
                t('touristIns.touristAbout.point5'),
                t('touristIns.touristAbout.point6'),
                t('touristIns.touristAbout.point7'),
                t('touristIns.touristAbout.point8')
              ];
            }
            if (i === 2) {
              return [
                t('touristIns.touristAbout.point9'),
                t('touristIns.touristAbout.point10'),
                t('touristIns.touristAbout.point11'),
              ];
            }
            return t(`touristIns.touristAbout.textBox${i}`);
          }}
        calc={<CalcTouristIns />}
        />
        <ProcessForServices
          text={(i) => t(`touristIns.processTouristIns.text${i}`)}
          titleDesk={(i) => t(`touristIns.processTouristIns.titleDesk${i}`)}
          textDesk={(i) => t(`touristIns.processTouristIns.textDesk${i}`)}
        />
        <WhyWeForServices
          icons={[
            '/miller/whyWeCarIns__icon1.svg',
            '/miller/whyWeCarIns__icon2.svg',
            '/miller/whyWetouristIns__icon3.svg',
            '/miller/whyWetouristIns__icon4.svg',
            '/miller/whyWetouristIns__icon5.svg',
            '/miller/whyWeCarIns__icon6.svg',
          ]}
          title={t('touristIns.whyWeTouristIns.title')}
          text={(i) => t(`touristIns.whyWeTouristIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3].map((index) => (
            <Explanation
              key={index}
              question={t(`touristIns.faqtouristIns.question${index}`)}
              answer={t(`touristIns.faqtouristIns.answer${index}`)} />
          ))}
          box2={[4, 5].map((index) => (
            <Explanation
              key={index}
              question={t(`touristIns.faqtouristIns.question${index}`)}
              answer={t(`touristIns.faqtouristIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
