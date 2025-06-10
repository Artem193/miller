import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whatCoverTravelIns.scss';

export const WhatCoverTravelIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="whatCoverTravelIns container">
      <h1 className="whatCoverTravelIns__title">
        {t('travelIns.whatCoverTravelIns.title')}
      </h1>

      <div className="whatCoverTravelIns__boxes"></div>
    </section>
  )
}