import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { CalcCarIns } from '../CalcCarIns/CalcCarIns'

import './about.scss'

export const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='about container'>
      <h1 className='about__title'>{t('carInsurance.about.title')}</h1>
      <p className='about__text'>
        {t('carInsurance.about.text')}
      </p>
      <div className='about__flex'>
        <div className='about__boxes'>
          <div className='about__box'>
            <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--desktop' />
            <div className='about__textContent'>
              <div className='about__flexImgTitle'>
                <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--mob' />
                <h3 className='about__nameBox'>{t('carInsurance.about.nameBox1')}</h3>
              </div>
              <p className='about__textBox'>
                {t('carInsurance.about.textBox1')}
              </p>
            </div>
          </div>

          <div className='about__box'>
            <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--desktop' />
            <div className='about__textContent'>
              <div className='about__flexImgTitle'>
                <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--mob' />
                <h3 className='about__nameBox'>{t('carInsurance.about.nameBox2')}</h3>
              </div>
              <p className='about__textBox'>
                {t('carInsurance.about.textBox2')}
              </p>
            </div>
          </div>

          <div className='about__box'>
            <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--desktop' />
            <div className='about__textContent'>
              <div className='about__flexImgTitle'>
                <img src="/miller/about__icon.svg" alt="icon" className='about__icon about__icon--mob' />
                <h3 className='about__nameBox'>{t('carInsurance.about.nameBox3')}</h3>
              </div>
              <p className='about__textBox'>
                {t('carInsurance.about.textBox3')}
              </p>
            </div>
          </div>
        </div>
        <CalcCarIns />
      </div>
    </section>
  )
}
