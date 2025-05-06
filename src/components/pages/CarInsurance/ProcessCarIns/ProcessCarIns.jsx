import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './processCarIns.scss';

export const ProcessCarIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='processCarIns container'>
      <h1 className='processCarIns__title'>Процесс оформления страховки</h1>
      <div className='processCarIns__items'>
        <div className='processCarIns__item'>
          <h2 className='processCarIns__circle'>1
          </h2>
          <div className='processCarIns__box'>
            <p className='processCarIns__text'>Оставьте заявку на сайте или свяжитесь с нами по телефону или WhatsApp</p>
          </div>
        </div>

        <div className='processCarIns__item processCarIns__item--reverse'>
          <h2 className='processCarIns__circle'>2
          </h2>
          <div className='processCarIns__box'>
            <p className='processCarIns__text'>Получите консультацию и персональный расчёт стоимости — быстро, понятно, без навязывания</p>
          </div>
        </div>

        <div className='processCarIns__item'>
          <h2 className='processCarIns__circle'>3
          </h2>
          <div className='processCarIns__box'>
            <p className='processCarIns__text'>Выберите подходящий вариант страхования с учётом вашего авто, бюджета и потребностей</p>
          </div>
        </div>

        <div className='processCarIns__item processCarIns__item--reverse'>
          <h2 className='processCarIns__circle'>4
          </h2>
          <div className='processCarIns__box'>
            <p className='processCarIns__text'>Оформите полис удобно — полностью онлайн или с сопровождением персонального менеджера</p>
          </div>
        </div>

        <div className='processCarIns__item'>
          <h2 className='processCarIns__circle'>5
          </h2>
          <div className='processCarIns__box'>
            <p className='processCarIns__text'>Получите все документы и поддержку — в случае ДТП мы рядом и поможем с урегулированием убытков</p>
          </div>
        </div>
      </div>
    </section>
  )
}
