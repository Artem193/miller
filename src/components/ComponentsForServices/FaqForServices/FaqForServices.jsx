import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './faqForServices.scss';

export const FaqForServices = ({ box1, box2 }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='faqForServices container'>
      <h1 className='faqForServices__title'>
        {t('carInsurance.faqCarIns.title')}
      </h1>
      <div className='faqForServices__boxesFlex'>
        <div className='faqForServices__boxes'>
          {box1}
        </div>

        <div className='faqForServices__boxes'>
          {box2}
        </div>
      </div>
    </section>
  )
}
