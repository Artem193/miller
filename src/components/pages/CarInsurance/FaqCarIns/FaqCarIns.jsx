import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Explanation } from './Explanation/Explanation';

import './faqCarIns.scss';

export const FaqCarIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='faqCarIns container'>
      <h1 className='faqCarIns__title'>
        {t('carInsurance.faqCarIns.title')}
      </h1>
      <div className='faqCarIns__boxesFlex'>
        <div className='faqCarIns__boxes'>
          <Explanation question={t('carInsurance.faqCarIns.question1')} answer={t('carInsurance.faqCarIns.answer1')}/>
          <Explanation question={t('carInsurance.faqCarIns.question2')} answer={t('carInsurance.faqCarIns.answer2')}/>
          <Explanation question={t('carInsurance.faqCarIns.question3')} answer={t('carInsurance.faqCarIns.answer3')}/>
        </div>

        <div className='faqCarIns__boxes'>
          <Explanation question={t('carInsurance.faqCarIns.question4')} answer={t('carInsurance.faqCarIns.answer4')}/>
          <Explanation question={t('carInsurance.faqCarIns.question5')} answer={t('carInsurance.faqCarIns.answer5')}/>
        </div>
      </div>
    </section>
  )
}
