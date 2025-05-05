import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Button } from '../../home/HeroSection/Button/Button'

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
    <section className='heroSectionCarIns'>
      <div className='heroSectionCarIns__relative'>
        <div className='heroSectionCarIns__head'>
          <div className='heroSectionCarIns__yellowLine heroSectionCarIns__yellowLine--left'></div>
          <div className='heroSectionCarIns__titleFlex'>
            <h1 className='heroSectionCarIns__title heroSectionCarIns__title--part1'>{t('carInsurance.heroSection.title1')}</h1>
            <h1 className='heroSectionCarIns__title heroSectionCarIns__title--part2'>{t('carInsurance.heroSection.title2')}</h1>
          </div>
          <div className='heroSectionCarIns__yellowLine heroSectionCarIns__yellowLine--right'></div>
        </div>
      </div>
      <p className='heroSectionCarIns__text' dangerouslySetInnerHTML={{ __html: t('carInsurance.heroSection.text') }}></p>
      <Button addClass='heroSectionCarIns__button'/>
    </section>
  )
}
