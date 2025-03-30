import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import './buttons.scss';

export const Buttons = () => {
  const { t, i18n } = useTranslation();
  const [isOpenCall, setIsOpenCall] = useState(false);
  const [isOpenWp, setIsOpenWp] = useState(false);

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const handleToggleCall = () => {
    setIsOpenCall(!isOpenCall);
  };

  const handleToggleWp = () => {
    setIsOpenWp(!isOpenWp);
  };

  return (
    <div className='buttons'>
      <div
        className={`buttons__button buttons__button--call ${isOpenCall ? 'buttons__button--open' : ''}`}
        onMouseEnter={() => window.innerWidth > 1024 && setIsOpenCall(true)}
        onMouseLeave={() => window.innerWidth > 1024 && setIsOpenCall(false)}
        onClick={handleToggleCall}
      >
        <div className='buttons__background buttons__background--call'>
          <div className='buttons__icon buttons__icon--call'></div>
          <div className='buttons__text buttons__text--call'>
            <a href="tel:+972504255338" className='buttons__link'>
              050-425-5338
            </a>
          </div>
        </div>
      </div>

      <div
        className={`buttons__button buttons__button--wp ${isOpenWp ? 'buttons__button--open' : ''}`}
        onMouseEnter={() => window.innerWidth > 1024 && setIsOpenWp(true)}
        onMouseLeave={() => window.innerWidth > 1024 && setIsOpenWp(false)}
        onClick={handleToggleWp}
      >
        <div className='buttons__background buttons__background--wp'>
          <div className='buttons__icon buttons__icon--wp'></div>
          <div className='buttons__text buttons__text--wp'>
            <a href="tel:+972504255338" className='buttons__link'>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
