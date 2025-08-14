import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { ThankYouPage } from "../../home/HeroSection/ModalForm/ThankYouPage/ThankYouPage";

import './troublesPensionManagement.scss'

export const TroublesPensionManagement = ({ onClose }) => {
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

  // const onSubmit = (data) => {
  //   emailjs.send(
  //     'service_artem193',
  //     'template_zjh9pmt',
  //     {
  //       name: data.name,
  //       phone: data.phone,
  //       city: data.city,
  //       to_email: "aviktorovich193@gmail.com",
  //     },
  //     'SzlkGa3Kx8Zxlkt17'
  //   )
  //     .then(() => {
  //       setIsSubmitted(true);
  //       reset();
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при отправке", error);
  //     });
  // };

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
  }

  return (
    <section className="troublesPensionManagement container">
      <h1 className="troublesPensionManagement__title">{t('pensionManagement.troublesPensionManagement.title')}</h1>

      <div className="troublesPensionManagement__content">
        <div className="troublesPensionManagement__reasons">
          <ul className="troublesPensionManagement__list">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="troublesPensionManagement__reason">
                <div className="troublesPensionManagement__numberBox">
                  <p className="troublesPensionManagement__item troublesPensionManagement__item--number">{index}</p>
                </div>
                <li
                  className="troublesPensionManagement__item troublesPensionManagement__item--text"
                  dangerouslySetInnerHTML={{ __html: t(`pensionManagement.troublesPensionManagement.item${index}`) }}
                >
                </li>
              </div>
            ))}
          </ul>
        </div>

        <form className="troublesPensionManagement__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="troublesPensionManagement__subtitle">{t('pensionManagement.troublesPensionManagement.subtitle')}</h2>
          <p className="troublesPensionManagement__text">{t('pensionManagement.troublesPensionManagement.text')}</p>

          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`troublesPensionManagement__input ${errors.name ? "error" : ""}`}
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
            className={`troublesPensionManagement__input ${errors.phone ? "error" : ""}`}
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
            className={`troublesPensionManagement__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />
          <button type="submit" className="troublesPensionManagement__submit">{t('pensionManagement.troublesPensionManagement.button')}</button>
        </form>
      </div>
    </section >
  )
}
