import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Button } from '../../home/HeroSection/Button/Button'
import { Circles } from '../../home/HeroSection/Circles/Circles'

import './heroSectionCarIns.scss'

export const HeroSectionCarIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='heroSectionCarIns container'>
      <Circles addClass='circles--carIns'/>
      <Circles addClass='circles--carInsBottom'/>
      <h1 className='heroSectionCarIns__title'>{t('carInsurance.heroSection.title')}</h1>
      <p
        className='heroSectionCarIns__text'
        dangerouslySetInnerHTML={{ __html: t('carInsurance.heroSection.text') }}
      ></p>
      <Button addClass='button--carIns' />
    </section>
  )
}
