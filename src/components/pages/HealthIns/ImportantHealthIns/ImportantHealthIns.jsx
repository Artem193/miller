import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { ThankYouPage } from "../../home/HeroSection/ModalForm/ThankYouPage/ThankYouPage";

import './importantHealthIns.scss'

export const ImportantHealthIns = ({ onClose }) => {
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
    <section className="importantHealthIns container">
      <h1 className="importantHealthIns__title">
        {t('healthIns.importantHealthIns.title')}
      </h1>
      <div className="importantHealthIns__content">
        <div className="importantHealthIns__reasons">
          <ul className="importantHealthIns__list">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="importantHealthIns__reason">
                <div className="importantHealthIns__numberBox">
                  <p className="importantHealthIns__item importantHealthIns__item--number">{index}</p>
                </div>
                <li
                  className="importantHealthIns__item importantHealthIns__item--text"
                  dangerouslySetInnerHTML={{ __html: t(`healthIns.importantHealthIns.item${index}`) }}
                >
                </li>
              </div>
            ))}
          </ul>
        </div>

        <form className="importantHealthIns__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="importantHealthIns__subtitle">{t('healthIns.importantHealthIns.subtitle')}</h2>
          <p className="importantHealthIns__text">{t('healthIns.importantHealthIns.text')}</p>

          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`importantHealthIns__input ${errors.name ? "error" : ""}`}
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
            className={`importantHealthIns__input ${errors.phone ? "error" : ""}`}
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
            className={`importantHealthIns__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />
          <button type="submit" className="importantHealthIns__submit">{t('healthIns.importantHealthIns.button')}</button>
        </form>
      </div>
    </section>
  )
}
