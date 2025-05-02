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
      <div className='heroSectionCarIns__head'>
        <div className='heroSectionCarIns__yellowLine heroSectionCarIns__yellowLine--left'></div>
        <div className='heroSectionCarIns__titleFlex'>
          <h1 className='heroSectionCarIns__title heroSectionCarIns__title--part1'>Страхование</h1>
          <h1 className='heroSectionCarIns__title heroSectionCarIns__title--part2'>автомобилей</h1>
        </div>
        <div className='heroSectionCarIns__yellowLine heroSectionCarIns__yellowLine--right'></div>
      </div>
    </section>
  )
}
