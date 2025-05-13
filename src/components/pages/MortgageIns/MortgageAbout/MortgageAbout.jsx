import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { CalcMortgageIns } from '../CalcMortgageIns/CalcMortgageIns';

import './mortgageAbout.scss'

export const MortgageAbout = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='mortgageAbout container'>
      <h1 className='mortgageAbout__title'>
        Всё, что нужно знать о страховании ипотеки в Израиле
      </h1>
      <div className='mortgageAbout__flex'>
        <div className='mortgageAbout__boxes'>
          <p className='mortgageAbout__text'>
            Оформляя ипотеку в Израиле, банк требует обязательное страхование — и это не просто формальность.
            Страхование ипотеки (ביטוח משכנתא) включает два ключевых компонента:
          </p>
          <div className='mortgageAbout__box'>
            <img src="/miller/about__icon.svg" alt="icon" className='mortgageAbout__icon mortgageAbout__icon--desktop' />
            <div className='mortgageAbout__textContent'>
              <div className='mortgageAbout__flexImgTitle'>
                <img src="/miller/about__icon.svg" alt="icon" className='mortgageAbout__icon mortgageAbout__icon--mob' />
                <h3 className='mortgageAbout__nameBox'>Страхование жизни (ביטוח חיים):</h3>
              </div>
              <p className='mortgageAbout__textBox'>
                Обеспечивает выплату остатка ипотечного кредита в случае смерти заёмщика. Это защита ваших близких от долгов и сохранение дома в семье. Мы подбираем подходящий полис с учётом возраста, суммы кредита и состояния здоровья.
              </p>
            </div>
          </div>

          <div className='mortgageAbout__box'>
            <img src="/miller/about__icon.svg" alt="icon" className='mortgageAbout__icon mortgageAbout__icon--desktop' />
            <div className='mortgageAbout__textContent'>
              <div className='mortgageAbout__flexImgTitle'>
                <img src="/miller/about__icon.svg" alt="icon" className='mortgageAbout__icon mortgageAbout__icon--mob' />
                <h3 className='mortgageAbout__nameBox'>Страхование имущества (ביטוח מבנה):</h3>
              </div>
              <p className='mortgageAbout__textBox'>
                Покрывает ущерб, нанесённый жилью — от пожара, затопления, землетрясения и других рисков. Также может включать ответственность перед соседями. Это защита самой недвижимости — главного залога ипотеки.
              </p>
            </div>
          </div>
        </div>
        <CalcMortgageIns />
      </div>
    </section>
  )
}
