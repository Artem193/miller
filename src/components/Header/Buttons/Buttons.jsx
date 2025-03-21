import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import './buttons.scss';

export const Buttons = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='buttons'>
      <div 
        className={`buttons__button ${isOpen ? 'buttons__button--open' : ''}`}
        onMouseEnter={() => window.innerWidth > 1024 && setIsOpen(true)}
        onMouseLeave={() => window.innerWidth > 1024 && setIsOpen(false)}
        onClick={handleToggle}
      >
        <div className='buttons__background'>
          <div className='buttons__call'></div>
          <div className='buttons__text'>050-123-45-67</div>
        </div>
      </div>
    </div>
  );
};
