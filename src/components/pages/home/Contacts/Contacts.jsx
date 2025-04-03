import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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

  const onSubmit = (data) => {
    emailjs.send(
      'service_artem193',
      'template_zjh9pmt',
      {
        name: data.name,
        phone: data.phone,
        city: data.city,
        to_email: "aviktorovich193@gmail.com",
      },
      'SzlkGa3Kx8Zxlkt17'
    )
      .then(() => {
        setIsSubmitted(true);
        reset();
      })
      .catch((error) => {
        console.error("Ошибка при отправке", error);
      });
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
          <button type="submit" className="contacts__submit">{t('modalForm.submit')}</button>
        </form>
      </div>
    </article>
  )
}
