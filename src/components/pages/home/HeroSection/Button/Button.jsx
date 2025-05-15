import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ModalForm } from '../ModalForm/ModalForm'

import './button.scss';

export const Button = ({ addClass, textButton }) => {
  const { t, i18n } = useTranslation();
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <>
      <button className={`button ${addClass}`} onClick={() => setIsModalFormOpen(true)}>
        {textButton}
      </button>
      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </>
  );
};
