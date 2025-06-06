import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { ThankYouPage } from "../../home/HeroSection/ModalForm/ThankYouPage/ThankYouPage";

import './rightBusinessIns.scss'

export const RightBusinessIns = ({ onClose }) => {
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
    <section className="rightBusinessIns container">
      <h1 className="rightBusinessIns__title">{t('businessIns.rightBusinessIns.title')}</h1>

      <div className="rightBusinessIns__content">
        <div className="rightBusinessIns__reasons">
          <ul className="rightBusinessIns__list">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="rightBusinessIns__reason">
                <div className="rightBusinessIns__numberBox">
                  <p className="rightBusinessIns__item rightBusinessIns__item--number">{index}</p>
                </div>
                <li
                  className="rightBusinessIns__item rightBusinessIns__item--text"
                  dangerouslySetInnerHTML={{ __html: t(`businessIns.rightBusinessIns.item${index}`) }}
                >
                </li>
              </div>
            ))}
          </ul>
        </div>

        <form className="rightBusinessIns__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="rightBusinessIns__subtitle">{t('businessIns.rightBusinessIns.subtitle')}</h2>
          <p className="rightBusinessIns__text">{t('businessIns.rightBusinessIns.text')}</p>

          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`rightBusinessIns__input ${errors.name ? "error" : ""}`}
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
            className={`rightBusinessIns__input ${errors.phone ? "error" : ""}`}
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
            className={`rightBusinessIns__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />
          <button type="submit" className="rightBusinessIns__submit">{t('businessIns.rightBusinessIns.button')}</button>
        </form>
      </div>
    </section >
  )
}