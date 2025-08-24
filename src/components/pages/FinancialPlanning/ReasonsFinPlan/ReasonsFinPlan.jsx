import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { ThankYouPage } from "../../home/HeroSection/ModalForm/ThankYouPage/ThankYouPage";

import './reasonsFinPlan.scss'

export const ReasonsFinPlan = ({ onClose }) => {
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
    <section className="reasonsFinPlan container">
      <h1 className="reasonsFinPlan__title">
        {t('financialPlanning.reasonsFinPlan.title')}
      </h1>
      <div className="reasonsFinPlan__content">
        <div className="reasonsFinPlan__reasons">
          <ul className="reasonsFinPlan__list">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="reasonsFinPlan__reason">
                <div className="reasonsFinPlan__numberBox">
                  <p className="reasonsFinPlan__item reasonsFinPlan__item--number">{index}</p>
                </div>
                <li className="reasonsFinPlan__item reasonsFinPlan__item--text">{t(`financialPlanning.reasonsFinPlan.item${index}`)}</li>
              </div>
            ))}
          </ul>
        </div>
        <form className="reasonsFinPlan__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="reasonsFinPlan__subtitle">{t('financialPlanning.reasonsFinPlan.subtitle')}</h2>
          <p className="reasonsFinPlan__text">{t('financialPlanning.reasonsFinPlan.text')}</p>

          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`reasonsFinPlan__input ${errors.name ? "error" : ""}`}
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
            className={`reasonsFinPlan__input ${errors.phone ? "error" : ""}`}
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
            className={`reasonsFinPlan__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />
          <button type="submit" className="reasonsFinPlan__submit">{t('financialPlanning.reasonsFinPlan.button')}</button>
        </form>
      </div>
    </section>
  )
}
