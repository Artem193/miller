import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { ThankYouPage } from '../../home/HeroSection/ModalForm/ThankYouPage/ThankYouPage';

import './contactsPageContacts.scss';

export const ContactsPageContacts = ({ onClose }) => {
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
      <div className='contactsPageContacts'>
        <div className='contactsPageContacts__info'>
          <h2 className='contactsPageContacts__info--title'>{t('contactsPage.contactsPageContacts.infoTitle')}</h2>
          <ul className='contactsPageContacts__list'>
            <li className='contactsPageContacts__item'>
              <a
                href="mailto:anatoly@miller-ins.co.il"
                className='contactsPageContacts__link'
                target="_blank"
              >
                <img
                  src="pages/home/contacts/contacts__email.svg"
                  alt="icon"
                  className='contactsPageContacts__icon'
                />
                <div className='contactsPageContacts__text'>
                  <p className='contactsPageContacts__text--title'>Email</p>
                  <p className='contactsPageContacts__text--info'>anatoly@miller-ins.co.il</p>
                </div>
              </a>
            </li>

            <li className='contactsPageContacts__item'>
              <a
                href="tel:+972504255338"
                className='contactsPageContacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__phone.svg" alt="icon" className='contacts__icon' />
                <div className='contactsPageContacts__text'>
                  <p className='contactsPageContacts__text--title'>{t('contactsPage.contactsPageContacts.textTitle1')}</p>
                  <p className='contactsPageContacts__text--info'>050-425-5338</p>
                </div>
              </a>
            </li>

            <li className='contactsPageContacts__item'>
              <a
                href="https://wa.me/972504255338"
                className='contactsPageContacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__wp.svg" alt="icon" className='contactsPageContacts__icon' />
                <div className='contactsPageContacts__text'>
                  <p className='contactsPageContacts__text--title'>WhatsApp</p>
                  <p className='contactsPageContacts__text--info'>050-425-5338</p>
                </div>
              </a>
            </li>

            <li className='contactsPageContacts__item'>
              <a
                href="https://www.facebook.com/anatolynatan.miller"
                className='contactsPageContacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__fb.svg" alt="icon" className='contactsPageContacts__icon' />
                <div className='contactsPageContacts__text'>
                  <p className='contactsPageContacts__text--title'>Facebook</p>
                  <p className='contactsPageContacts__text--info'>Anatoli Natan Miller</p>
                </div>
              </a>
            </li>

            <li className='contactsPageContacts__item'>
              <a
                href="https://www.google.com/maps/place/Derech+Zeev+Jabutinsky+43,+Ramat+Gan/@32.084329,34.8084587,17z/data=!4m6!3m5!1s0x151d4bc8662ad3b1:0xcef11f5a5e415da7!8m2!3d32.084329!4d34.8084587!16s%2Fg%2F11cs719bdt?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D"
                className='contactsPageContacts__link'
                target="_blank"
              >
                <img src="pages/home/contacts/contacts__location.svg" alt="icon" className='contactsPageContacts__icon' />
                <div className='contactsPageContacts__text'>
                  <p className='contactsPageContacts__text--title'>{t('contactsPage.contactsPageContacts.textTitle2')}</p>
                  <p className='contactsPageContacts__text--info'>{t('contactsPage.contactsPageContacts.textInfo')}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='contactsPageContacts__form'>
          <h2 className='contactsPageContacts__form--title'>{t('contactsPage.contactsPageContacts.formTitle')}</h2>
          <div className='contactsPageContacts__inputsFlex'>
            <div>
              <label htmlFor="name" className='contactsPageContacts__label'>{t('contactsPage.contactsPageContacts.label1')}</label>
              <input
                id='name'
                type="text"
                {...register("name", {
                  required: t('validation.required'),
                  minLength: {
                    value: 2,
                  },
                })}
                className={`contactsPageContacts__input ${errors.name ? "error" : ""}`}
                dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label htmlFor="tel" className='contactsPageContacts__label'>{t('contactsPage.contactsPageContacts.label2')}</label>
              <input
                id='tel'
                type="tel"
                {...register("phone", {
                  required: t('validation.required'),
                  pattern: {
                    value: /^[0-9+() -]{7,15}$/,
                  },
                })}
                className={`contactsPageContacts__input ${errors.phone ? "error" : ""}`}
                dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
          <label htmlFor="question" className='contactsPageContacts__label contactsPageContacts__label--textarea'>
            {t('contactsPage.contactsPageContacts.label3')}
          </label>
          <textarea
            id="question"
            {...register("question")}
            className='contactsPageContacts__input contactsPageContacts__input--textarea'
            dir={i18n.language === "he" ? "rtl" : "ltr"}
            rows="1"
          />
          <button type="submit" className="contactsPageContacts__submit">{t('contactsPage.contactsPageContacts.button')}</button>
        </form>
      </div>
    </article>
  )
}
