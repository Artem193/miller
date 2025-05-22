import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { ThankYouPage } from "../pages/home/HeroSection/ModalForm/ThankYouPage/ThankYouPage";

import './statForm.scss'

export const StatForm = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsSubmitted(false);
    onClose?.();
  };

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

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
  }

  return (
    <div className="statForm">
      <div className="statForm__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="statForm__title">{t('statForm.title')}</h2>
        <form className="statForm__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`statForm__input ${errors.name ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />

          <input
            type="tel"
            placeholder={t('modalForm.placeholder__phone')}
            {...register("phone", {
              required: t('validation.required'),
              pattern: {
                value: /^[0-9+() -]{7,15}$/,
              },
            })}
            className={`statForm__input ${errors.phone ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />

          <input
            type="text"
            placeholder={t('modalForm.placeholder__city')}
            {...register("city", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`statForm__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />
          <button type="submit" className="statForm__submit">{t('modalForm.submit')}</button>
        </form>
      </div>
    </div>
  )
}
