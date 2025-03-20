import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './thankYouPage.scss';

export const ThankYouPage = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <div className="thankYouPage">
      <div className="thankYouPage__content">
        <h2 className="thankYouPage__title">Спасибо за ваш запрос!</h2>
        <p className="thankYouPage__message">Мы получили вашу информацию и скоро свяжемся с вами.</p>
        <button onClick={onClose} className="thankYouPage__close">Закрыть</button>
      </div>
    </div>
  );
};
