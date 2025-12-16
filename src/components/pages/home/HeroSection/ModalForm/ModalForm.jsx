import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import './modalForm.scss';
import { ThankYouPage } from "./ThankYouPage/ThankYouPage";

export const ModalForm = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://miller-k5i2.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // ✅ Meta Pixel — отправляем Lead
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Lead');
          window.fbq('trackCustom', 'FormSubmit', { form: 'modal' });
        }

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
    return <ThankYouPage onClose={onClose} />;
  }

  return (
    <div className="modalForm" onClick={onClose}>
      <div className="modalForm__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalForm__title">{t('modalForm.title')}</h2>
        <p className="modalForm__description">{t('modalForm.description')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className="modalForm__form">
          <input
            type="text"
            placeholder={t('modalForm.placeholder__name')}
            {...register("name", {
              required: t('validation.required'),
              minLength: {
                value: 2,
              },
            })}
            className={`modalForm__input ${errors.name ? "error" : ""}`}
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
            className={`modalForm__input ${errors.phone ? "error" : ""}`}
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
            className={`modalForm__input ${errors.city ? "error" : ""}`}
            dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
          />

          <button type="submit" className="modalForm__submit">{t('modalForm.submit')}</button>
          <p className="modalForm__confidentiality">{t('modalForm.confidentiality')}</p>
        </form>
        <div className='modalForm__close' onClick={onClose}></div>
      </div>
    </div>
  );
};
