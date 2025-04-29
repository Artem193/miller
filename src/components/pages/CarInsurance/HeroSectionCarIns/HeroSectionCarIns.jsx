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
    <section className='heroSectionCarIns container'>
      <h1 className='heroSectionCarIns__title'>Cтрахование автомобилей</h1>
      <p className='heroSectionCarIns__text'>
        В Израиле автострахование — это обязательная защита, а не просто формальность. Мы помогаем водителям по всей стране оформлять полисы ביטוח חובה, צד ג' и מקיף — надёжно, понятно и без скрытых условий.
        <br /><br />
        Каждому клиенту подбираем оптимальное решение по бюджету и стилю вождения. В случае ДТП вы не останетесь один — мы сопровождаем и помогаем с компенсацией на каждом этапе.
        <br /><br />
        Оставьте заявку или свяжитесь с нами — мы
        <br /> подберём надёжное решение <br />именно для вас
      </p>
      <Button addClass='button--carIns'/>
    </section>
  )
}
