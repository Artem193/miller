import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ThankYouPage } from '../HeroSection/ModalForm/ThankYouPage/ThankYouPage';

import './contacts.scss';

export const Contacts = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const handleClose = () => {
    setIsSubmitted(false);
    onClose && onClose();
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else {
        alert('Ошибка отправки: ' + result.message);
      }
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  if (isSubmitted) {
    return <ThankYouPage onClose={handleClose} />;
  };

  return (
    <article className='container'>
      <div className='contacts'>
        <div className='contacts__info'>
          <h2 className='contacts__info--title'>{t('home.contacts.infoTitle')}</h2>
          <ul className='contacts__list'>
            <li className='contacts__item'>
              <a
                href="mailto:anatoly@miller-ins.co.il"
                className='contacts__link'
                target="_blank"
              >
                <img
                  src="pages/home/contacts/contacts__email.svg"
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
                <img src="pages/home/contacts/contacts__phone.svg" alt="icon" className='contacts__icon' />
                <div className='contacts__text'>
                  <p className='contacts__text--title'>{t('home.contacts.textTitle1')}</p>
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
                <img src="pages/home/contacts/contacts__wp.svg" alt="icon" className='contacts__icon' />
                <div className='contacts__text'>
                  <p className='contacts__text--title'>WhatsApp</p>
                  <p className='contacts__text--info'>050-425-5338</p>
                </div>
              </a>
            </li>

            <li className='contacts__item'>
              <a
                href="https://www.facebook.com/profile.php?id=100067468904835"
                className='contacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__fb.svg" alt="icon" className='contacts__icon' />
                <div className='contacts__text'>
                  <p className='contacts__text--title'>Facebook</p>
                  <p className='contacts__text--info'>מילר סוכנות לביטוח בע"מ</p>
                </div>
              </a>
            </li>

            <li className='contacts__item'>
              <a
                href="https://www.google.com/maps/place/Derech+Zeev+Jabutinsky+43,+Ramat+Gan/@32.084329,34.8084587,17z/data=!4m6!3m5!1s0x151d4bc8662ad3b1:0xcef11f5a5e415da7!8m2!3d32.084329!4d34.8084587!16s%2Fg%2F11cs719bdt?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D"
                className='contacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__location.svg" alt="icon" className='contacts__icon' />
                <div className='contacts__text'>
                  <p className='contacts__text--title'>{t('home.contacts.textTitle2')}</p>
                  <p className='contacts__text--info'>{t('home.contacts.textInfo')}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='contacts__form'>
          <h2 className='contacts__form--title'>{t('home.contacts.formTitle')}</h2>
          <div className='contacts__inputsFlex'>
            <div>
              <label htmlFor="name" className='contacts__label'>{t('home.contacts.label1')}</label>
              <input
                id='name'
                type="text"
                {...register("name", {
                  required: t('validation.required'),
                  minLength: {
                    value: 2,
                  },
                })}
                className={`contacts__input ${errors.name ? "error" : ""}`}
                dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label htmlFor="tel" className='contacts__label'>{t('home.contacts.label2')}</label>
              <input
                id='tel'
                type="tel"
                {...register("phone", {
                  required: t('validation.required'),
                  pattern: {
                    value: /^[0-9+() -]{7,15}$/,
                  },
                })}
                className={`contacts__input ${errors.phone ? "error" : ""}`}
                dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
          <label htmlFor="question" className='contacts__label contacts__label--textarea'>
            {t('home.contacts.label3')}
          </label>
          <textarea
            id="question"
            {...register("question")}
            className='contacts__input contacts__input--textarea'
            dir={i18n.language === "he" ? "rtl" : "ltr"}
            rows="1"
          />
          <button type="submit" className="contacts__submit">{t('home.contacts.button')}</button>
        </form>
      </div>
    </article>
  )
}
