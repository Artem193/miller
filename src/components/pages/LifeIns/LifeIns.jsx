import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './lifeIns.scss'

import { Header } from '../../Header/Header';
import { HeroSectionForServices } from '../../ComponentsForServices/HeroSectionForServices/HeroSectionForServices';
import { Button } from '../home/HeroSection/Button/Button'
import { WhyLifeIns } from './WhyLifeIns/WhyLifeIns.';
import { TypesOfLifeIns } from './TypesOfLifeIns/TypesOfLifeIns';
import { ImportantLifeIns } from './ImportantLifeIns/ImportantLifeIns';
import { CostOfLifeIns } from './CostOfLifeIns/CostOfLifeIns';
import { ProcessLifeIns } from './ProcessLifeIns/ProcessLifeIns';
import { WhyWeForServices } from '../../ComponentsForServices/WhyWeForServices/WhyWeForServices';
import { FaqForServices } from '../../ComponentsForServices/FaqForServices/FaqForServices';
import { Explanation } from '../../ComponentsForServices/FaqForServices/Explanation/Explanation';
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
        <TypesOfLifeIns />
        <ImportantLifeIns />
        <CostOfLifeIns />
        <ProcessLifeIns />
        <WhyWeForServices
          icons={[
            '/miller/pages/carInsurance/whyWeCarIns__icon1.svg',
            '/miller/pages/lifeIns/whyWeLifeIns__icon2.svg',
            '/miller/pages/lifeIns/whyWeLifeIns__icon3.svg',
            '/miller/pages/lifeIns/whyWeLifeIns__icon4.svg',
            '/miller/pages/lifeIns/whyWeLifeIns__icon5.svg',
            '/miller/pages/lifeIns/whyWeLifeIns__icon6.svg',
          ]}
          title={t('lifeIns.whyWeLifeIns.title')}
          text={(i) => t(`lifeIns.whyWeLifeIns.text${i}`)}
        />
        <FaqForServices
          box1={[1, 2, 3, 4].map((index) => (
            <Explanation
              key={index}
              question={t(`lifeIns.faqLifeIns.question${index}`)}
              answer={t(`lifeIns.faqLifeIns.answer${index}`)} />
          ))}
          box2={[5, 6, 7].map((index) => (
            <Explanation
              key={index}
              question={t(`lifeIns.faqLifeIns.question${index}`)}
              answer={t(`lifeIns.faqLifeIns.answer${index}`)} />
          ))}
        />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
