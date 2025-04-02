import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './contacts.scss';

export const Contacts = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <article className='contacts container'>
      <div className='contacts__info'>
        <h2 className='contacts__info--title'>Наши контакты</h2>
        <ul className='contacts__list'>
          <li className='contacts__item'>
            <a
              href="mailto:anatoly@miller-ins.co.il"
              className='contacts__link'
              target="_blank"
            >
              <img
                src="/miller/contacts__email.svg"
                alt="icon"
                className='contacts__icon'
              />
              <div className='contacts__text'>
                <p className='contacts__text--title'>Email</p>
                <p className='contacts__text--info'>anatoly@miller-ins.co.il</p>
              </div>
            </a>
          </li>

          <li className='contacts__item'>
            <a
              href="tel:+972504255338"
              className='contacts__link'
              target="_blank"
            >
              <img src="/miller/contacts__phone.svg" alt="icon" className='contacts__icon' />
              <div className='contacts__text'>
                <p className='contacts__text--title'>Телефон</p>
                <p className='contacts__text--info'>050-425-5338</p>
              </div>
            </a>
          </li>

          <li className='contacts__item'>
            <a
              href="https://wa.me/972504255338"
              className='contacts__link'
              target="_blank"
            >
              <img src="/miller/contacts__wp.svg" alt="icon" className='contacts__icon' />
              <div className='contacts__text'>
                <p className='contacts__text--title'>WhatsApp</p>
                <p className='contacts__text--info'>050-425-5338</p>
              </div>
            </a>
          </li>

          <li className='contacts__item'>
            <a
              href="https://www.facebook.com/anatolynatan.miller"
              className='contacts__link'
              target="_blank"
            >
              <img src="/miller/contacts__fb.svg" alt="icon" className='contacts__icon' />
              <div className='contacts__text'>
                <p className='contacts__text--title'>Facebook</p>
                <p className='contacts__text--info'>Anatoli Natan Miller</p>
              </div>
            </a>
          </li>

          <li className='contacts__item'>
            <a
              href="https://www.facebook.com/anatolynatan.miller"
              className='contacts__link'
              target="_blank"
            >
              <img src="/miller/contacts__location.svg" alt="icon" className='contacts__icon' />
              <div className='contacts__text'>
                <p className='contacts__text--title'>Адрес</p>
                <p className='contacts__text--info'>Рамат-Ган, ул. Жаботински, 43, 4-й этаж</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='contacts__form'></div>
    </article>
  )
}
