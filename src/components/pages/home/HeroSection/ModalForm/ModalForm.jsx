import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
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
    return <ThankYouPage onClose={onClose} />;
  }

  return (
    <div className="modalForm" onClick={onClose}>
      <div className="modalForm__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalForm__title">Получите консультацию</h2>
        <p className="modalForm__description">Заполните форму, и наш специалист свяжется с вами</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Ваше имя"
            {...register("name", { required: "Это поле обязательное" })}
            className={`modalForm__input ${errors.name ? "error" : ""}`} 
          />

          <input
            type="tel"
            placeholder="Ваш телефон"
            {...register("phone", { required: "Это поле обязательное" })}
            className={`modalForm__input ${errors.phone ? "error" : ""}`}
          />

          <input
            type="text"
            placeholder="Ваш город"
            {...register("city", { required: "Это поле обязательное" })}
            className={`modalForm__input ${errors.city ? "error" : ""}`}
          />

          <button type="submit" className="modalForm__submit">Отправить</button>
        </form>
        <div className='modalForm__close' onClick={onClose}></div>
      </div>
    </div>
  );
};
