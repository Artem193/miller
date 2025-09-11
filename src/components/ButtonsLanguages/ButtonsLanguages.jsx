import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import './buttonsLanguages.scss';

export const ButtonsLanguages = () => {
  const { t, i18n } = useTranslation();

  const [activeLanguage, setActiveLanguage] = useState(i18n.language)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="buttonsLanguages"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      ref={dropdownRef}
    >
      <div className="buttonsLanguages__listPhone">
        <button
          className="buttonsLanguages__buttonPhone buttonsLanguages__buttonPhone--he"
          onClick={() => changeLanguage('he')}
        >
          {t('buttonsLanguages.he')}
        </button>
        <button
          className="buttonsLanguages__buttonPhone buttonsLanguages__buttonPhone--ru"
          onClick={() => changeLanguage('ru')}
        >
          {t('buttonsLanguages.ru')}
        </button>
      </div>
      <button
        className={`buttonsLanguages__button buttonsLanguages__button--${activeLanguage}`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {t(`buttonsLanguages.${activeLanguage}`)}
      </button>
      {isDropdownOpen && (
        <div className="buttonsLanguages__list">
          <button
            className="buttonsLanguages__button buttonsLanguages__button--he"
            onClick={() => changeLanguage('he')}
          >
            {t('buttonsLanguages.he')}
          </button>
          <button
            className="buttonsLanguages__button buttonsLanguages__button--ru"
            onClick={() => changeLanguage('ru')}
          >
            {t('buttonsLanguages.ru')}
          </button>
        </div>
      )}
    </div>
  )
}
