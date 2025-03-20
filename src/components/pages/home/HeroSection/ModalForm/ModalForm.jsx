import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './modalForm.scss'

export const ModalForm = ({ onClose }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <div className="modalForm" onClick={onClose}>
      <div className="modalForm__content" onClick={(e) => e.stopPropagation()}>
        <h2>Форма</h2>
        <input type="text" placeholder="Ваше имя" />
        <input type="email" placeholder="Ваш email" />
        <button className="modalForm__close" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}