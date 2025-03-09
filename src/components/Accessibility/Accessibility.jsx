import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';

import './accessibility.scss';

export const Accessibility = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isDarkContrast, setIsDarkContrast] = useState(false);
  const [isLightContrast, setIsLightContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        panelRef.current && !panelRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsPanelOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let filterStyles = '';
    if (isMonochrome) {
      filterStyles += 'grayscale(100%) ';
    }
    if (isDarkContrast) {
      filterStyles += 'contrast(200%)';
    }
    if (isLightContrast) {
      filterStyles += 'contrast(50%)';
    }

    document.body.style.filter = filterStyles.trim(); //
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [isMonochrome, isDarkContrast, isLightContrast, fontSize]);

  const toggleMonochrome = () => setIsMonochrome(!isMonochrome);
  const toggleDarkContrast = () => setIsDarkContrast(!isDarkContrast);
  const toggleLightContrast = () => setIsLightContrast(!isLightContrast);
  const increaseFontSize = () => setFontSize((size) => Math.min(size + 2, 24));
  const decreaseFontSize = () => setFontSize((size) => Math.max(size - 2, 12));

  const togglePanel = () => setIsPanelOpen(!isPanelOpen);

  return (
    <div className="accessibility">
      <button
        onClick={togglePanel}
        className="accessibility__icon-button"
        ref={buttonRef}
      >
        ♿
      </button>
      {isPanelOpen && (
        <div
          className="accessibility__panel"
          ref={panelRef}
        >
          <h3 className="accessibility__title">{t('accessibility.accessibility__title')}</h3>
          <button onClick={toggleMonochrome} className="accessibility__button">
            {isMonochrome ? <>{t('accessibility.accessibility__button1')}</> : <>{t('accessibility.accessibility__button2')}</>}
          </button>
          <button onClick={toggleDarkContrast} className="accessibility__button">
            {isDarkContrast ? <>{t('accessibility.accessibility__button3')}</> : <>{t('accessibility.accessibility__button4')}</>}
          </button>
          <button onClick={toggleLightContrast} className="accessibility__button">
            {isLightContrast ? <>{t('accessibility.accessibility__button5')}</> : <>{t('accessibility.accessibility__button6')}</>}
          </button>
          <button onClick={increaseFontSize} className="accessibility__button">
            {t('accessibility.accessibility__button7')}
          </button>
          <button onClick={decreaseFontSize} className="accessibility__button">
            {t('accessibility.accessibility__button8')}
          </button>
        </div>
      )}
    </div>
  );
};
